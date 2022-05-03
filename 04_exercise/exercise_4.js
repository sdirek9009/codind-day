let books = [
    {
        title: 'Identy',
        author: 'Robert Ludlum',
        soldout: true,
        inStock: false,
        price: 33,
    },
    {
        title: 'Ultimatom',
        author: 'Robert Ludlum',
        soldout: false,
        inStock: true,
        price: 29,
    },

    {
        title: 'Superior',
        author: 'Robert Ludlum',
        soldout: true,
        inStock: false,
        price: 33,
    },
];

//Sort elements of array

function sorting(x,y) {
    if ( x.title < y.title ){
        return -1;
    }
    else if ( x.title > y.title ){
        return 1;
    } else
        return 0;
};






books.forEach((x) => {
    console.log(books.sort((x) => {return x.title}));
});

/*books.sort((a) => {
    return a.title;
});

employees.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});*/