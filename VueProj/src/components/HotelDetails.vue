<template>
  <div class="hoteldetails">
    <header class="hotels-header">
      <nav>
        <router-link to="/hotels"  class="nav-link">Отели</router-link>
        <router-link to="/contacts"  class="nav-link">Контакты</router-link>
        <router-link to="/reviews"  class="nav-link">Отзывы</router-link>
      </nav>
    </header>

    <main class="details-main">
      <div class="hotel-details-card">
        <img src="https://i9.photo.2gis.com/photo-gallery/64ef9c69-86ee-4aa4-9288-cb3e858310f9.jpg"
             alt="Отель Эрмитаж"
             class="hotel-image" />

        <div class="details-info">
          <h1 class="details-title">Официальная гостиница музея Государственный Эрмитаж</h1>
          <div class="price-address">
            <p class="details-price">15 000 ₽ / сутки</p>
            <p class="details-address">ул. Пушкина, д. Колотушкина</p>
          </div>

          <div class="details-services">
            <h2>Услуги:</h2>
            <ul>
              <li>Бесплатный Wi-Fi</li>
              <li>Кондиционер</li>
              <li>Ресторан</li>
              <li>Спа-центр</li>
              <li>Бассейн</li>
              <li>Парковка</li>
            </ul>
          </div>

          <div class="details-calendar">
            <h2>Выберите даты:</h2>
            <div class="date-inputs">
              <div class="date-group">
                <label>Заезд:</label>
                <input type="date" />
              </div>
              <div class="date-group">
                <label>Выезд:</label>
                <input type="date" />
              </div>
            </div>
            <router-link to="/form">
                <button class="details-book-button">Забронировать</button>
            </router-link>
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
  name: 'HotelDetails'
}
</script>

