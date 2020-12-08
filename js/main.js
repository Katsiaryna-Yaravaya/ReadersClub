// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// Создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");

// Валидация для логина
const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSignup = document.querySelector(".login-signup");

const userElem = document.querySelector(".user");
const userNameElem = document.querySelector(".user-name");

const exitElem = document.querySelector(".exit");

const editElem = document.querySelector(".edit");
const editContainer = document.querySelector(".edit-container");
const editUsername = document.querySelector(".edit-username");
const editPhotoURL = document.querySelector(".edit-photo");

const userAvatarElem = document.querySelector(".user-avatar");

const postsWrapper = document.querySelector(".posts");
const buttonNewPost = document.querySelector(".button-new-post");
const addPostElem = document.querySelector(".add-post");

const sidebarNav = document.querySelector(".sidebar-nav");

const listUsers = [
    {
        id: "01",
        email: "karl@mail.com",
        password: "123456",
        displayName: "Karl",
        photo: 'data:image/jpeg;base64,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'
    },
    {
        id: "02",
        email: "kate@mail.com",
        password: "12344556",
        displayName: "Kate",
        photo: "https://img5.goodfon.ru/wallpaper/nbig/6/ce/devushka-babochka-igra-listva-noch-girl.jpg",
    },
];

const setUsers = {
    user: null,
    // проверка введённых данных и авторизация при нажатии на кнопку ВОЙТИ
    logIn(email, password, handler) {
        //* проверка по регулярному выражению для email
        if (!regExpValidEmail.test(email)) {
            return alert("email не валиден");
        }

        const user = this.getUser(email);
        //* проверка есть ли такой пользователь уже? есть ли нет - выдаем ошибку alert
        if (user && user.password === password) {
            this.authorizedUser(user);
            if (handler) {
                handler();
            }
        } else {
            alert("Пользователь с такими данными не найден");
        }
    },
    //выход по кнопке
    logOut(handler) {
        this.user = null;
        if (handler) {
            handler();
        }
    },
    // регистрация и авторизация пользователя при нажании на кнопку зарегистрироваться
    //handler для фукнции call back - toggleAuthDom
    signUp(email, password, handler) {
        if (!regExpValidEmail.test(email)) {
            return alert("email не валиден");
        }

        if (!email.trim() || !password.trim()) {
            alert("Введите данные");
            return;
        }

        if (!this.getUser(email)) {
            const user = {email, password, displayName: email.substring(0, email.indexOf('@'))};
            listUsers.push(user);
            // listUsers.push({email, password, displayName: email})
            this.authorizedUser(user);
            if (handler) {
                handler();
            }
        } else {
            alert("Пользователь был зарегистрирован");
        }
    },
    //добавляем метод editUser - для изменения имени пользователя и добавления фото
    editUser(userName, userPhoto = "", handler) {
        if (userName) {
            this.user.displayName = userName;
        }

        if (userPhoto) {
            this.user.photo = userPhoto;
        }

        if (handler) {
            handler();
        }
    },
    // провекра email на наличие в массиве объектов пользователей
    getUser(email) {
        return listUsers.find(user => user.email === email);
    },
    // авторизация пользователя
    authorizedUser(user) {
        this.user = user;
    },
};

//* создаем объект для хранения постов
const setPosts = {
    allPosts: [
        {
            title: "Гарри Поттер и узник Азкабана",
            text: "В третьей части экранизации бестселлера о юном волшебнике, полюбившиеся всем герои — Гарри Поттер, Рон и Гермиона — возвращаются уже на третий курс школы чародейства и волшебства «Хогвартс». На этот раз они должны раскрыть тайну узника, сбежавшего из зловещей тюрьмы Азкабан, чье пребывание на воле создает для Гарри смертельную опасность…",
            tags: ["увлекательное", "новое", "горячее", "магическое", "книга"],
            author: {
                displayName: "Karl",
                photo: 'data:image/jpeg;base64,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'
            },
            date: "11.11.2020, 20:54:00",
            like: 326,
            comments: 157,
        },
        {
            title: "Зеленая миля",
            text: "Роман-событие, ставший лауреатом премии Брэма Стокера и вдохновивший Фрэнка Дарабонта на создание культового фильма, в котором Том Хэнкс сыграл, возможно, свою лучшую роль. …Стивен Кинг приглашает читателей в жуткий мир тюремного блока смертников, откуда уходят, чтобы не вернуться, приоткрывает дверь последнего пристанища тех, кто преступил закон и теперь отсчитывает последние часы... До предела обнажены нервы, накалены страсти и обострены чувства. Уже ничего нельзя исправить — последняя черта совсем близко. Но еще можно понять и посочувствовать тем, кому предстоит отправиться по зловещей Зеленой миле в никуда…",
            tags: ["бестселлер", "новое", "горячее", "роман", "книга"],
            author: {
                displayName: "Kate",
                photo: "https://img5.goodfon.ru/wallpaper/nbig/6/ce/devushka-babochka-igra-listva-noch-girl.jpg",
            },
            date: "10.11.2020, 20:54:00",
            like: 157,
            comments: 7,
        },
    ],

    //*метод для публикации добавленного поста
    addPost(title, text, tags, handler) {
        //* добавляем ко всем постам наш новый пост в начало - с помощью метода unshift
        this.allPosts.unshift({
            title,
            text,
            tags: tags.split(",").map(tag => tag.trim()),
            author: {
                displayName: setUsers.user.displayName,
                photo: setUsers.user.photo
            },
            //* форматируем отображение времени под регион в котором находится пользователь
            date: new Date().toLocaleString(),
            like: 0,
            comments: 0,
        });

        if (handler) {
            handler();
        }
    },
};

// включение/выключения видимости окон при авторизации и наоборот
function toggleAuthDom() {
    const user = setUsers.user;

    if (user) {
        loginElem.style.display = 'none';
        userElem.style.display = '';
        sidebarNav.style.display = '';
        userNameElem.textContent = user.displayName;
        userAvatarElem.src = user.photo || userAvatarElem.src;
        buttonNewPost.classList.add('visible')
    } else {
        loginElem.style.display = "";
        userElem.style.display = "none";
        sidebarNav.style.display = "none";
        userNameElem.textContent = "";
        buttonNewPost.classList.remove('visible');
        addPostElem.classList.remove('visible');
        postsWrapper.classList.add('visible');
    }
}

function showAddPost() {
    addPostElem.classList.add('visible');
    postsWrapper.classList.remove('visible');
}

//* для отображения постов
const showAllPosts = () => {

    //* все посты формируют в виде html
    let postsHTML = '';

    setPosts.allPosts.forEach(({title, text, date, tags, like, comments, author}) => {

        postsHTML += `
        <section class="post">
            <div class="post-body">
                <h2 class="post-title">${title}</h2>
                <p class="post-text">${text}</p>
                    <div class="tags">
                    ${tags.map(tag => `<a href="#" class="tag">#${tag}</a>`)}
                    </div>
            </div>
            <div class="post-footer">
                <div class="post-buttons">
                    <button class="post-button likes">
                        <svg width="19" height="20" class="icon icon-like">
                            <use xlink:href="img/icons.svg#like"></use>
                        </svg>
                        <span class="likes-counter">${like}</span>
                    </button>
                    <button class="post-button comments">
                        <svg width="21" height="21" class="icon icon-comment">
                            <use xlink:href="img/icons.svg#comment"></use>
                        </svg>
                        <span class="comments-counter">${comments}</span>
                    </button>
                    <button class="post-button save">
                        <svg width="19" height="19" class="icon icon-save">
                            <use xlink:href="img/icons.svg#save"></use>
                        </svg>
                    </button>
                    <button class="post-button share">
                        <svg width="17" height="19" class="icon icon-share">
                            <use xlink:href="img/icons.svg#share"></use>
                        </svg>
                    </button>
                </div>
                <div class="post-author">
                    <div class="author-about">
                        <a href="#" class="author-username">${author.displayName}</a>
                        <span class="post-time">${date}</span>
                    </div>
                    <a href="#" class="author-link"><img src="${author.photo || "img/avatar.jpg"}" alt="avatar" class="author-avatar"></a>
                </div>
            </div>
        </section>
        `;
    })

    postsWrapper.innerHTML = postsHTML;

    //* для отображения поста переданного добавленного поста
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
}

//инициализация при загрузке
const init = () => {

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);

        loginForm.reset();
    });

    loginSignup.addEventListener("click", (event) => {
        event.preventDefault();
        setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);

        loginForm.reset();
    });

    exitElem.addEventListener("click", (event) => {
        event.preventDefault();
        setUsers.logOut(toggleAuthDom);
    });

    //* для блока редактирования профиля - должен быть виден
    editElem.addEventListener("click", (event) => {
        event.preventDefault();
        editContainer.classList.toggle("visible");

        editUsername.value = setUsers.user.displayName;
    });

    //* для редактирования профиля
    editContainer.addEventListener("submit", (event) => {
        event.preventDefault();

        setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
        editContainer.classList.remove("visible");
    });

    // отслеживаем клик по кнопке меню и запускаем функцию
    menuToggle.addEventListener("click", function (event) {
        // отменяем стандартное поведение ссылки
        event.preventDefault();
        // вешаем класс на меню, когда кликнули по кнопке меню
        menu.classList.toggle("visible");
    });

    buttonNewPost.addEventListener("click", (event) => {
        event.preventDefault();
        showAddPost();
    });

    //* добавить пост - форма
    addPostElem.addEventListener("submit", (event) => {
        event.preventDefault();

        const {title, text, tags} = addPostElem.elements;

        if (title.value.length < 6) {
            alert("Слишком короткий заголовок");
            return;
        }

        if (text.value.length < 50) {
            alert("Слишком короткий пост");
            return;
        }

        //* прописываем метод для добавления своего поста через кнопку опубликовать пост
        setPosts.addPost(title.value, text.value, tags.value, showAllPosts);

        //* делаем форму добавления поста снова невидимой
        addPostElem.classList.remove("visible");
        //* очищаем форму с помощью метода reset
        addPostElem.reset();
    });

    showAllPosts();
    toggleAuthDom();
};

document.addEventListener("DOMContentLoaded", () => {
    init();
});















