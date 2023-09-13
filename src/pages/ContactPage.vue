<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact-message';
const emptyForm = { email: '', subject: '', message: '', subscription: false };
export default {
    name: 'ContactPage',
    data: () => ({ form: emptyForm }),

    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                .then(() => { this.form = emptyForm })
                .catch(err => { console.error(err) })
                .then(() => { })
        }
    }
}
</script>

<template>
    <div class="container">
        <h2 class="text-center my-5">Contact Us</h2>

        <!-- form -->
        <form @submit.prevent="sendForm">
            <div class="row">
                <div class="col-md-6">
                    <!-- email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address<sub class="text-danger">*</sub></label>
                        <input type="email" class="form-control" id="email" placeholder="example@hello.com"
                            v-model.trim="form.email">
                        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <!-- Object -->
                    <div class="mb-3">
                        <label for="subject" class="form-label">Email Object<sub class="text-danger">*</sub></label>
                        <input type="text" class="form-control" id="subject" v-model.trim="form.subject">
                    </div>
                </div>

                <div class="col-md-6">
                    <!-- message -->
                    <div class="mb-3">
                        <label class="form-label" for="message">Message<sub class="text-danger">*</sub></label>
                        <textarea class="form-control" id="message" rows="5" v-model.trim="form.message"></textarea>
                    </div>

                    <!-- newsletter -->
                    <div class="mb-3 form-check">
                        <input class="form-check-input" type="checkbox" id="subscription" v-model="form.subscription">
                        <label class="form-check-label" for="subscription">Subscribe to our Newsletter</label>
                    </div>

                    <div class="mb-3 d-flex justify-content-end">
                        <button class="btn btn-primary">Send</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style></style>