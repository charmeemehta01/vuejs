<template>
    <div class="container pt-0">
        <div class="row justify-content-center">
            <v-form
                ref="form"
                lazy-validation
                style="width: 80%"
            >
                <v-text-field
                    v-model="name"
                    label="Name"
                    required
                    color="#009970"
                    autocomplete="off"
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                    color="#009970"
                    autocomplete="off"
                ></v-text-field>
                <v-text-field
                    v-model="contact"
                    label="Contact Number"
                    required
                    color="#009970"
                    autocomplete="off"
                ></v-text-field>
                <v-text-field
                    v-model="field"
                    label="Field Expert"
                    required
                    color="#009970"
                    autocomplete="off"
                ></v-text-field>
                <v-text-field
                    v-model="work_place"
                    label="Work Place"
                    required
                    color="#009970"
                    autocomplete="off"
                ></v-text-field>
                <v-text-field
                    v-model="work_exp"
                    label="Work Experience"
                    required
                    color="#009970"
                    autocomplete="off"
                ></v-text-field>
                <v-text-field
                    v-model="price"
                    label="Price"
                    required
                    color="#009970"
                    autocomplete="off"
                ></v-text-field>
                <v-file-input
                    accept="image/*"
                    prepend-icon="mdi-camera"
                    label="Profile Picture"
                    color="#009970"
                    v-model="imageData"
                ></v-file-input>
                <br><br>
                <center><v-btn
                    color="#009970"
                    class="mr-4"
                    @click="add"
                >
                   <span style="color: white">Add Mentor</span> 
                </v-btn></center>
            </v-form>
        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase';
  export default {
    data: () => ({
      name: '',
      email: '',
      contact: '',
      field: '',
      work_place: '',
      work_exp: '',
      price: '',
      imageData: null,
    }),

    methods: {
        add(){
            
            const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
                    console.log(snapshot);
                }, error=>{console.log(error.message)},
                ()=>{
                    storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                        console.log(url);
                        fetch("http://localhost:8000/mentor/add",{
                            method: "POST",
                            headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}`, 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                name: this.name,
                                img: url,
                                field: this.field,
                                workplace: this.work_place,
                                work_exp: this.work_exp,
                                email: this.email,
                                contactno: this.contact,
                                price: this.price
                            })
                        })
                        .then(res => res.json())
                        .then(data => {
                            if(data.status == "success")
                            {
                                alert("Mentor added successfully");
                                this.$router.push('Admin')
                            }  
                            else
                                alert("There is some error, Please try later");
                        })
                        .catch(() => {
                            alert("There is some error, Please try later");
                        });
                    });
                }
            );
        }
    },
  }
</script>