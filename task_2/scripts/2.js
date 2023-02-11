console.log('--------------------------------Задание 2--------------------------------')
//массив учащихся
let arr = [
{
	name: 'Vasya',
	class: 6,
	mark: 5
},
{
	name: 'Katye',
	class: 5,
	mark: 4
},
{
	name: 'Alex',
	class: 5,
	mark: 2
},
{
	name: 'Vanessa',
	class: 8,
	mark: 4
    
},
{
	name: 'Ilya',
	class: 8,
	mark: 4
},
{
	name: 'Angelina',
	class: 7,
	mark: 5
},
{
	name: 'Sara',
	class: 7,
	mark: 5
},
{
	name: 'Vladimir',
	class: 1,
	mark: 5
}
]

console.log('Общий массив с учащимися: ', arr)

//2.1 Вывод общего среднего балла

let marks= []
for(i=0; i < arr.length; i++) {
    marks.push(arr[i].mark)
}

let average = marks.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
})



console.log('Средняя оценка всех учащихся: ', average/marks.length)

// 2.2
let classes = []

arr.forEach(arr => classes.push(arr.class))
let newSet = new Set(classes);
let uniqueNumbers = Array.from(newSet)

let students = []

for(let i = 0; i < uniqueNumbers.length; i++) {
    students.push({
        class: 0,
        classmates: [],
        averageMarks: []
    })
}

for (let i = 0; i < uniqueNumbers.length; i++) {
    for(let j = 0; j < classes.length; j++ ) {
       if(uniqueNumbers[i] === arr[j].class) {
        students[i].class = uniqueNumbers[i]
        students[i].classmates.push(arr[j])
        students[i].averageMarks.push(arr[j].mark)
       }
    }
}

console.log('Средние оценки учащихся сгруппированные по классу: ', students)

// 2.3
arr.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  })

  arr.sort(function (a, b) {
    return b.mark - a.mark
  })

let topFive = new Array(arr[0], arr[1], arr[2], arr[3], arr[4])
console.log('Топ 5 лучших учащихся отсортированных по полю name', topFive)