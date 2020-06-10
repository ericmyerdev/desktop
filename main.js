var date = new Date()

days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

var currDay = days[date.getDay()]
var currMonth = months[date.getMonth()]
var currYear = date.getFullYear()
var currHour = checkTime(date.getHours())
var currMin = checkTime(date.getMinutes())
var currSec = date.getSeconds()
var currDate = currMonth + ", " + date.getDate() + " " + currYear
var currTime1 = currHour + ":" + currMin
var currTime2 = currHour + ":" + currMin + ":" + currSec

function checkTime(i) {
    if (i < 10) { i = "0" + i }
    return i
}

document.getElementById("date").innerText = currDay.substr(0, 3) + " " + currTime1

function switchTime() {
    if (document.getElementById("date").innerText == currDay.substr(0, 3) + " " + currTime1) {
        document.getElementById("date").innerText =
            currDate + " " + currTime2
    }
    else {
        document.getElementById("date").innerText =
            currDay.substr(0, 3) + " " + currTime1
    }
}

function openMenu() {
    var target = document.getElementById(event.target.id)
    var menus = document.getElementsByClassName("menu")

    for (el of menus) {
        if (el.classList.contains("open")) { el.classList.toggle("open", false) }
    }

    document.getElementById(target.id + "menu").classList.toggle("open", true)
}

function closeAll() {
    var menus = document.getElementsByClassName("menu")

    for (el of menus) {
        if (event.target.closest(".open") == null) {
            if (el.classList.contains("open")) {
                el.classList.toggle("open", false)
            }
        }
    }
}