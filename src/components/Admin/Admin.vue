<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-list dense>
                <router-link to="/Admin" style="text-decoration: none;">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Mentors</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/Admin/Revoke" style="text-decoration: none;">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-delete</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Revoked Mentors</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/Admin/AddMentor" style="text-decoration: none;">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-plus</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Add Mentors</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/Admin/Blogs" style="text-decoration: none;">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-receipt</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Registered Users</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/Admin/Sessions" style="text-decoration: none;">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-book</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Sessions Booked</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title @click="logout()">Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
        app
        color="#009970"
        dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Admin Portal</v-toolbar-title>
        </v-app-bar>

        <v-main class="pt-2">
            <v-container
                class="fill-height"
                fluid
            >
                <router-view></router-view>
            </v-container>
        </v-main>
        <v-footer
            color="#009970"
            app
        >
            <span class="white--text">Developed by - Soham , Ansh , Shubham</span>
        </v-footer>
    </div>
</template>

<script>
export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
    }),
    
    methods: {
        logout()
        {
            localStorage.setItem('jwt','');
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

</style>