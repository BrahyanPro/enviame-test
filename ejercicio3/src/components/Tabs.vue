<template>
  <div className="Wrapper d-md-flex d-block tabs" role="tablist">
    <Tab
      activeTab="{activeTab}"
      key="{label}"
      label="{label}"
      href="{href}"
      aria-current="{activeTab}"
      onClick="{onClickTabItem}"
    />
  </div>
  <div className="tab-content">
    {children.map((child) => { if (child.props.label !== activeTab) return
    false; return child.props.children; })}
  </div>
</template>

<script>
import Tab from './Tab.vue';

export default {
  components: {
    Tab,
  },
};
</script>

<style></style>
