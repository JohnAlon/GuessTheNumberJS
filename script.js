function guess() {
    let maxNum = document.getElementById('max').value
    let userNum = document.getElementById('usrNum').value
    let result = document.getElementById('generated')
    let mess = document.getElementById('result')

    let number = Math.round(Math.random() * maxNum)
    result.textContent = number
    if (userNum == number) {
        mess.textContent = 'You win'
    }
    else {
        mess.textContent = 'You lose'
    }
}