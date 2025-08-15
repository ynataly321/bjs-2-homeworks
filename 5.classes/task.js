class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    set state(number) {
        if(number < 0) {
            this._state = 0;
        }
        else if(number > 100) {
            this._state = 100;
        }
        else {
            this._state = number;
        }    
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state *= 1.5;
    } 
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";        
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";        
    } 
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";        
    }   
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        
        let foundBook = this.books.find(book => book[type] === value) 
        if (foundBook !== undefined){
            return foundBook;
        }
        return null;
    }

    giveBookByName(bookName) {
        let indexOfBook = this.books.findIndex(book =>{
            return book.name === bookName;
            }
        )
        if (indexOfBook === -1){
            return null;
        }
        return this.books.splice(indexOfBook, 1)[0];
    }
}

