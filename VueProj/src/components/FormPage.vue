<template>
  <div class="formpage">
<header class="hotels-header">
        <nav>
            <router-link to="/hotels"  class="nav-link">Отели</router-link>
            <router-link to="/contacts"  class="nav-link">Контакты</router-link>
            <router-link to="/reviews"  class="nav-link">Отзывы</router-link>
        </nav>
    </header>

    <main class="form-main">
        <div class="form-container">
            <h1 class="form-title">Форма бронирования</h1>
            
            <form class="booking-form">
                <div class="form-group">
                    <label for="fullname">ФИО:</label>
                    <input 
                        type="text"
                        required
                        placeholder="Иванов Иван Иванович"
                    >
                </div>

                <div class="form-group">
                    <label for="phone">Номер телефона:</label>
                    <input 
                        type="tel"
                        required 
                        placeholder="+79201234567"
                    > 
                </div>

                <button type="submit" class="submit-button">Отправить заявку</button>
            </form>
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
  name: 'FormPage'
}
</script>
