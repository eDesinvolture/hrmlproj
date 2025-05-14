<template>
  <div class="contactspage">
<header class="hotels-header">
        <nav>
            <router-link to="/"  class="nav-link">Главая</router-link>
            <router-link to="/hotels"  class="nav-link">Отели</router-link>
            <router-link to="/contacts"  class="nav-link">Контакты</router-link>
            <router-link to="/reviews"  class="nav-link">Отзывы</router-link>
        </nav>
    </header>

    <main class="contacts-main">
        <h1 class="contacts-title">Вы можете забронировать отель по номеру<br>8 (920) 652-58-22</br>или <router-link to="/form" > заполнить форму</router-link></h1>
        <div class="contacts-container">
            
            <div class="address-boxes">
                <div class="address-box">
                    <p>Санкт-Петербург,<br>ул. Дворцовая, 1</p>
                </div>
                <div class="address-box">
                    <p>Москва,<br>Красная площадь, 3</p>
                </div>
                <div class="address-box">
                    <p>Сочи,<br>ул. Приморская, 15</p>
                </div>
            </div>
        </div>
    </main>

    <footer class="hotels-footer">
        <div class="footer-left">
            <p>Мы в соц.сетях:</p>
            <div class="social-links">
                <router-link to="/#" >VK</router-link>&nbsp;
                <router-link to="/#" >Instagram</router-link>
            </div>
        </div>
        <div class="footer-right">
            <router-link to="/#" >Политика конфиденциальности</router-link>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage'
}
</script>
