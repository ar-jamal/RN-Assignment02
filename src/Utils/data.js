import axios from 'axios';
async function getData() {
    // axios.get('https://fakestoreapi.com/products?limit=5')
    //   .then((res) => 
    //   {console.log(res.data) })
    //   // .then((json) => {console.log(json)})
    //   .catch((err) => {
    //     console.log("err",err)
    //   })
    await fetch('https://fakestoreapi.com/products')
        .then(res =>
            res.json())
        .then(json => {
            const data = [];
            for (const x in json) {
                const category= x.category;
                const description= x.des 
            }
            setListItems(data)
            console.log(setListItems);
        })
        .catch((err) => {
            console.log("err", err)
        })
}