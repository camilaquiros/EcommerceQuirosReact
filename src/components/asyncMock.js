const products =  [
    {
        id: '1',
        nombre: 'Base Dior',
        categoria: 'Bases',
        precio: 54,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'bases/DiorForever.jpg',
        cantidad: 0
    },
    {
        id: '2',
        nombre: 'Base Anastasia',
        categoria: 'Bases',
        precio: 38,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'bases/Anastasia.jpg',
        cantidad: 11
    },
    {
        id: '3',
        nombre: 'Base Elf',
        categoria: 'Bases',
        precio: 6,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'bases/Elf.jpg',
        cantidad: 12
    },
    {
        id: '4',
        nombre: 'Base Fenty',
        categoria: 'Bases',
        precio: 39,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'bases/Fenty.jpg',
        cantidad: 13
    },
    {
        id: '5',
        nombre: 'Labial CT',
        categoria: 'Labiales',
        precio: 34,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'labiales/CharlotteTilbury.jpg',
        cantidad: 14
    },
    {
        id: '6',
        nombre: 'Labial Fenty',
        categoria: 'Labiales',
        precio: 26,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'labiales/Fenty.jpg',
        cantidad: 15
    },
    {
        id: '7',
        nombre: 'Labial HausLabs',
        categoria: 'Labiales',
        precio: 24,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'labiales/HausLabs.jpg',
        cantidad: 16
    },
    {
        id: '8',
        nombre: 'Labial PatMcGrath',
        categoria: 'Labiales',
        precio: 39,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'labiales/PatMcGrath.jpg',
        cantidad: 17
    },
    {
        id: '9',
        nombre: 'Mascara Benefit',
        categoria: 'Mascaras',
        precio: 27,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'mascaras/Benefit.jpg',
        cantidad: 18
    },
    {
        id: '10',
        nombre: 'Mascara Hourglass',
        categoria: 'Mascaras',
        precio: 29,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'mascaras/Hourglass.jpg',
        cantidad: 19
    },
    {
        id: '11',
        nombre: 'Mascara Lancome',
        categoria: 'Mascaras',
        precio: 32,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'mascaras/Lancome.jpg',
        cantidad: 20
    },
    {
        id: '12',
        nombre: 'Mascara Maybelline',
        categoria: 'Mascaras',
        precio: 12.99,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'mascaras/MaybellineSkyHigh.jpg',
        cantidad: 21
    },
    {
        id: '13',
        nombre: 'Paleta Anastasia',
        categoria: 'Paletas',
        precio: 45,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'paletas/Anastasia.jpg',
        cantidad: 22
    },
    {
        id: '14',
        nombre: 'Paleta Colourpop',
        categoria: 'Paletas',
        precio: 34,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'paletas/ColourpopBareNecessities.jpg',
        cantidad: 0
    },
    {
        id: '15',
        nombre: 'Paleta ND',
        categoria: 'Paletas',
        precio: 65,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'paletas/NatashaDenonaPastel.jpg',
        cantidad: 24
    },
    {
        id: '16',
        nombre: 'Paleta Pat McGrath',
        categoria: 'Paletas',
        precio: 128,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'paletas/PatMagrath.jpg',
        cantidad: 25
    },
    {
        id: '17',
        nombre: 'Brocha Fenty',
        categoria: 'Brochas',
        precio: 36,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'brochas/Fenty.jpg',
        cantidad: 26
    },
    {
        id: '18',
        nombre: 'Brochas Morphe',
        categoria: 'Brochas',
        precio: 38,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'brochas/MorpheJaclyn.jpg',
        cantidad: 27
    },
    {
        id: '19',
        nombre: 'Brochas RT',
        categoria: 'Brochas',
        precio: 19.99,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'brochas/RealTechniques.jpg',
        cantidad: 28
    },
    {
        id: '20',
        nombre: 'Brochas Sigma',
        categoria: 'Brochas',
        precio: 73,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'brochas/Sigma.jpg',
        cantidad: 29
    },
    {
        id: '21',
        nombre: 'Esmalte ILNP',
        categoria: 'Esmaltes',
        precio: 10,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'esmaltes/ILNP.jpg',
        cantidad: 30
    },
    {
        id: '22',
        nombre: 'Esmalte ILNP',
        categoria: 'Esmaltes',
        precio: 10,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'esmaltes/ILNPHiFi.jpg',
        cantidad: 31
    },
    {
        id: '23',
        nombre: 'Esmalte ILNP',
        categoria: 'Esmaltes',
        precio: 10,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'esmaltes/ILNPMulticolored.jpg',
        cantidad: 32
    },
    {
        id: '24',
        nombre: 'Esmalte ILNP',
        categoria: 'Esmaltes',
        precio: 10,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis repellat necessitatibus quidem mollitia enim nulla possimus, assumenda vitae esse pariatur voluptas, illo suscipit soluta temporibus autem facilis culpa? Eaque!',
        imagen: 'esmaltes/ILNPRadiant.jpg',
        cantidad: 33
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 2000)
    })
}
