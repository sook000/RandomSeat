const boy = {
    index: document.querySelectorAll('#boyindex'),
    count: 8,
    fixedArray: [1, 2, 3, 4, 5, 6, 7, 8]
}
const girl = {
    index: document.querySelectorAll('#girlindex'),
    count: 6,
    fixedArray: [1, 2, 3, 4, 5, 6]
}
const changeButton = document.querySelector('#changeSeat')
const fixButton = document.querySelector('#fixSeat')
let isChange = true

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



