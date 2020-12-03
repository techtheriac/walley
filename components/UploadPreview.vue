<template>
  <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${profilePicture})` }"
      @click="selectImage"
    ></div>
    <input v-show="false" ref="fileInput" type="file" @input="pickFile" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      profilePicture: '/profile-image-placeholder.png',
    }
  },
  watch: {
    profilePicture() {
      this.$emit('profile-picture', this.profilePicture)
    },
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      const input = this.$refs.fileInput
      const file = input.files
      if (file && file[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.profilePicture = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.imagePreviewWrapper {
  width: 200px;
  height: 170px;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  /* background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.5)); */
  background-size: cover;
  background-position: center center;
}
</style>
