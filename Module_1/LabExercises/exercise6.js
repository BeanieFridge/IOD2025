const book = {
    "title": "Hachet",
    "description": "After the pilot dies from a heart attack, a 13-year old boy crash lands the plane and must learn to survive in the wilderness on his own.",
    "author": "Gary Paulson",
    "page count": "195",
}
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book["page count"]);

book.description = 'a 13-year old boy must learn to survive in the wilderness, after crash landing a plane because the pilot died of a heart attack';

console.log(book.description);