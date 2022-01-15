
export const compressArray = (original) => {
    let compressed = [];
    // make a copy of the input array
    let copy = original.slice(0);

    // first loop goes over every element
    for (let i = 0; i < original.length; i++) {
        let myCount = 0;
        // loop over every element in the copy and see if it's the same
        for (let w = 0; w < copy.length; w++) {
            if (original[i] === copy[w]) {
                // increase amount of times duplicate is found
                myCount++;
                // sets item to undefined
                delete copy[w];
            }
        }

        if (myCount > 0) {
            let a = {};
            a.value = original[i];
            a.count = myCount;
            compressed.push(a);
        }
    }

    return compressed;
}

export const setupTags = (recipes) => {
    let tagsArray = [];

    recipes.forEach(recipe => {
        tagsArray.push(...recipe.content.tags);
    });

    const mergeTagsArray = compressArray(tagsArray);
    const newTags = mergeTagsArray.sort((a, b) => {
        if (a.value < b.value) {
            return -1;
        }
        return 1;
    });

    return newTags;
}
