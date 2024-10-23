
const url = `https://api.cloudinary.com/v1_1/dn2i0nng9/image/upload`


const uploadImage = async (image) => {
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "Hidraulica_product")

    const dataResponse = await fetch(url,{
        method: "post",
        body: formData
    })

    return dataResponse.json()
}

export default uploadImage