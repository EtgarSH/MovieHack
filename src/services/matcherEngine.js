/**
 * A Matcher algorithm for getting suggestions based on user rating vectors
 * A User Rating Vector Example is a plain object with the following structure:
 * userVec = {
 *  'someMovieId' : false,
 *  'someMovieId2' : true,
 * };
 * 'false' means the user disliked someMovieId, and 'true' means he liked it.
 * @return {{getRank: getRank, extractSuggestions: extractSuggestions}}
 * @constructor
 */
function Matcher() {

    /**
     * Returns a matchmaking number that represent the proximity of a userRating to
     * another userRating.
     * @param userRatings the userRating baseline
     * @param otherUserRatings the other userRating to compare to
     * @returns number - an integer that represents the proximity of two user ratings.
     * A higher value means these two user ratings are 'closer' to one another.
     */
    function getRank(userRatings, otherUserRatings) {
        let rank = 0;
        if(!userRatings || !otherUserRatings) {
            throw new Error(`getRank failed: ${!userRatings ? 'userRatings is:': 'otherUserRatings is:'} ${!userRatings ? userRatings: otherUserRatings}}`);
        }

        for(const key of userRatings) {
            if(otherUserRatings[key]) {
                rank += otherUserRatings[key] === userRatings[key] ? 1 : -1;
            }
        }

        return rank;
    }

    /**
     * Extract positive suggestions from another user ratings
     * @param userRatings the userRatings our user have
     * @param otherUserRatings the userRating another user have
     * @return {Array} positive rating keys that did not appear in our userRatings
     */
    function extractSuggestionsFromUserRatings(userRatings, otherUserRatings) {
        let suggestions = [];
        for(const key of otherUserRatings) {
            // If the rating was positive, AND it didn't appear in our ratings:
            if(otherUserRatings[key] === true && userRatings[key] === undefined ) {
                suggestions.push(key);
            }
        }
        return suggestions;
    }

    /**
     * Extract suggestions from a given userRatingCollection
     * @param userRatings our user's ratings
     * @param otherUserRatingsCollection a collection of other userRatings
     * @return {Array.<*>} string array of keys that represent relevant suggestions
     */
    function extractSuggestions(userRatings, otherUserRatingsCollection) {
        let suggestions = [];
        // First, rank the user ratings
        for(const otherUserRatings of otherUserRatingsCollection) {
            suggestions.push({
                userRating: otherUserRatings,
                rank: getRank(userRatings, otherUserRatings)
            });
        }
        // Second, sort them by their rank (at most K objects).
        suggestions = suggestions.sort((a,b) => a.rank - b.rank);

        // Third, filter bad match ups (negative) (TODO: deal with over filtering)
        suggestions = suggestions.filter(a => a.rank > 0);

        let accumulatedSuggestions = {};

        // Forth, extract suggestions from top ranked
        for(const suggestion of suggestions) {
            const keys = extractSuggestionsFromUserRatings(userRatings, suggestion.userRating);
            for(const key of keys) {
                // If the key has already appeared in a previous suggestion, add one to it.
                if(accumulatedSuggestions.has(key)) {
                    accumulatedSuggestions.set(key, accumulatedSuggestions.get(key) + 1);
                }
                //Otherwise, set the suggestion to one.
                else {
                    accumulatedSuggestions.set(key, 1);
                }
            }

        }

        // Fifth, sort the suggestion keys by their number of appearances.
        // TODO change to a weighted number based on rank, for better suggestions
        return Object.keys(accumulatedSuggestions).sort(function(a,b){return accumulatedSuggestions[b]-accumulatedSuggestions[a]});
    }

    // some public API methods
    return {
        getRank,
        extractSuggestions
    }
}