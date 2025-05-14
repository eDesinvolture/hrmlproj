<template>
  <div class="reviewspage">
    <header class="hotels-header">
      <nav>
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/hotels" class="nav-link">Отели</router-link>
        <router-link to="/contacts" class="nav-link">Контакты</router-link>
        <router-link to="/reviews" class="nav-link">Отзывы</router-link>
      </nav>
    </header>

    <main class="reviews-main">
      <div class="review-section">
        <a href="#" id="toggleForm" @click.prevent="toggleForm">{{ formVisible ? '▲ Скрыть форму отзыва' : '▼ Показать форму отзыва' }}</a>

        <div v-if="formVisible">
          <div class="input-container">
            <input class="input-field" v-model="email" type="email" placeholder="Ваш email" />
          </div>
          <div class="input-container">
            <input class="input-field" v-model="name" placeholder="Ваше имя" />
          </div>
          <div class="input-container input-large">
            <textarea class="input-field" v-model="text" placeholder="Отзыв"></textarea>
          </div>
          <button class="review-button" @click="submitReview">Оставить отзыв</button>
        </div>

        <div class="reviews-column">
          <div v-for="review in reviews" :key="review.id" class="review-item server-review">
            <div class="review-name">{{ review.name }}</div>
            <div class="review-text">{{ review.body }}</div>
            <div class="review-email">{{ review.email }}</div>
          </div>
        </div>
      </div>
    </main>

    <footer class="hotels-footer">
      <div class="footer-left">
        <p>Мы в соц.сетях:</p>
        <div class="social-links">
          <a href="/#">VK</a>&nbsp;
          <a href="/#">Instagram</a>
        </div>
      </div>
      <div class="footer-right">
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ReviewsPage',
  data() {
    return {
      email: '',
      name: '',
      text: '',
      formVisible: false,
      reviews: []
    };
  },
  mounted() {
    this.loadReviews();
  },
  methods: {
    toggleForm() {
      this.formVisible = !this.formVisible;
    },
    async loadReviews() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=1');
        const data = await response.json();
        this.reviews = data;
      } catch (error) {
        console.error('Ошибка при загрузке отзывов:', error);
      }
    },
    async submitReview() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert('Пожалуйста, введите корректный email!');
        return;
      }

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            body: this.text,
            email: this.email
          })
        });
        const newReview = await response.json();
        this.reviews.unshift(newReview);
        this.name = '';
        this.text = '';
        this.email = '';
        alert('Отзыв успешно отправлен!');
      } catch (error) {
        console.error('Ошибка при отправке отзыва:', error);
        alert('Ошибка при отправке отзыва');
      }
    }
  }
};
</script>

<style scoped>
#toggleForm {
  display: block;
  margin: 20px 0 30px 120px;
  color: #5D58F4;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  transition: opacity 0.3s;
}
#toggleForm:hover {
  opacity: 0.8;
  text-decoration: underline;
}
.input-container {
  width: 100%;
  border: 2px solid #5D58F4;
  border-radius: 10px;
  padding: 15px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  text-align: center;
}
.input-field {
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  background: transparent;
  color: #333;
  padding: 15px 20px;
}
.input-large {
  height: 150px;
  margin-top: 10px;
}
.review-button {
  background-color: #5D58F4;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  width: 250px;
  margin: 20px auto;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
}
.review-button:hover {
  background-color: #4A48D4;
}
</style>