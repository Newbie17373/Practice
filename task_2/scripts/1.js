let object = {
      firstLevelFirstField: {
        secondLevelFirstField: 'easy',
        secondLevelSecondField: {
          thirdLevelFirstField: "a2",
          thirdLevelSecondField: {
            fourthLevelFirstField: {
              fifthLevelFirstField: "a2",
              fifthLevelSecondField: 5,
              fifthLevelThirdField: "easy",
            },
          },
          thirdLevelThirdField: {},
          thirdLevelFourthField: 500,
        },
        secondLevelThirdField: {},
        secondLevelFourthField: {
          thirdLevelFirstField: "JavaScript",
          thirdLevelSecondField: "margin auto",
          thirdLevelThirdField: "!important is evel",
        },
        secondLevelFifthField: "Async",
      },
      firstLevelSecondField: "easy",
      firstLevelThirdField: 123,
      firstLevelFourthField: {
        secondLevelFirstField: "React.js",
        secondLevelSecondField: {
          thirdLevelFirstField: 42,
        },
      },
    };

    let level = prompt('Введите уровень вложенности: ')

    const displayObject = (obj, parentNode, level) => {
        if (level > 0) {
            for (let key in obj) {
                let li = document.createElement('li')
                li.innerHTML = key
                parentNode.appendChild(li)
                if (typeof obj[key] === 'object') {
                    let subParent = document.createElement('ul')
                    li.appendChild(subParent)
                    level--
                    displayObject(obj[key], subParent, level)
                } else {
                    li.innerHTML += `: ${obj[key]}`
                }
            }
        }
    }

    const searchInput = document.querySelector('.search__input')
    const searchBtn = document.querySelector('.search__button')
    const searchBtn2 = document.querySelector('.search__restart')

    const displayObject2 = (obj, parentNode, level) => {
      if (level > 0) {
          for (let key in obj) {
            let li = document.createElement('li')
            li.innerHTML = key
            li.className = 'some'
                  if(obj[key].toString() === searchInput.value) {
                        li.innerHTML = key
                        li.className = 'nice'
                    }         
              parentNode.appendChild(li)
               if (typeof obj[key] === 'object') {
                  let subParent = document.createElement('ul')
                  li.appendChild(subParent)
                  subParent.className = 'some'
                  level--
                  displayObject2(obj[key], subParent, level)
              } else if(obj[key].toString() === searchInput.value) {
                  li.innerHTML += `: ${obj[key]}`
              }
          }
      }
  }

  const setClasses =(el) => { 
      if (!el) return 0
      for (let i = 0; el.parentNode != document.querySelector('.block'); i++, el = el.parentNode) {
            el.className = 'nice'
      } return i;
    }
    
    displayObject(object, document.querySelector('.object'), level)
    
    

    searchBtn.addEventListener('click', () => {
      document.querySelector('.object').innerHTML = ``
      level = prompt('Введите уровень вложенности: ')
      displayObject2(object, document.querySelector('.object'), level)
     let list = document.querySelectorAll('.nice')
      list.forEach(el => {setClasses(el)})
      document.querySelectorAll('.some').forEach(el => {el.remove()})
    })

    searchBtn2.addEventListener('click', () => {document.querySelector('.object').innerHTML = ``, 
    level = prompt('Введите уровень вложенности: '), 
    displayObject(object, document.querySelector('.object'), level)})