type ProductProps = {
    title: string
    type: string
    capacity: number | string
    price: number | string
}

const productsArray:ProductProps [] = [
    {
        title: "iPhone 14 Pro",
        type: "phone",
        capacity: "1Tb",
        price: "1000$"
    },
    {
        title: "iPhone 13 Pro",
        type: "phone",
        capacity: "512Gb",
        price: "800$"
    },
    {
        title: "iPhone 12 Pro",
        type: "phone",
        capacity: "256Gb",
        price: "600$"
    },
    {
        title: "iPhone 11 Pro",
        type: "phone",
        capacity: "128Gb",
        price: "400$"
    },
    {
        title: "iPhone 10 Pro",
        type: "phone",
        capacity: "64Gb",
        price: "200$"
    },
    {
        title: "iPhone 8 Pro",
        type: "phone",
        capacity: "32Gb",
        price: "100$"
    },
]

export default productsArray 