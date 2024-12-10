export const recipies = [
    {
        id: 1,
        name: 'Paprikás krumpli',
        cookTime: 45,
        difficulty: 'könnyű',
        img: new URL('../assets/paprikaskrumpli.jpg', import.meta.url).href

    },
    {
        id: 2,
        name: 'Túrógombóc',
        cookTime: 60,
        difficulty: 'közepes',
        img: new URL('../assets/turogomboc.jpg', import.meta.url).href
    },
    {
        id: 3,
        name: 'Gulyásleves',
        cookTime: 120,
        difficulty: 'nehéz',
        img: new URL('../assets/gulyasleves.jpg', import.meta.url).href
    },
    {
        id: 4,
        name: 'Palacsinta',
        cookTime: 30,
        difficulty: 'könnyű',
        img: new URL('../assets/pancake.jpg', import.meta.url).href
    }
];