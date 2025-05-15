<template>
  <div class="hotelssochi">
<header class="hotels-header">
        <nav>
            <router-link to="/"  class="nav-link">Главая</router-link>
            <router-link to="/contacts"  class="nav-link">Контакты</router-link>
            <router-link to="/reviews"  class="nav-link">Отзывы</router-link>
        </nav>
    </header>

    <main class="hotels-main">
        <div class="hotel-container">
            <div class="hotel-item">
                <img src="https://i8.photo.2gis.com/photo-gallery/390b797c-105e-4946-ac71-0ed6cb253506.jpg" 
                     alt="Отель Эрмитаж" 
                     class="hotel-image">
                <div class="hotel-info">
                    <h2 class="hotel-title">Сердце Сочи SunLine</h2>
                    <p class="hotel-price">10 000 ₽ / сутки</p>
                    <p class="hotel-address">ул. Приморская, д. 4</p>
                    <router-link to="/hotel-details-sochi">
                        <button class="details-button">Подробнее</button>
                    </router-link>
                </div>
            </div>
            
            <!-- <div class="hotel-item">
                <img src="путь_к_изображению.jpg" 
                     alt="Второй отель" 
                     class="hotel-image">
                <div class="hotel-info">
                    <h2 class="hotel-title">Название второго отеля</h2>
                    <p class="hotel-price">Цена / сутки</p>
                    <p class="hotel-address">Адрес отеля</p>
                    <button class="details-button">Подробнее</button>
                </div>
            </div> -->
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
  name: 'HotelsSochi'
}
</script>

<style scoped>
</style>
