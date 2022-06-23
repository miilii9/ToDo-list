const form = document.querySelector(".form-search input");
const ul = document.querySelector(".list-custom");
const add = document.querySelector(".form-add");
const list = document.querySelectorAll(".list-costum");
const deletIcon = document.querySelectorAll(".delet-icon");

add.addEventListener("submit",e=>{
    e.preventDefault();
    const todo = add.add1.value.trim();
    if(todo.length){

        ul.innerHTML+= `<li class="list-group-item d-flex justify-content-between align-items-center list-costum">
        <span>${todo}</span> 
        <i class="far fa-trash-alt delet-icon"></i>
    </li>`
    }
    add.reset();

});

ul.addEventListener("click",e=>{
    e.preventDefault();
    if(e.target.classList.contains("delet-icon")){
        e.target.parentElement.remove();
    }
})
const filterWord = word=>{
    Array.from(ul.children)
    .filter((todo)=> !todo.textContent.includes(word) 
    )
    .forEach(todo => todo.classList.add("hide"))

    Array.from(ul.children)
    .filter((todo)=> todo.textContent.includes(word)
    )
    .forEach(todo => todo.classList.remove("hide"))


}
form.addEventListener("keyup",()=>{
    const searchWord = form.value.trim();
    filterWord(searchWord);
})






