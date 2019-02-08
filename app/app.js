let payPeriod = [
  {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0
  },
  {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0
  }
]

function drawButtons(arr) {
  let template = ''
  let totalHours = 0
  for (let i = 0; i < arr.length; i++) {
    let week = arr[i];
    for (let day in week) {
      totalHours += week[day]
      template += `<div class="col-2"><h2>${day}</h2><button onclick="incrementHours(${i},'${day}',1)" class="btn btn-primary">+</button><h5>${week[day]}</h5><button onclick="incrementHours(${i},'${day}',-1)" class="btn btn-primary")>-</button></div>`
      if (day == "Friday") {
        template += `
        <div class="col-2">
          <h2>total hours: <span class="week${i + 1}">${totalHours}</span></h2>
        </div>
        `
        totalHours = 0
      }
    }
  }
  document.getElementById('weeks').innerHTML = template
  calcTotal()

}

drawButtons(payPeriod);


function incrementHours(week, day, hour) {

  payPeriod[week][day] += hour;
  drawButtons(payPeriod);
}

function calcTotal() {
  let week1TotalNum = +(document.querySelector(".week1").textContent)
  let week2TotalNum = +(document.querySelector(".week2").textContent)


  document.querySelector(".totalHours").textContent = (week1TotalNum + week2TotalNum).toString()



}