<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        Check Member Menggunakan ID Club atau Plat Nomor
      </h2>
      <div class="form-group">
        <validation-provider v-slot="{ errors }" rules="required">
          <input
            v-model="searchvalue"
            class="form-control"
            placeholder="isi plat nomor atau id club anda"
            filters="capitalize"
          />
          <span class="errors">{{ errors[0] }}</span>
        </validation-provider>
      </div>
      <button class="btn btn-outline-primary btn-lg" @click="search">
        Cari
      </button>
      <button class="btn btn-outline-warning btn-lg" @click="back()">
        Kembali
      </button>
      <br />
      <br />
      <div class="row">
        <table v-if="showtable" class="table table-bordered table-striped">
          <thead>
            <th>ID MEMBER</th>
            <th>Plat Nomor</th>
            <th>Nama Lengkap</th>
            <th>Asal Kota</th>
          </thead>
          <tbody v-if="data.length > 0">
            <tr v-for="item in data" :key="item.id">
              <td>{{ item.id_member }}</td>
              <td>{{ item.plat_number }}</td>
              <td>{{ item.full_name }}</td>
              <td>{{ item.asal_kota }}</td>
            </tr>
          </tbody>
          <tbody v-if="data.length == 0">
            <tr>
              <td colspan="5">Data Tidak Ditemukan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import client from '@/plugins/feathers'
export default {
  components: {
    ValidationProvider
  },
  data() {
    return {
      data: [],
      searchvalue: '',
      showtable: false
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    search() {
      client
        .service('/checkmember')
        .watch()
        .find({
          query: {
            $or: [
              { id_member: this.searchvalue },
              { plat_number: this.searchvalue }
            ]
          }
        })
        .subscribe((res) => {
          this.data = res
          this.showtable = true
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
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
