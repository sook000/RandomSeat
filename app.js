const boy = {
    index: document.querySelectorAll('#boyindex'),
    count: 13,
    fixedArray: function () {
        array = []
        for (let i = 0; i < 13; i++) {
            array.push(i)
        }
        return array
    }
}
const girl = {
    index: document.querySelectorAll('#girlindex'),
    count: 12,
    fixedArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}
const changeButton = document.querySelector('#changeSeat')
const fixButton = document.querySelector('#fixSeat')
let isChange = true
let isVisible = true

function changeSeat() {
    for (gender of [boy, girl]) {
        const numArray = []
        while (numArray.length < gender.count) {
            randomNum = Math.floor(Math.random() * gender.count) + 1
            if (numArray.indexOf(randomNum) === -1) {
                numArray.push(randomNum)
            }
        }
        for (let i = 0; i < gender.index.length; i++) {
            gender.index[i].textContent = numArray[i]
        }
    }
}

function fixingSeat() {
    for (gender of [boy, girl]) {
        for (let i = 0; i < gender.fixedArray.length; i++) {
            gender.index[i].textContent = gender.fixedArray[i]

        }
    }
}

changeButton.addEventListener('click', function () {
    if (isChange) {
        changeSeat()
    } else {
        fixingSeat()
    }
})

fixButton.addEventListener('click', function () {
    if (isChange) {
        isChange = false
        fixButton.textContent = '고정된 자리 배치 중'
    } else {
        isChange = true
        fixButton.textContent = '랜덤 자리 배치 중'
    }
})

document.querySelector('h1').addEventListener('click', function () {
    if (isVisible) {
        fixButton.style.display = 'block'
        isVisible = false
    } else {
        fixButton.style.display = 'none'
        isVisible = true
    }
})



