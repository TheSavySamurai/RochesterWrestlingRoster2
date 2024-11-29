const sortButton = document.getElementById('sortButton');
const sortByList = document.getElementById('sortOptions');
let sortStatus = false;
function sortButtonClicked(){
    console.log("sortButtonClicked");
    if(sortStatus == false){
        sortByList.classList.add('show');
        sortStatus = true;
    } else{
        sortByList.classList.remove('show');
        sortStatus = false;
    }
}