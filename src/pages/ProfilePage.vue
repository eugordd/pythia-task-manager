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
                <h4>Tags:</h4>
                <Tag 
                    v-for="tag in userHard" 
                    :key="tag.uid" 
                    :tag="tag" 
                    :selected="tag.selected" 
                    :toggle="select" />
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
            userHard: []
        }
    },
    computed: {
        ...mapGetters(['profile', 'hardTags']),
    },
    methods: {
        ...mapActions(['getProfile', 'getHardTags', 'attachTagToProfile']),
        select(isSelected, tag) {
            if (isSelected) this.attachTagToProfile(tag.uid)
        }
    },
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