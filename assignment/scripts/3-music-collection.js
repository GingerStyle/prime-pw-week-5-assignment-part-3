console.log('***** Music Collection *****')

let collection = [];

//function to add albums to collection array
function addToCollection(title, artist, yearPublished){
    let album = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

//testing addToCollection function
console.log(addToCollection('What You Can Do With Worms', 'BirdMan', 2011));
console.log(addToCollection('Fun With Space and Time', 'Stan the Brick', 2001));
console.log(addToCollection('Oh tha Places You Will Go', 'D. Seuss', 1990));
console.log(addToCollection('I Have Such Sights to Show You', 'Pinhead', 1987));
console.log(addToCollection("No Sir I Don't Like It", 'Mr. Horse', 1991));
console.log(addToCollection('My Middle Name is Danger Zone', 'Archer', 2009));

//function to show the whole collection
function showCollection(albums){
    console.log('Number of Albums:', albums.length);
    for (let item in albums){
        console.log(`Album Artist: ${item.albumArtist}`, `Album Title: ${item.albumTitle}`, `Year Published: ${item.albumYearPublished}`);
    }
}

//testing showCollection function
showCollection.apply({}, collection);

//function to search the collection by artist name
function findByArtist(artist){
    let results = [];
    for (let object in collection){
        if (object.albumArtist == artist){
            results.push(object);
        }
    }
    return results;
}

//testing findByArtist function
console.log(findByArtist('Pinhead'));