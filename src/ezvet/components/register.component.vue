<script>
import changelangComponent from "../other/changelang.component.vue";
export default {
  name: "register.component",
  components:{changelangComponent},
  methods:{
    goToLogin(){
      this.$router.push("/login");
    }
  }
}
</script>

<template>
  <pv-toolbar  class="w-full fixed top-0 left-0 flex items-center justify-between p-4">
    <template #end>

      <changelangComponent></changelangComponent>
    </template>
  </pv-toolbar>
  <div>
    <div class="flex gap-24 items-center">
      <pv-Image src="src/assets/img/gato.png" width="80%" class="w-1/2"></pv-Image>
      <div>
        <div class="flex flex-col items-center justify-center">
          <pv-Image src="src/assets/img/ezvet.png" width="190px"></pv-Image>
          <h1 class="mt-8 mb-8 text-center" style="font-size: 50px">{{$t('Access.Register')}}</h1>
        </div>
        <div class="flex flex-col gap-3">
          <label for="username" class="text-left">{{$t('Access.Username')}}</label>
          <pv-inputtext id="username" class="custom-input cursor-text" v-model="value" type="text" size="small"
                        placeholder="enter your username"/>

          <label for="Email" class="text-left">E-mail</label>
          <pv-inputtext type="email" id="email" class="custom-input cursor-text" v-model="value" size="small" toggleMask
                        placeholder="enter your email"/>

          <label for="tuition" class="text-left">{{$t('Access.tuition')}}</label>
          <pv-inputtext type="text" id="tuition" class="custom-input cursor-text" v-model="value" size="small" toggleMask
                        placeholder="enter your tuition"/>

          <label for="password" class="text-left">{{$t('Access.Password')}}</label>
          <pv-inputtext type="password" id="password" class="custom-input cursor-text" v-model="value" size="small" toggleMask
                        placeholder="enter your password"/>
          <label for="confirm-password" class="text-left">{{$t('Access.C_password')}}</label>
          <pv-inputtext type="password" id="confirm-password" class="custom-input cursor-text" v-model="value" size="small" toggleMask
                        placeholder="confirm your password"/>

          <pv-button class="mt-4 button">{{$t('Access.SignIn')}}</pv-button>

          <a class="underline cursor-pointer text-1xl" @click="goToLogin">{{$t('Access.ToLogin')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.custom-input {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #B9B9D2;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  color: black;
}

.button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #00BFB2;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  color: white;
}

.button:hover {
  background-color: #B9B9D2;
  color: black;
  border-color: #2C3E50;


}

</style>