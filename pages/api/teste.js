function teste (req, res) {
    console.log("Entrou no teste")
    res.status(200).json({teste: true})
}

export default teste