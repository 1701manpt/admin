(function customer() {
    const customers = [
        {
            id: 1,
            name: "Thái Phương Nam",
            gender: "Nam",
            birth_date: "2001-07-10",
            address: "Bình Định",
            email: "thaiphuongnam1071@gmail.com",
            password: null,
            date_create: "2001-07-10",
            state: "normal",
        },
        {
            id: 2,
            name: "TdfwefNam",
            gender: "Nam",
            birth_date: "2001-07-10",
            address: "Bình Định",
            email: "thaiphuongnam1071@gmail.com",
            password: null,
            date_create: "2001-07-10",
            state: "normal",
        },
        {
            id: 3,
            name: "Tccc",
            gender: "Nam",
            birth_date: "2001-07-10",
            address: "Bình Định",
            email: "thaiphuongnam1071@gmail.com",
            password: null,
            date_create: "2001-07-10",
            state: "normal",
        }
    ]
    function loadTable() {
        customers.forEach((item, index) => {
            createRow(item, index + 1)
        })
    }
    function createRow(obj, index = null) {
        const row = document.createElement("tr")
        row.setAttribute("id", "customer" + obj.id)
        const checkbox = document.createElement("td")
        checkbox.innerHTML = "<input type='checkbox' id=remove" + obj.id + " name='remove'/>"
        row.appendChild(checkbox)
        stt = document.createElement("td")
        stt.innerText = index
        row.appendChild(stt)
        Object.keys(obj).forEach((key) => {
            const cell = document.createElement("td")
            cell.innerText = obj[key]
            row.appendChild(cell)
        })
        const edit = document.createElement("td")
        edit.innerHTML = '<i class="bi bi-pencil-square js-edit-btn" id=edit' + obj.id + '></i>'
        row.appendChild(edit)
        const table = document.querySelector(".js-table-customer")
        table.appendChild(row)
    }
    function handleCreate() {
        const create = document.querySelector(".js-create")
        const form = document.getElementsByClassName("js-create-form")[0]
        form.addEventListener("submit", (e) => {
            e.preventDefault()
        })
        create.addEventListener("click", () => {
            const data = new FormData(form)
            const obj = Object.fromEntries(data)
            createRow(obj)
            alert("Thành công!!!")
        })
    }
    function removeRow(id) {
        const table = document.querySelector(".js-table-customer")
        const row = table.querySelector("#customer" + id)
        table.removeChild(row)
    }
    function removeRows(arr) {
        arr.forEach((id) => {
            removeRow(id)
        })
    }
    function handleRemove() {
        const removeBtn = document.querySelector(".js-remove-btn")
        removeBtn.addEventListener("click", () => {
            const removeArr = document.querySelectorAll("input[name='remove']")
            var data = []
            removeArr.forEach((checkbox) => {
                if (checkbox.checked == true) {
                    data.push(checkbox.id.slice(6))
                }
            })
            removeRows(data)
            data = []
            alert("Thành công!!!")
        })
    }
    function updateRow(obj) {
        const table = document.querySelector(".js-table-customer")
        const row = table.querySelector("#customer" + obj.id)
        const cells = row.childNodes;
        const arr = [...Object.values(obj)]
        cells.forEach((cell, index) => {
            if (index >= 2 && index < cells.length - 1) {
                cell.innerText = arr[index - 2]
            }
        })
    }
    function loadRowToForm() {
        const form = document.querySelector(".js-edit-form")
        const data = new FormData(form)
        const obj = Object.fromEntries(data)
        const load = document.querySelectorAll(".js-edit-btn")
        load.forEach((item, index) => {
            item.addEventListener("click", () => {
                customers.forEach((customer, index) => {
                    if ("edit" + customer.id == item.id) {
                        // form.querySelector("[name='id']").value = customer.id
                        // form.querySelector("[name='name']").value = customer.name
                        // form.querySelector("[name='gender']").value = customer.gender
                        // form.querySelector("[name='birth_date']").value = customer.birth_date
                        // form.querySelector("[name='address']").value = customer.address
                        // form.querySelector("[name='email']").value = customer.email
                        // form.querySelector("[name='password']").value = customer.password
                        // form.querySelector("[name='date_create']").value = customer.date_create
                        // form.querySelector("[name='state']").value = customer.state
                        Object.keys(customer).forEach((key, index) => {
                            form.querySelector("[name=" + key + "]").value = Object.values(customer)[index]
                        })
                    }
                })
            })
        })
    }
    function handleUpdate() {
        const form = document.querySelector(".js-edit-form")
        const update = form.querySelector(".js-update-btn")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
        })
        update.addEventListener("click", () => {
            const data = new FormData(form)
            const obj = Object.fromEntries(data)
            updateRow(obj)
            alert("Thành công!!!")
        })
    }
    window.addEventListener("load", () => {
        loadTable()
        handleRemove()
        handleCreate()
        loadRowToForm()
        handleUpdate()
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
            date_start: "2001-07-10",
            date_end: "2001-07-10",
            state: "Chưa giao",
        },
        {
            id: 1,
            customer_id: 24,
            receive_number_phone: "0337948940",
            address: "Bình Định",
            description: "Đưa vào giờ hành chính nhé",
            date_start: "2001-07-10",
            date_end: "2001-07-10",
            state: "Chưa giao",
        },
        {
            id: 1,
            customer_id: 24,
            receive_number_phone: "0337948940",
            address: "Bình Định",
            description: "Đưa vào giờ hành chính nhé",
            date_start: "2001-07-10",
            date_end: "2001-07-10",
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
})();

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
        console.log(location.hostname)
        if (location.href == "http://" + location.hostname + "/admin/" + href && href != ".") {
            a.classList.add("aside-item--active")
            document.title = titleUrl + " - Admin"
        }
        if (location.href == "http://" + location.hostname + "/admin/" && href == ".") {
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

    function create(obj) {
        const modal = document.querySelector(obj.modal)
        let open
        if (obj.open != null) {
            open = document.querySelector(obj.open)
            open.addEventListener("click", () => {
                modal.classList.add(obj.active)
            })
        }
        let opens
        if (obj.opens != null) {
            opens = document.querySelectorAll(obj.opens)
            opens.forEach((item) => {
                item.addEventListener("click", () => {
                    modal.classList.add(obj.active)
                })
            })
        }
        const close = modal.querySelectorAll(obj.close)
        close.forEach((item) => {
            item.addEventListener("click", () => {
                modal.classList.remove(obj.active)
            })
        })
    }
    window.addEventListener("load", () => {
        create({
            modal: ".modal.js-create-modal",
            open: ".js-create-btn",
            opens: null,
            close: ".js-close-btn",
            active: "modal--active",
        })
        create({
            modal: ".modal.js-edit-modal",
            open: null,
            opens: ".js-edit-btn",
            close: ".js-close-btn",
            active: "modal--active",
        })
    })
})();