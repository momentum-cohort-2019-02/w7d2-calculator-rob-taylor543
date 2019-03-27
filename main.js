function makeButtons(){
    makeEntryButton('1')
    makeEntryButton('2')
    makeEntryButton('3')
    makeEntryButton('4')
    makeEntryButton('5')
    makeEntryButton('6')
    makeEntryButton('7')
    makeEntryButton('8')
    makeEntryButton('9')
    makeEntryButton('0')
    makeEntryButton('+')
    makeEntryButton('-')
    makeEntryButton('/')
    makeEntryButton('*')
    makeEntryButton('.')

    const buttonsDiv = document.querySelector('#buttons')
    const buttonClasses = 'f6 link dim br3 ba bw2 ph3 pv2 mb2 dib navy'.split(' ')
    const button = document.createElement('button')
    button.innerText = 'CLEAR'
    buttonsDiv.appendChild(button)

    for (let cssClass of buttonClasses) {
        button.classList.add(cssClass)
    }

    button.addEventListener('click', function () {
        document.querySelector('#result-field').innerText=''
    })

    const equalsButton = document.createElement('button')
    equalsButton.innerText = '='
    buttonsDiv.appendChild(equalsButton)

    for (let cssClass of buttonClasses) {
        equalsButton.classList.add(cssClass)
    }

    equalsButton.addEventListener('click', function () {
        document.querySelector('#result-field').innerText=eval(document.querySelector('#result-field').innerText)
    })
}

function makeEntryButton(operator){
    const buttonsDiv = document.querySelector('#buttons')
    const buttonClasses = 'f6 link dim br3 ba bw2 ph3 pv2 mb2 dib navy'.split(' ')
    const button = document.createElement('button')
    button.innerText = operator
    buttonsDiv.appendChild(button)

    for (let cssClass of buttonClasses) {
        button.classList.add(cssClass)
    }

    button.addEventListener('click', function () {
        document.querySelector('#result-field').innerText+=operator
    })
}

function main(){
    makeButtons()
}

document.addEventListener('DOMContentLoaded', main)
