<template>
    <form @submit.prevent="submitData">
        <input type="text" v-model="message" placeholder="Введите сообщение">
        <button type="submit">Отправить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            message: ""
        };
    },

    methods: {
        async submitData() {
            try {
                const response = await fetch('http://127.0.0.1:4000/test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: this.message })
                });
                const data = await response.json();
                console.log('Ответ от сервера:', data);
                // Добавьте обработку ответа от сервера здесь
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
                // Обработка ошибки
            }
        }
    }
}

</script>