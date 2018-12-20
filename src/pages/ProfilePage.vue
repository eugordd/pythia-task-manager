<template>
    <div class="profile-page">
        <h1>Profile</h1>
        {{ profile }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProfilePage',
    computed: mapGetters(['profile']),
    methods: mapActions(['getProfile']),
    created() {
        this.getProfile()
    }
}
</script>