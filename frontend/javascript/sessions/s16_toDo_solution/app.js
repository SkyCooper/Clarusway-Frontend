//* ======================================================
//*                     TODO APP
//* ======================================================

//?Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

// let todos = [];  //*local storage verilerini JSON ile tutmak için boş array oluşturuldu. fakat verilerin güncellenmesi için değiştirildi
// todos dizisini localStorage'daki veriler ile guncelle
//! eger localStroge'de todos adinda bir item bulunmaz ise bos array atamasi yap.
let todos = JSON.parse(localStorage.getItem("TODOS")) || [];

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};
renderSavedTodos();
//* bunun içinde kullanılan createListElement(todo) fonksiyonu aşağıda arrow ile tanımlanmıştı, hata vereceğinden dolayı hoisting yapmak için aşağıdaki fonksiyon expression yöntemine çevrildi.

addBtn.addEventListener("click", () => {
  //* trim ile başı ve sonundaki boşlukları sildi. böylece sadece boşluk bırakılması kabul edilmeyecek.

  if (todoInput.value.trim() === "") {
    alert("PLease enter new todo");
  } else {
    //* new toDo ile JSON formatında bilgiler saklandı.

    const newTodo = {
      //* getTime() fonksiyonu ile uniq id değeri oluşturmak bir yöntem. mevcut saatin milisecond cinsinden değerini verir.
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };

    //! yeni bir li elementi olusturup bunu DOM'a bas
    createListElement(newTodo);

    //?Yeni olusturulan todo'yu diziye sakla
    todos.push(newTodo); //* girilen her bilgi obje formatında dizi içinde saklansın

    localStorage.setItem("TODOS", JSON.stringify(todos)); //* her eklemede dizinin tamamı stringe çevrilerek localStorage atılır.
    console.log(todos);

    todoInput.value = "";
  }
});

//* li'leri innerHTML ile yapabiliriz fakat örnek olsun diye createElement ile yapımını gösterdi.

// hoisting yapmak için aşağıdaki fonksiyon expression yöntemine çevrildi. (ilk başta arrow function ile yazıldı.)
function createListElement(newTodo) {
  const { id, completed, text } = newTodo; //todo, destructig yapıldı

  //! yeni bir li elementi olustur ve bu elemente obje icerisindeki
  //! id degerini ve completed class'ini ata
  const li = document.createElement("li");
  //* li'lerin id'sini newTodo objesinden çekiyoruz. 2 yöntemle yapılabilir.
  // li.id = newTodo.id;
  // li.setAttribute("id", newTodo.id);
  li.setAttribute("id", id); //todo, destruct olduğundan

  // newTodo.completed ? li.classList.add("checked") : null  (aynısı)
  // newTodo.completed && li.classList.add("checked");
  completed && li.classList.add("checked"); //todo, destruct olduğundan

  //! okey ikonu olustur ve li elementine bagla
  //* li'lerin içinde önce bir check ikonu sonra p elemeti sonra yine trash ikonu var, bunlarıda tek tek oluşturmak gerekiyor.
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //! todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
  const p = document.createElement("p");
  // const pTextNode = document.createTextNode(newTodo.text);
  const pTextNode = document.createTextNode(text); //todo, destruct olduğundan
  p.appendChild(pTextNode);
  li.appendChild(p);

  //! delete ikonu olustur ve li elementine bagla
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  //! meydana gelen li elementini ul'ye bağla
  todoUl.appendChild(li);
}

//* ul içinde capturing yapıldı, ve içindeki her element yakalandı, şimdi yakalanan elementin klasında trash varsa, yakalanan elemanın parentini sil diyoruz, yani li'nin hepsini.

//* eğer yakalanan elementin klasında check varsa, yakalanan elemanın next sibliginine check

//! Ul elementinin cocuklarindan herhangi birisinden bir event gelirse
//! bunu tespit et ve gerekini yap. (Capturing)
todoUl.addEventListener("click", (e) => {
  console.log(e.target);

  const id = e.target.parentElement.getAttribute("id");
  //! event, bir delete butonundan geldi ise
  if (e.target.classList.contains("fa-trash")) {
    //? delete butonunun parent'ini DOM'dan sil
    e.target.parentElement.remove();

    //? Dizinin ilgili elementini sil
    todos = todos.filter((todo) => todo.id !== Number(id));

    //? todos dizisinin son halini localStorage'e sakla
    localStorage.setItem("TODOS", JSON.stringify(todos));
  } else if (e.target.classList.contains("fa-check")) {
    //! event, bir okey butonundan geldi ise
    //? ilgili li elementinde checked adinda bir class'i varsa bunu sil
    //?  aksi takdirde ekle (DOM)
    e.target.parentElement.classList.toggle("checked");

    //? Dizinin ilgili elementini değiştir.
    todos = todos.filter((todo) => {
      return !todo.completed && true;
    });

    //? todos dizisinin son halini localStorage'e sakla
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }
});

//! Enter tusu ile ekleme mumkun olsun
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});

//! Baslangicta input aktif olsun
window.onload = function () {
  todoInput.focus();
};

//! ödev yapılan değişiklik localstorage da işlensin ve dizi güncellensin.
// } else if (e.target.classList.contains("fa-check")) {
//  bunun altına
//? Dizinin ilgili elementini sil
//*   todos = todos.filter((todo) => todo.id !== Number(id));
// böyle bir işlem yapılacak, sonra
//? todos dizisinin son halini localStorage'e sakla
//*  localStorage.setItem("TODOS", JSON.stringify(todos));
// bunun aynısı yazılacak  (105-109 arasını incele)
