(function customer() {

    // đây là dữ liệu ảo, như dữ liệu từ server trả về
    const customers = [
        {
            id: 32,
            name: "Thái Phương Nam",
            gender: "Nam",
            birth_date: "2001-07-10",
            address: "Bình Định",
            email: "thaiphuongnam1071@gmail.com",
            password: null,
            date_create: "2022-01-24",
            state: "normal",
        },
        {
            id: 42,
            name: "Nguyễn Văn A",
            gender: "Nam",
            birth_date: "2001-07-20",
            address: "Thành Phố Hồ Chí Minh",
            email: "vana@gmail.com",
            password: null,
            date_create: "2021-02-20",
            state: "normal",
        },
        {
            id: 521,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 522,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 523,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 524,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 525,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 526,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 527,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 528,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 529,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 5210,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 5211,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 5212,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 5213,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
        {
            id: 5214,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
        },
    ]

    // tải tất cả row vào table
    function loadTable() {
        customers.forEach((item, index) => {
            createRow(item, index + 1)
        })
    }

    // tạo row
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
        const detail = document.createElement("td")
        detail.innerHTML = '<i class="bi bi-ticket-detailed" id=detail' + obj.id + '></i>'
        row.appendChild(detail)
        const edit = document.createElement("td")
        edit.innerHTML = '<i class="bi bi-pencil-square js-edit-btn" id=edit' + obj.id + '></i>'
        row.appendChild(edit)
        const init = document.querySelector(".app-body.customer")
        const table = init.querySelector(".js-table")
        table.appendChild(row)
    }

    // lắng nghe sự kiện tạo đối tượng customer
    function handleCreate() {
        const init = document.querySelector(".app-body.customer")
        const create = init.querySelector(".js-finish-btn")
        const form = init.querySelector(".js-create-form")
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

    // xóa row
    function removeRow(id) {
        const init = document.querySelector(".app-body.customer")
        const table = init.querySelector(".js-table")
        const row = init.querySelector("#customer" + id)
        table.removeChild(row)
    }

    // xóa nhiều row
    function removeRows(arr) {
        arr.forEach((id) => {
            removeRow(id)
        })
    }

    // lắng nghe sự kiện xóa đối tượng customer
    function handleRemove() {
        const init = document.querySelector(".app-body.customer")
        const removeBtn = init.querySelector(".js-remove-btn")
        removeBtn.addEventListener("click", () => {
            const removeArr = init.querySelectorAll("input[name='remove']")
            let data = []
            removeArr.forEach((checkbox) => {
                if (checkbox.checked == true) {
                    data.push(checkbox.id.slice(6))
                }
            })
            removeRows(data)
            console.log(data)
            data = []
            alert("Thành công!!!")
        })
    }

    // cập nhật row
    function updateRow(obj) {
        const init = document.querySelector(".app-body.customer")
        const row = init.querySelector("#customer" + obj.id)
        const cells = row.childNodes;
        const arr = [...Object.values(obj)]
        cells.forEach((cell, index) => {
            if (index >= 2 && index < cells.length - 2) {
                cell.innerText = arr[index - 2]
            }
        })
    }

    // tải dữ liệu row vào form để cập nhật dữ liệu
    function loadRowToForm() {
        const init = document.querySelector(".app-body.customer")
        const form = init.querySelector(".js-update-form")
        const data = new FormData(form)
        const obj = Object.fromEntries(data)
        const load = init.querySelectorAll(".js-edit-btn")
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

    // lắng nghe sự kiện cập nhật đối tượng customer
    function handleUpdate() {
        const init = document.querySelector(".app-body.customer")
        const form = init.querySelector(".js-update-form")
        const update = form.querySelector(".js-finish-btn")
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

    // chờ tải DOM xong thì làm
    window.addEventListener("load", () => {
        const arr = ["https://" + location.hostname + "/admin/customer", "http://" + location.hostname + "/admin/customer"]
        if ((arr.some(e => e == location.href))) {
            loadTable()
            handleRemove()
            handleCreate()
            loadRowToForm()
            handleUpdate()
        }
    })

})();

(function staff() {

    // đây là dữ liệu ảo, như dữ liệu từ server trả về
    const staffs = [
        {
            id: 32,
            name: "Thái Phương Nam",
            gender: "Nam",
            birth_date: "2001-07-10",
            address: "Bình Định",
            email: "thaiphuongnam1071@gmail.com",
            password: null,
            date_create: "2022-01-24",
            state: "normal",
            role_id: 32,
        },
        {
            id: 42,
            name: "Nguyễn Văn A",
            gender: "Nam",
            birth_date: "2001-07-20",
            address: "Thành Phố Hồ Chí Minh",
            email: "vana@gmail.com",
            password: null,
            date_create: "2021-02-20",
            state: "normal",
            role_id: 32,
        },
        {
            id: 521,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 522,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 523,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 524,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 525,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 526,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 527,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 528,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 529,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 5210,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 5211,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 5212,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 5213,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
        {
            id: 5214,
            name: "Người dùng 1",
            gender: "Nữ",
            birth_date: "2004-02-01",
            address: "Vũng Tàu",
            email: "ttpn1@gmail.com",
            password: null,
            date_create: "2022-05-10",
            state: "locked",
            role_id: 32,
        },
    ]

    // tải tất cả row vào table
    function loadTable() {
        staffs.forEach((item, index) => {
            createRow(item, index + 1)
        })
    }

    // tạo row
    function createRow(obj, index = null) {
        const row = document.createElement("tr")
        row.setAttribute("id", "staff" + obj.id)
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
        // const detail = document.createElement("td")
        // detail.innerHTML = '<i class="bi bi-ticket-detailed" id=detail' + obj.id + '></i>'
        // row.appendChild(detail)
        const edit = document.createElement("td")
        edit.innerHTML = '<i class="bi bi-pencil-square js-edit-btn" id=edit' + obj.id + '></i>'
        row.appendChild(edit)
        const init = document.querySelector(".app-body.staff")
        const table = init.querySelector(".js-table")
        table.appendChild(row)
    }

    // lắng nghe sự kiện tạo đối tượng staff
    function handleCreate() {
        const init = document.querySelector(".app-body.staff")
        const create = init.querySelector(".js-finish-btn")
        const form = init.querySelector(".js-create-form")
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

    // xóa row
    function removeRow(id) {
        const init = document.querySelector(".app-body.staff")
        const table = init.querySelector(".js-table")
        const row = init.querySelector("#staff" + id)
        table.removeChild(row)
    }

    // xóa nhiều row
    function removeRows(arr) {
        arr.forEach((id) => {
            removeRow(id)
        })
    }

    // lắng nghe sự kiện xóa đối tượng staff
    function handleRemove() {
        const init = document.querySelector(".app-body.staff")
        const removeBtn = init.querySelector(".js-remove-btn")
        removeBtn.addEventListener("click", () => {
            const removeArr = init.querySelectorAll("input[name='remove']")
            let data = []
            removeArr.forEach((checkbox) => {
                if (checkbox.checked == true) {
                    data.push(checkbox.id.slice(6))
                }
            })
            removeRows(data)
            console.log(data)
            data = []
            alert("Thành công!!!")
        })
    }

    // cập nhật row
    function updateRow(obj) {
        const init = document.querySelector(".app-body.staff")
        const row = init.querySelector("#staff" + obj.id)
        const cells = row.childNodes;
        const arr = [...Object.values(obj)]
        cells.forEach((cell, index) => {
            if (index >= 2 && index < cells.length - 1) {
                cell.innerText = arr[index - 2]
            }
        })
    }

    // tải dữ liệu row vào form để cập nhật dữ liệu
    function loadRowToForm() {
        const init = document.querySelector(".app-body.staff")
        const form = init.querySelector(".js-update-form")
        const data = new FormData(form)
        const obj = Object.fromEntries(data)
        const load = init.querySelectorAll(".js-edit-btn")
        load.forEach((item, index) => {
            item.addEventListener("click", () => {
                staffs.forEach((staff, index) => {
                    if ("edit" + staff.id == item.id) {
                        // form.querySelector("[name='id']").value = staff.id
                        // form.querySelector("[name='name']").value = staff.name
                        // form.querySelector("[name='gender']").value = staff.gender
                        // form.querySelector("[name='birth_date']").value = staff.birth_date
                        // form.querySelector("[name='address']").value = staff.address
                        // form.querySelector("[name='email']").value = staff.email
                        // form.querySelector("[name='password']").value = staff.password
                        // form.querySelector("[name='date_create']").value = staff.date_create
                        // form.querySelector("[name='state']").value = staff.state
                        Object.keys(staff).forEach((key, index) => {
                            form.querySelector("[name=" + key + "]").value = Object.values(staff)[index]
                        })
                    }
                })
            })
        })
    }

    // lắng nghe sự kiện cập nhật đối tượng staff
    function handleUpdate() {
        const init = document.querySelector(".app-body.staff")
        const form = init.querySelector(".js-update-form")
        const update = form.querySelector(".js-finish-btn")
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

    // chờ tải DOM xong thì làm
    window.addEventListener("load", () => {
        const arr = ["https://" + location.hostname + "/admin/staff", "http://" + location.hostname + "/admin/staff"]
        if ((arr.some(e => e == location.href))) {
            loadTable()
            handleRemove()
            handleCreate()
            loadRowToForm()
            handleUpdate()
        }
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
            href: "staff",
            titleUrl: "Staff",
            icon: '<i class="bi bi-person-lines-fill"></i>',
            title: "Nhân viên",
        },
        {
            href: "category",
            titleUrl: "Category",
            icon: '<i class="bi bi-bookmarks"></i>',
            title: "Danh mục sản phẩm",
        },
        {
            href: "type",
            titleUrl: "Type",
            icon: '<i class="bi bi-list-columns"></i>',
            title: "Loại sản phẩm",
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
            icon: '<i class="bi bi-cart"></i>',
            title: "Đơn hàng",
        },
        {
            href: "sale_off",
            titleUrl: "Sale Off",
            icon: '<i class="bi bi-receipt"></i>',
            title: "Giảm giá",
        },
        {
            href: "supplier",
            titleUrl: "Supplier",
            icon: '<i class="bi bi-shop"></i>',
            title: "Nhà cung cấp",
        },
        {
            href: "role",
            titleUrl: "Role",
            icon: '<i class="bi bi-person-circle"></i>',
            title: "Phân quyền tài khoản",
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
        if (location.href.slice(0, 8) == "https://") {
            if (location.href == "https://" + location.hostname + "/admin/" + href && href != ".") {
                a.classList.add("aside-item--active")
                document.title = titleUrl + " - Admin"
            }
            if (location.href == "https://" + location.hostname + "/admin/" && href == ".") {
                a.classList.add("aside-item--active")
                document.title = titleUrl + " - Admin"
            }
        }
        if (location.href.slice(0, 7) == "http://") {
            if (location.href == "http://" + location.hostname + "/admin/" + href && href != ".") {
                a.classList.add("aside-item--active")
                document.title = titleUrl + " - Admin"
            }
            if (location.href == "http://" + location.hostname + "/admin/" && href == ".") {
                a.classList.add("aside-item--active")
                document.title = titleUrl + " - Admin"
            }
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

        if (obj.open != null) {
            let open = document.querySelector(obj.open)
            open.addEventListener("click", () => {
                modal.classList.add(obj.active)
            })
        }

        if (obj.opens != null) {
            let opens = document.querySelectorAll(obj.opens)
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
            modal: ".modal.js-create-form",
            open: ".js-open-form-create-btn",
            opens: null,
            close: ".js-close-btn",
            active: "modal--active",
        })
        create({
            modal: ".modal.js-update-form",
            open: null,
            opens: ".js-edit-btn",
            close: ".js-close-btn",
            active: "modal--active",
        })
    })
})();

(function iconUrl() {
    window.addEventListener("load", () => {
        const link = document.createElement("link")
        link.setAttribute("rel", "shortcut icon")
        link.setAttribute("href", "./favicon.ico")
        link.setAttribute("type", "image/x-icon")
        document.head.appendChild(link)
    })
})();

