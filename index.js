let div = document.getElementById('container')
let arrivalTimesScreen = document.getElementById('arrival-times')
let = document.getElementById('')
let = document.getElementById('')

const getAllStations = async () => {
    let req = await fetch('https://mtaapi.herokuapp.com/stations')
    let res = await req.json()
    res.result.forEach((element) => {
        // console.log('stations' , res)
        let h2 = document.createElement('h2')
        h2.innerText = element.name
        h2.dataset.stationId = element.id 
        h2.addEventListener('click', () => {
            getArrivalTimes(h2.dataset.stationId)
        })
       
        div.append(h2) 
    })

    const displayArrivalTimes = (arrivalTimes) => {
        arrivalTimes.forEach((element) => {
            let h4 = document.createElement('h4')
            h4.innerText = element
            arrivalTimesScreen.append(h4)
        })
    }

    const getArrivalTimes = async (stationId) => {
        let req = await fetch(`https://mtaapi.herokuapp.com/api?id=${stationId}`)
        let res = await req.json()
        console.log('Arrival times', res.result.arrivals)
        displayArrivalTimes(res.result.arrivals)
    
    }
}
/*const getArrivalTimes = async (stationId) => {
    let req = await fetch(`https://mtaapi.herokuapp.com/api?id=${stationId}`)
    let res = await req.json()
    console.log('Arrival times', res.result.arrivals)
}*/
getAllStations()