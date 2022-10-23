console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let album = {
        albumTitle: title,
        albumArtist: artist,
        albumYearPublished: yearPublished
    }
    collection.push(album);
    return album;
}