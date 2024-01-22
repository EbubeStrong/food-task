// function toggleSidebar(){
//     const sideBar = document.getElementById('sidebar');
//     sideBar.style.display = sideBar.style.display === 'none' ? 'flex' : 'none'
// }

function openNav(){
    document.getElementById("sidebar").style.display = 'block'; 
}

function closeNav(){
    document.getElementById("sidebar").style.display = 'none';
}

function showImages(foodType){
    const imageContainers = document.querySelectorAll('.food-content');
    const image_Containers = document.querySelectorAll('.food-content-2');
    imageContainers.forEach(container => {
        container.style.display = 'none'
    });
    image_Containers.forEach(container => {
        container.style.display = 'none'
    });


    const selectedContainer = document.getElementById(`${foodType}-images`);
    const selected_Container = document.getElementById(`${foodType}-pics`);
    if (selectedContainer){
        selectedContainer.style.display = 'flex'
    }
    if (selected_Container){
        selected_Container.style.display = 'flex'
    }
}

function showAllImages(){
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
        container.style.display = 'block';
    });
}