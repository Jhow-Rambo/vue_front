<template>
  <div class="container">
      <form class="form">
        
        <div v-if="counter == 0" class="form-group">
          <input v-model="form.email" id="inputFieldEmail" type="text" placeholder="email"/>
        </div>

        <div v-if="counter == 1" class="formInputs">
          <div class="showEmail">
            <i v-on:click.prevent="subCount" class="fas fa-times" style="font-size: 25px;"></i> 
            <p>{{form.email}}</p> 
          </div>
          <input v-model="form.password" id="inputFieldPassword" type="password" placeholder="password"/>
        </div>
        
        <div class="form-group">
            <button v-if="counter == 0" v-on:click.prevent="count" id="submitButton" type="submit" >
              Submit
            </button>

            <router-link v-if="counter == 1" :to="{name: 'loged'}">
                <button id="submitButton" type="submit">
                    Submit
                </button>
            </router-link> 
        </div>

      </form>
    </div>
</template>

<script>
export default {
  name: 'Form1',
  data() {
    return{
      counter: 0,
      form: {
        email:null,
        password:null
      },
    };
  },

  methods:{
    count: function(){
      this.counter += 1;
    },
    subCount: function(){
      this.counter -= 1;
    }
  }
};
</script>

<style>

/********Layouts********/
.container{
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  box-shadow: 0px 0px 20px #00000001;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px #b6b6b6;
}
.form{
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/********Input Fields********/
#inputFieldEmail{
  text-decoration: none;
  height: 26px;
  width: 265px;
  padding-left: 12px;
  margin-bottom: 96px;
  outline:none;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #e7e7e7;
}
#inputFieldPassword{
  text-decoration: none;
  height: 26px;
  width: 265px;
  padding-left: 12px;
  margin-bottom: 40px;
  outline:none;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #e7e7e7;
}

/********Static Components********/
.showEmail{
  display: flex;
  height: 26px;
  width: 200px;
  padding-left: 5px;
  margin-top: 0px;
  margin-bottom: 30px;
  outline:none;
  background-color: #fff;
}
p{
  margin-top: 2px;
  margin-left: 20px;
}

/********Buttons********/
#submitButton{
  text-decoration: none;
  padding: 15px 35px 15px 35px;
  margin-bottom: 49px;
  outline:none;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #e7e7e7;
  color: gray;
}
#submitButton:hover{
  background: #e7e7e7;
}

</style>