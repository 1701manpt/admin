(function aside() {
    const items = [
        {
            href: ".",
            titleUrl: "Home",
            icon: '<i class="bi bi-house-door"></i>',
            title: "Trang chủ",
        },
        {
            href: "customer",
            titleUrl: "Customer",
            icon: '<i class="bi bi-people"></i>',
            title: "Khách hàng",
        },
        {
            href: "product",
            titleUrl: "Product",
            icon: '<i class="bi bi-bucket"></i>',
            title: "Sản phẩm",
        },
        {
            href: "order",
            titleUrl: "Order",
            icon: '<i class="bi bi-cart-check"></i>',
            title: "Đơn hàng",
        },
        {
            href: "sale_off",
            titleUrl: "Sale Off",
            icon: '<i class="bi bi-receipt"></i>',
            title: "Giảm giá",
        },
    ]
    function createItem(href, titleUrl, icon, title) {
        const a = document.createElement("a")
        a.setAttribute("href", href)
        a.classList.add("aside-item")
        const divIcon = document.createElement("div")
        divIcon.classList.add("aside-item-icon")
        divIcon.innerHTML = icon
        const divTitle = document.createElement("div")
        divTitle.classList.add("aside-item-title")
        divTitle.innerText = title
        a.appendChild(divIcon)
        a.appendChild(divTitle)
        if (location.href == "http://localhost1/admin/" + href && href != ".") {
            a.classList.add("aside-item--active")
            document.title = titleUrl + " - Admin"
        }
        if (location.href == "http://localhost1/admin/" && href == ".") {
            a.classList.add("aside-item--active")
            document.title = titleUrl + " - Admin"
        }
        const aside = document.querySelector(".aside")
        aside.appendChild(a)
    }
    function loadAside() {
        items.forEach((item, index) => {
            createItem(item.href, item.titleUrl, item.icon, item.title)
        })
    }
    function controlAside() {
        const openMenu = document.querySelector(".js-open-menu")
        const menu = document.querySelector(".aside")
        const closeMenu = document.querySelector(".js-close-menu")
        openMenu.addEventListener("click", () => {
            menu.classList.add("aside--active")
        })
        closeMenu.addEventListener("click", () => {
            menu.classList.remove("aside--active")
        })
    }
    window.addEventListener("load", () => {
        loadAside()
        controlAside()
    })
})();

(function modal() {

    function control() {
        const modal = document.querySelector(".modal.modal--customer")
        const createBtn = document.querySelector(".js-create-btn")
        const closeBtn = document.querySelectorAll(".js-close-btn")
        createBtn.addEventListener("click", () => {
            modal.classList.add("modal--active")
        })

        closeBtn.forEach((item) => {
            item.addEventListener("click", () => {
                modal.classList.remove("modal--active")
            })
        })
    }
    window.addEventListener("load", () => {
        control()
    })
})();

(function customer() {
    const customers = [
        {
            id: 1,
            name: "Thái Phương Nam",
            gender: "Nam",
            birth_date: new Date(),
            address: "Bình Định",
            email: "thaiphuongnam1071@gmail.com",
            password: null,
            create_date: new Date(),
            state: "normal",
        },
        {
            id: 2,
            name: "TdfwefNam",
            gender: "Nam",
            birth_date: new Date(),
            address: "Bình Định",
            email: "thaiphuongnam1071@gmail.com",
            password: null,
            create_date: new Date(),
            state: "normal",
        },
        {
            id: 3,
            name: "Tccc",
            gender: "Nam",
            birth_date: new Date(),
            address: "Bình Định",
            email: "thaiphuongnam1071@gmail.com",
            password: null,
            create_date: new Date(),
            state: "normal",
        }
    ]
    function loadTable() {
        customers.forEach((item, index) => {
            createRow(item, index + 1)
        })
    }
    function createRow(obj, index) {
        const row = document.createElement("tr")
        stt = document.createElement("td")
        stt.innerText = index
        row.appendChild(stt)
        Object.keys(obj).forEach((key) => {
            const cell = document.createElement("td")
            cell.innerText = obj[key]
            row.appendChild(cell)
        })
        const table = document.querySelector(".js-table--customer")
        table.appendChild(row)
    }
    window.addEventListener("load", () => {
        loadTable()
    })
})();

(function order() {
    const orders = [
        {
            id: 1,
            customer_id: 24,
            receive_number_phone: "0337948940",
            address: "Bình Định",
            description: "Đưa vào giờ hành chính nhé",
            date_start: new Date(),
            date_end: new Date(),
            state: "Chưa giao",
        },
        {
            id: 1,
            customer_id: 24,
            receive_number_phone: "0337948940",
            address: "Bình Định",
            description: "Đưa vào giờ hành chính nhé",
            date_start: new Date(),
            date_end: new Date(),
            state: "Chưa giao",
        },
        {
            id: 1,
            customer_id: 24,
            receive_number_phone: "0337948940",
            address: "Bình Định",
            description: "Đưa vào giờ hành chính nhé",
            date_start: new Date(),
            date_end: new Date(),
            state: "Chưa giao",
        },
    ]
    function createRow(obj, index = null) {
        const row = document.createElement("tr")
        const stt = document.createElement("td")
        stt.innerText = index
        row.appendChild(stt)
        Object.keys(obj).forEach((key) => {
            const cell = document.createElement("td")
            cell.innerText = obj[key]
            row.appendChild(cell)
        })
        const table = document.querySelector(".js-table--order")
        table.appendChild(row)
    }
    function deleteRow(id) {

    }
    function handleCreateRow() {

    }
    function loadTable(orders) {
        orders.forEach((order, index) => {
            createRow(order, index + 1)
        })
    }
    window.addEventListener("load", () => {
        loadTable(orders)
    })
})()