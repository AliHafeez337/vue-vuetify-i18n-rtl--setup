<template>
  <div class="about">
    <br />

    <div class="row">
      <div class="col col-lg-3 col-sm-12">
        <v-badge
          bordered
          color="error"
          icon="mdi-lock"
          overlap
        >
          <v-btn
            class="white--text"
            color="error"
            depressed
            @click="changeLanguage"
          >
            Change language
          </v-btn>
        </v-badge>
      </div>
      <div class="col col-lg-6 col-sm-12">
        <h1>This is an about page</h1>
      </div>
      <div class="col col-lg-3 col-sm-12">
        <p>{{ $t('message.hello', { msg: 'Ali' }) }}</p>
      </div>
    </div>
    
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
  computed: {
    isRTL() {
      return this.$vuetify.rtl
    }
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale === 'en' ? this.$i18n.locale = 'ar' : this.$i18n.locale = 'en'
      this.$vuetify.rtl = !this.$vuetify.rtl
    }
  }
}
</script>