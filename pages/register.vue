<template>
  <div class="container">
    <div>
      <h3 class="title">Register Member</h3>
      <div class="form-group">
        <label>Nama Lengkap</label>
        <validation-provider v-slot="{ errors }" rules="required">
          <input v-model="full_name" class="form-control" />
          <span class="errors">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="form-group">
        <label>Plat Nomor</label>
        <validation-provider v-slot="{ errors }" rules="required">
          <input v-model="plat_number" class="form-control" />
          <span class="errors">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="form-group">
        <label>ID Member</label>
        <validation-provider v-slot="{ errors }" rules="required">
          <input v-model="id_member" class="form-control" />
          <span class="errors">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <div class="form-group">
        <label>Asal Kota</label>
        <validation-provider v-slot="{ errors }" rules="required">
          <input v-model="asal_kota" class="form-control" />
          <span class="errors">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <button class="btn btn-outline-primary" @click="save">
        Simpan
      </button>
      <button class="btn btn-outline-warning" @click="back">
        Kembali
      </button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { ValidationProvider } from 'vee-validate'
import client from '@/plugins/feathers'
export default {
  components: {
    ValidationProvider
  },
  data() {
    return {
      data: [],
      full_name: ' ',
      plat_number: ' ',
      id_member: ' ',
      asal_kota: ' ',
      datapost: {}
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    save() {
      this.datapost = {
        full_name: this.full_name,
        plat_number: this.plat_number,
        id_member: this.id_member,
        asal_kota: this.asal_kota
      }
      client
        .service('/checkmember')
        .create(this.datapost)
        .then((res) => {
          Swal.fire(
            'Data Berhasil Di simpan!',
            'Sudah berhasil di simpan!',
            'success'
          ).then((val) => {
            this.full_name = ''
            this.plat_number = ''
            this.id_member = ''
            this.asal_kota = ''
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.errors {
  color: red;
  text-align: left;
  align-items: left !important;
}
.container {
  margin: 100px auto;
  min-height: 100vh;
  justify-content: left;
  align-items: left;
  text-align: left;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  text-align: center;
  letter-spacing: 1px;
}
</style>
