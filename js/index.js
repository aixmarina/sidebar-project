const toggle_btn = document.querySelector(".sidebar-toggle")
const close_btn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

toggle_btn.addEventListener('click', function () {

    // this is another way to do the toggle but less optimized
    // if (sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove("show-sidebar")
    // }
    // else {
    //     sidebar.classList.add("show-sidebar")
    // }
    sidebar.classList.toggle("show-sidebar")
})

close_btn.addEventListener('click', function () {
    sidebar.classList.remove("show-sidebar")
})