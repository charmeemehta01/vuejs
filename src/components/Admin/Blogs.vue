<template>
    <div class="container pt-0">
        <center><h2>{{message}}</h2></center>
        <br><br>
        <div class="row justiy-content-center">
            
            <div class="container">
                <div class="row justify-content-center">
                    <div v-for="(item) in data" :key="item">
                        
                        <v-card
                            class="mx-3 px-3"
                            max-width="344"
                        >
                            <!-- <v-card-title>
                                {{item.name}}
                            </v-card-title>

                            <v-card-subtitle>
                                {{item.email}} <br>
                                {{item.contactno}}
                            </v-card-subtitle> -->
                            <div class="container">
                                <div class="pt-2">Name: <b>{{item.name}}</b></div>
                                <div class="pt-2">Email: <b>{{item.email}}</b></div>
                            </div>
                            <v-card-actions>
                            <v-btn color="red" text @click="check(item.email)">Delete</v-btn>


                            <v-spacer></v-spacer>

                            
                            </v-card-actions>
                        </v-card>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "Mentors",
    data: () => ({
        message: '',
        data: [],
    }),

    created()
    {
        fetch("http://localhost:8000/admin/getAllMentee",{
            method: "GET",
            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        })
        .then(res => res.json())
        .then(data => {
            if(data.status == "success")
            {
                this.message = "The list of Registered Users";
                this.data = data.data;
                console.log(this.data);
            }  
            else
                this.message = "There is some error, Please try later";
        })
        .catch(() => {
            this.message = "There is some error, Please try later";
        });
    },
    methods: {
        check(email)
        {
            if(window.confirm("Delete the User?"))
            {
                fetch("http://localhost:8000/admin/deleteMentee",{
                    method: "POST",
                    headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "email": email
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if(data.status == "success")
                    {
                        this.data = this.data.filter((e) => {
                            return e.email != email;
                        });
                    }  
                    else
                        this.message = "There is some error, Please try later";
                })
                .catch(() => {
                    this.message = "There is some error, Please try later";
                });
            }            
        }
    }
}
</script>