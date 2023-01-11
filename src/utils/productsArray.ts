type ProductProps = {
    id: number,
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const productsArray:ProductProps [] = [
    {
        id: 1,
        title: "iPhone 14 Pro",
        desc: "This is iPhone 14 Pro",
        type: "phone",
        capacity: "1Tb",
        price: 1000
    },
    {
        id: 2,
        title: "iPhone 13 Pro",
        desc: "This is iPhone 13 Pro",
        type: "phone",
        capacity: "512Gb",
        price: 800
    },
    {
        id: 3,
        title: "iPhone 12 Pro",
        desc: "This is iPhone 12 Pro",
        type: "phone",
        capacity: "256Gb",
        price: 600
    },
    {
        id: 4,
        title: "iPhone 11 Pro",
        desc: "This is iPhone 11 Pro",
        type: "phone",
        capacity: "128Gb",
        price: 400
    },
    {
        id: 5,
        title: "iPhone 10 Pro",
        desc: "This is iPhone 10 Pro",
        type: "phone",
        capacity: "64Gb",
        price: 200
    },
    {
        id: 6,
        title: "iPhone 8 Pro",
        desc: "This is iPhone 8 Pro",
        type: "phone",
        capacity: "32Gb",
        price: 100
    },
]

export default productsArray 