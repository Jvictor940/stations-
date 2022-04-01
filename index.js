let div = document.getElementById('container')
let = document.getElementById('')
let = document.getElementById('')
let = document.getElementById('')

const getAllStations = async () => {
    let req = await fetch('https://mtaapi.herokuapp.com/stations')
    let res = await req.json()
    res.result.forEach((element) => {
        // console.log('stations' , res)
        let h2 = document.createElement('h2')
        h2.innerText = element.name
        div.append(h2)

        
    });
}
getAllStations()