const currentPageNav = document.querySelector(".currentPage");
    const allNavPages = document.querySelectorAll(".navbar a");
    allNavPages.forEach((page) => {
        if(page !== currentPageNav){
            page.addEventListener("mouseover", (event) => {
                currentPageNav.classList.toggle("currentPage");
            })
            page.addEventListener("mouseout", (event) => {
                currentPageNav.classList.toggle("currentPage")
            })
        }
    })