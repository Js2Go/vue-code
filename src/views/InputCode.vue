<template>
  <div>
    <label for="code">Code: </label>
    <!-- 可以直接输入短信限制只可以输入数字 -->
    <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode -->
    <input
      type="text"
      name="code"
      id="code"
      inputMode="numeric"
      pattern="[0-9]*"
      autoComplete="one-time-code"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>