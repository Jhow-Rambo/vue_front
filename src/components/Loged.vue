<template>
  <div class="container"> 
    <div class="emoji"/>
    <p>
      Fantastico!<br>
      Deu muito bom!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Loged',
  data() {
    return{
      
    };
  },
};
</script>

<style scoped>

/*Icons/Emojis*/
.emoji{
  margin-top: 70px;
  margin-bottom: 30px;
  width: 400px;
  height: 150px;
  background-image: url(../assets/images/emoji.png);
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
}

</style>