<template>
    <div class="container pt-0">
        <center><h2>{{message}}</h2></center>
        <br>
        <div class="row justiy-content-center">
            
            <div class="container">
                <div class="row justify-content-center">
                    <div v-for="(item) in data" :key="item">
                        
                        <v-card
                            class="mx-5 my-5"
                            max-width="400"
                        >
                            <v-img
                            :src="item.img"
                            height="280px"
                            ></v-img>

                            <v-card-title>
                                {{item.name}}
                            </v-card-title>

                            <v-card-subtitle>
                                {{item.email}} <br>
                                {{item.contactno}}
                            </v-card-subtitle>
                            <div class="container">
                                <div class="pt-2">Field: <b>{{item.field}}</b></div>
                                <div class="pt-2">Work Place: <b>{{item.workplace}}</b></div>
                                <div class="pt-2">Work Experience: <b>{{item.work_exp}}</b></div>
                                <div class="pt-2">Base Price: <b>{{item.price}}</b></div>
                            </div>
                            <v-card-actions>
                            
                            <v-btn color="blue" text @click="check(item.mentor_id)">Resume</v-btn>
                            <v-btn color="red" text @click="del(item.mentor_id)">Delete</v-btn>
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
        fetch("http://localhost:8000/mentor/getallF",{
            method: "POST",
            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        })
        .then(res => res.json())
        .then(data => {
            if(data.status == "success")
            {
                this.message = "The list of Revoked Mentors";
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
        check(id)
        {
            if(window.confirm("Bring the mentor back? Please confirm"))
            {
                fetch("http://localhost:8000/admin/resumeMentor",{
                    method: "POST",
                    headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "mid": id
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if(data.status == "success")
                    {
                        this.data = this.data.filter((e) => {
                            return e.mentor_id != id;
                        });
                    }  
                    else
                        this.message = "There is some error, Please try later";
                })
                .catch(() => {
                    this.message = "There is some error, Please try later";
                });
            }            
        },
        del(id)
        {
            if(window.confirm("Delete the mentor? Please confirm"))
            {
                fetch("http://localhost:8000/admin/deleteMentor",{
                    method: "POST",
                    headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "mid": id
                    })
                })
                .then(res => res.json())
                .then(data => {
                    if(data.status == "success")
                    {
                        this.data = this.data.filter((e) => {
                            return e.mentor_id != id;
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