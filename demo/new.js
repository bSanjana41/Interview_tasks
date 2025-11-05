// // const logCheck = (req, res, next) => {
// //     const User = req.user?.email || "guest"

// //     console.log(`${User}`)
// //     next()
// // }




// // const FetchApi = () => {
// //     fetch("https://dummyjson.com/products")
// //         .then((response) => {
// //             if (!response.ok) { console.log("error fetching response") }
// //             return response.json()
// //         })
// //         .then((Data) => console.log(Data.products[1].title))
// // }
// // FetchApi()

// const FetchApi2 = async () => {
//     try {
//         const Url = "https://dummyjson.com/products"
//         const res = await fetch(Url)
//         if (!res.ok) { throw new Error("error fetching response") }
//         const data = await res.json()
//         const Titles = data.products.map((d) => {
//             return d.title
//         })
//         console.log(Titles)
//         console.log(Titles[2])
//     } catch (error) {
//         console.error("Failed to fetch data")
//     }
// }
// FetchApi2()


// const myPromise = new Promise((resolve, reject) => {
//     let Event = true
//     if (Event) {
//         resolve("Promise resolved")
//     }
//     reject("Promise rejected")
// })
// myPromise
//     .then((e) => console.log(e))
//     .catch((e) => console.log(e));

// console.log()




