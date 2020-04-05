<template>
  <div class="container">
    <div>
      <logo />
      <h2 class="subtitle">
        Silahkan Check Member Menggunakan ID Club atau Plat Nomor
      </h2>
      <div class="form-group">
        <input
          class="form-control"
          placeholder="isi plat nomor atau id club anda"
        />
      </div>
      <button class="btn btn-outline-primary btn-lg" @click="search">
        Cari
      </button>
      <button class="btn btn-outline-warning btn-lg" @click="back()">
        Kembali
      </button>
    </div>
  </div>
</template>

<script>
import client from '@/plugins/feathers'
export default {
  data() {
    return {
      data: []
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    search() {
      console.log('aa')
      client
        .service('/checkmember')
        .watch()
        .find()
        .subscribe((res) => {
          this.data = res.data
          console.log(this.data)
        })
    }
  }
}
</script>

<style>
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
