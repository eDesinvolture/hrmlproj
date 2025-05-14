<template>
  <div class="hotelspage">
<header class="hotels-header">
        <nav>
            <router-link to="/"  class="nav-link">Главная</router-link>
            <router-link to="/contacts"  class="nav-link">Контакты</router-link>
            <router-link to="/reviews"  class="nav-link">Отзывы</router-link>
        </nav>
    </header>

    <main class="hotels-main">
        <div class="hotel-container">
            <div class="hotel-item">
                <img src="https://i9.photo.2gis.com/photo-gallery/64ef9c69-86ee-4aa4-9288-cb3e858310f9.jpg" 
                     alt="Отель Эрмитаж" 
                     class="hotel-image">
                <div class="hotel-info">
                    <h2 class="hotel-title">Официальная гостиница музея Государственный Эрмитаж</h2>
                    <p class="hotel-price">15 000 ₽ / сутки</p>
                    <p class="hotel-address">ул. Правды, д. 10</p>
                    <router-link to="/hotel-details">
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
  name: 'HotelsPage'
}
</script>
