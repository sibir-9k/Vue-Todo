<template>
  <nav class="navbar navbar-light bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <div class="d-flex align-items-center">
          <img
            src="@/assets/logo.png"
            width="100"
            height="100"
            className="d-inline-block "
            alt=""
            loading="lazy"
          />
          <h2 class="text-light">Vue-ToDo</h2>
        </div>
      </a>
      <div class="counter">
        <div class="allCounter">Всего:{{ done + undone }}</div>
        <div class="doneCounter">Выполненно:{{ done }}</div>
        <div class="undoneCounter">Не выполненно:{{ undone }}</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["done", "undone"],
  name: "Header",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap");
.counter {
  display: flex;
}

.allCounter,
.doneCounter,
.undoneCounter {
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 23px;
  margin-right: 25px;
  color: #fff;
}
</style>
