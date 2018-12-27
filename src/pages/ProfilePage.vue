<template>
    <div class="profile-page">
        <h1>Profile</h1>
        <div class="profile">
            <div class="profile__info">
                Username : {{ profile.username }} <br />
                ID: {{ profile.uid }} <br /> <br />
                And a bit more info about user
            </div>
            <div class="profile__tags">
                <h4>Hard Tags:</h4>
                <Tag v-for="tag in userHard" :key="tag.uid" :tag="tag" :selected="tag.selected" />
                <h4>Soft Tags:</h4>
                <Tag v-for="tag in userSoft" :key="tag.uid" :tag="tag" :selected="tag.selected" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Tag from '@/components/app/Modal/Tag.vue'

export default {
    name: 'ProfilePage',
    components:{
        Tag
    },
    data() {
        return {
            userHard: [],
            userSoft: []
        }
    },
    computed: {
        ...mapGetters(['profile', 'hardTags', 'softTags']),
    },
    methods: mapActions(['getProfile', 'getHardTags', 'getSoftTags']),
    created() {
        this.getProfile()
        this.getHardTags().then(() => {
            this.userHard = this.hardTags.map(tag => {
                let selected = this.profile.tags
                    .map(profileTag => profileTag.uid)
                    .includes(tag.uid)
                return { ...tag, selected }
            })
        })
        this.getSoftTags().then(() => {
            this.userSoft = this.softTags.map(tag => {
                let selected = this.profile.tags
                    .map(profileTag => profileTag.uid)
                    .includes(tag.uid)
                return { ...tag, selected }
            })
        })
    }
}
</script>

<style lang="scss">
    .profile {
        display: flex;

        &__info {
            width: 50%;
        }

        &__tags {
            width: 50%;
        }
    }
</style>