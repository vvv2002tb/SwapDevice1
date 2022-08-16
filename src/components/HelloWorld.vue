<template>
  <div class="loginform">
    <div class="maincontent">
      <div class="form">
        <div class="logo-title">
          <img style="width:50px" src="https://asme.vietants.vn/assets/logo.7d71b479.svg" alt="logo">
          <h1 style="padding-left: 15px; padding-top: 15px; font: bold ;">VA ASME</h1>
        </div>
        <div class="input-group">
          <a-form
              :model="formState"
              name="basic"
              :label-col="{ span: 8 }"
              :wrapper-col="{ span: 16 }"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
          >
            <a-form-item
                :wrapper-col="{ offset: 3, span: 18 }"
                name="username"
                :rules="[{ required: true, message: 'Vui lòng nhập tài khoản!' },{pattern: /^(?=.*?[a-z]).{5,}$/,  message: 'Vui lòng nhập đúng định dạng!'
                }]"

            >

              <a-input v-model:value="formState.username" placeholder="Tên đăng nhập"
                       style="height: 40px; border-radius: 5px;" >
                <template #prefix>
                  <user-outlined />
                </template>
              </a-input>

            </a-form-item>

            <a-form-item
                :wrapper-col="{ offset: 3, span: 18 }"
                name="password"
                :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu!' }, {
                 pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{6,}$/,

                message:
                  'Vui lòng nhập đúng định dạng, mật khẩu phải có ít nhất 1 chữ số và 1 chữ hoa!'

              }]"


            >
              <a-input-password v-model:value="formState.password" style="height: 40px; border-radius: 5px;"
                                placeholder="Mật khẩu">
                <template #prefix>
                  <lock-outlined />
                </template>
              </a-input-password>


            </a-form-item>


          </a-form>
        </div>
        <div>


          <a-row>
            <a-col style="padding-left: 50px;" class="chkbox-group">

              <a-form-item name="remember">
                <a-checkbox v-model:checked="formState.remember" style="font-size: 14px;">Ghi nhớ đăng nhập</a-checkbox>
              </a-form-item>

              <a-form-item style="padding-left: 10px;">
                <a @click="showModal">Quên mật khẩu?</a>
              </a-form-item>
              <a-modal
                  v-model:visible="visible"
                  title="Khôi phục mật khẩu"
                  :confirm-loading="confirmLoading"
                  @ok="handleOk"
              >
                <a-form-item
                    :wrapper-col="{ offset: 1, span: 22 }"
                    name="username"
                    :rules="[{ required: false, message: '' },{
                pattern: /^(([^<>()[\]\.,;:\s@\']+(\.[^<>()[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i,
                message: 'Vui lòng nhập đúng định dạng email',
              }]"

                >
                  <a-input v-model:value="formState.email" placeholder="Email đăng kí tài khoản"
                           style="height: 40px; border-radius: 5px;"

                  />


                </a-form-item>
              </a-modal>
            </a-col>


          </a-row>


        </div>
        <div class="btnLoginSend">
          <a-form-item :wrapper-col="{ offset: 3, span: 10 }">
            <a-button type="primary" html-type="submit" style="width: 300px; height: 40px" @click="login" :loading="iconLoading">

              Đăng nhập</a-button>
          </a-form-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';
import { UserOutlined, LockOutlined  } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';


export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,





  },
  setup() {
    const formState = reactive({
      username: '',
      password: '',
      email: '',
      remember: true,
    });
    const modalText = ref('Content of the modal');
    const visible = ref(false);
    const confirmLoading = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      modalText.value = 'Mật khẩu mới đang được gửi vào email của bạn, vui lòng chờ vài giây!';
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
      }, 4000);
    };
    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
      modalText,
      visible,
      confirmLoading,
      showModal,
      handleOk,
      formState,
      onFinish,
      onFinishFailed,
    };
  },
  methods: {
    login() {
      console.log(this.formState.username, this.formState.password);
      const params = {
        clientId: "ASME_ACCOUNTING",
        username: this.formState.username,
        password: this.formState.password,
      };
      this.axios
          .post("http://45.76.146.234:8051/auth/login", params)
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data.body));
            
            message.success("Đăng nhập thành công");

            
           this.$router.push({name: 'bank'});
            
            

          })
          .catch(() => {
            message.error("Đăng nhập thất bại!")
          });
    },
  },

});
</script>

<style scoped>
* {

  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
}


.loginform {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
  width: 100%;
  background: url("https://asme.vietants.vn/assets/bg8.e3e40d4d.jpg") no-repeat top;

}


.form {
  border: 1px solid white;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  height: 400px;
  width: 400px;
  margin-bottom: 200px;
  background-color: white;

}

.logo-title {
  display: flex;
  justify-content: center;
  padding: 30px 20px 10px 0;
}


.chkbox-group {
  display: flex;
}
</style>