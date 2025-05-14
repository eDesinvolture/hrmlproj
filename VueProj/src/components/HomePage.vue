<template>
  <div class="homepage main-page">
<header>
        <nav>
            <router-link to="/hotels"  class="nav-link">Отели</router-link>
            <router-link to="/contacts"  class="nav-link">Контакты</router-link>
            <router-link to="/reviews"  class="nav-link">Отзывы</router-link>
        </nav>
    </header>

    <main>
        <div class="main-headers">
            <div>
                <h1>Лучшие отели для вашего отдыха</h1>
                <h2>Бронируйте отели по выгодным ценам</h2>
                <router-link to="/hotels">
                    <button class="cta-button">Забронировать</button>
                </router-link>

            </div>
            <div class="cities">
                <router-link to="/hotels"  style="text-decoration: none; color: white;">Санкт-Петербург</router-link>
                <router-link to="/hotels-sochi"  style="text-decoration: none; color: white;">Сочи</router-link>
            </div>
        </div>
    </main>

    <div class="background-image"></div>

    <footer class="footer-main">
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
  name: 'HomePage'
}
</script>
