<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" v-model="message" placeholder="Enter your message">
            <button type="submit">Send</button>
        </form>
    </div>

    <div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        };
    },
    methods: {
        async submitForm() {
            const data = {
                message: this.message
            };

            try {
                const response = await fetch('http://localhost:4000/test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const responseData = await response.json();
                console.log('Response:', responseData);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
};
</script>