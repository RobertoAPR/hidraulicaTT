const imageTobasee = async(image) => {
    const reader = new FileReader()
    reader.readAsDataURL(image)

    const data = await new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })

    return data
}

export default imageTobasee;