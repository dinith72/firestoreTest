const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add_data');
const btnDelete = document.querySelector('#btnDelete');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    cafeList.appendChild(li);
}

// getting data
db.collection('cafes').where('city' , '==' , 'gampaha').orderBy('name').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        // renderCafe(doc);
        console.log(doc.data());
    });
});

// gett data querying 
// db.collection('cafes').where('city' , '<','h').get().then(snapshot => {
//         snapshot.docs.forEach(doc => {
//             // renderCafe(doc);
//             console.log(doc.data());
//         });
//     });

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    // alert('submit clicked');
    var cafe = {
        name: 'burgher king',
        city: 'galle'
    };
    db.collection('cafes').add(cafe);

});

btnDelete.addEventListener('click',(event)=>{
    alert('delete clicked');
    db.collection('cafes').doc('sEXQ4OU4F7FQdqeuPB5E').delete();
});

