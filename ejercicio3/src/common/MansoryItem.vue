<template>
  <div class="MansoryItemStyle" id="cardHover" tabIndex="0">
    <!-- <Image src={item.imageUrl} alt={item.imageUrl} /> -->
    <div className="content__slate">
      <h3>Hola mundo</h3>
      <p>Yo soy lo mejor del mundo papu</p>

      <p className="d-flex flex-wrap">
        <span key="{index}" className="d-block mb-1"> 12-12-2021 </span>
      </p>
    </div>
  </div>
  <!-- 
        <SideBarModal
          show={show}
          closeShow={() => setShow(false)}
          size="lg"
          data={item}
        /> -->
</template>

<script>
export default {
  name: 'MansoryItem',
};
</script>

<style></style>
