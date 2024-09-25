<script>
import HeaderContent from "./header-content.component.vue";
import CommunityCard from "./card-community-item.component.vue";

export default {
  name: "communities",
  components: {CommunityCard, HeaderContent},
  data() {
    return {
      communityItem: [],
      page: 0,
      itemsPerPage: 7,
    };
  },
  computed: {
    pagedItems() {
      const start = this.page * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.communityItem.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if ((this.page + 1) * this.itemsPerPage < this.communityItem.length) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page > 0) {
        this.page--;
      }
    },
  },
  created() {
    fetch('https://jdu202012207.github.io/pruebas-api/food-items.json')
        .then(response => response.json())
        .then(data => {
          this.foodItems = data;
        });
  },
}
</script>

<template>
  <div id="header" >
    <HeaderContent />
  </div>
  <div id="app-container">
    <button class="arrow-button" @click="prevPage" v-if="page > 0">← Previous</button>
    <CommunityCard v-for="item in pagedItems" :key="item.id" :item="item"/>
    <button class="arrow-button" @click="nextPage" v-if="(page + 1) * itemsPerPage < communityItem.length">Next →</button>
  </div>
  <Footer/>
</template>

<style scoped>
#app-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 200px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.arrow-button {
  font-size: 1.5em;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: #000000;
}
</style>