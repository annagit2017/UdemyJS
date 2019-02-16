const anotherToDo = [ {text: 'Some Task', completed: false},
    {text: 'Another Task', completed: false},
    {text: 'Task 3', completed: false},
    {text: 'Yet empty two', completed: true},
    {text: 'Cat is hungry', completed: true},
    {text: 'Some new task', completed: false}];


const filters = {
    searchText: '',
};

const DisplayNote  = function(allNotes, filters){
    const filterBylist = anotherToDo.filter(function (e) {
        return e.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#all-notes').innerHTML = ''

    filterBylist.forEach(function (e){
        const p = document.createElement('p');
        p.textContent = e.text;
        document.querySelector('#all-notes').appendChild(p)
    })

};

const reusableFiltered = function (anyToDoList){
    return anyToDoList.filter(function (task) {
        return !task.completed;
    });
};

DisplayNote(anotherToDo, filters);

document.querySelector('#check-box-hide').addEventListener('change', function (state) {
    if (state.target.checked) {
        document.querySelector('#all-notes').innerHTML = ''
        return reusableFiltered(anotherToDo).forEach(function (e){
            const p = document.createElement('p');
            p.textContent = e.text;
            document.querySelector('#all-notes').appendChild(p);
        })
    } else {
        DisplayNote(anotherToDo,filters)}
})


document.querySelector('#search-input').addEventListener('input', function (e){
    filters.searchText = e.target.value;
    DisplayNote(anotherToDo, filters);
});
document.querySelector('#add-note').addEventListener("submit", function(e){
    e.preventDefault();
    anotherToDo.push({text: e.target.elements.text.value,
        completed: false});
    DisplayNote(anotherToDo, filters);
    e.target.elements.text.value = '';
})