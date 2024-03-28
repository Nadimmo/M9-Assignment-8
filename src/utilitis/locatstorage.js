const getStoredToBookCart = ()=>{
    const storedToCart = localStorage.getItem('selected-book')
    if(storedToCart){
        return JSON.parse(storedToCart)
    }
    return []
}

const saveToBookCart = (id)=>{
    const storedToCarts = getStoredToBookCart()

    const exists = storedToCarts.find(jobId => jobId === id)
    if(!exists){
        storedToCarts.push(id)
       localStorage.setItem('selected-book', JSON.stringify(storedToCarts)) 
    }
}
const getStoredWishList = ()=>{
    const storedToWishlist = localStorage.getItem('selectedWish-book')
    if(storedToWishlist){
        return JSON.parse(storedToWishlist)
    }
    return []
}

const saveToBookWishList = (id)=>{
    const storedToWishlists = getStoredWishList()

    const exists = storedToWishlists.find(jobId => jobId === id)
    if(!exists){
        storedToWishlists.push(id)
       localStorage.setItem('selectedWish-book', JSON.stringify(storedToWishlists)) 
    }
}

export{getStoredToBookCart, saveToBookCart, getStoredWishList, saveToBookWishList}