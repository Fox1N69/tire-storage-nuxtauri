<template>
    <form @submit.prevent="submitData">
        <input type="text" v-model="message" placeholder="Введите сообщение">
        <button type="submit">Отправить</button>
    </form>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            message: ""
        };
    },

    methods: {
        async submitData() {
            try {
                const response = await this.$axios.post('http://127.0.0.1:4000/test', { message: this.message });
                console.log('Ответ от сервера:', response.data);
                // Добавьте обработку ответа от сервера здесь
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
                // Обработка ошибки
            }
        }
    }
}
</script>