<script>
import axios from 'axios';

export default {
  data() {
    return {
      pets: [],
      newPet: {
        name: '',
        type: '',
        age: null,
        description: ''
      },
      showMore: [],  // Initialize as an empty object
      showAddPetForm: false
    };
  },
  mounted() {
    this.fetchPets();
    this.initializeShowMore();
  },
  methods: {
    async fetchPets() {
      try {
        const response = await axios.get('http://localhost:3000/pets');
        this.pets = response.data;
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    },
    async addPet() {
      try {
        const response = await axios.post('http://localhost:3000/pets', this.newPet);
        this.pets.push(response.data);
        this.resetNewPet();
        this.showMore[response.data.id] = true; // Initialize showMore for the new pet
      } catch (error) {
        console.error("Error adding pet:", error);
      }
    },
    resetNewPet() {
      this.newPet = {
        name: '',
        type: '',
        age: null,
        description: ''
      };
    },
    toggleShowMore(id) {
      // Toggle the showMore state for the specific pet ID
      this.showMore[id] = !this.showMore[id];
      console.log(this.showMore);
    },
    initializeShowMore() {
      // Initialize showMore for all existing pets
      this.pets.forEach(pet => {
        this.showMore[pet.id] = false;
      });
    },
    toggleAddPetForm() {
      this.showAddPetForm = !this.showAddPetForm;
    }
  }
};
</script>

<template>
  <div class="pet-list-container">
    <h1>Pets
      <button @click="toggleAddPetForm">
      {{ showAddPetForm ? "Hide" : "Add Pet" }}
    </button>
    </h1>

    <!-- Add Pet Form -->

    <br>
    <div v-if="showAddPetForm" class="add-pet-form">
      <input v-model="newPet.name" placeholder="Pet Name" />
      <input v-model="newPet.type" placeholder="Pet Type" />
      <input v-model.number="newPet.age" placeholder="Pet Age" type="number" />
      <textarea v-model="newPet.description" placeholder="Description"></textarea>
      <button @click="addPet">Add Pet</button>
    </div>

    <!-- List of Pet Cards -->
    <div class="pet-list">
      <div v-for="pet in pets" :key="pet.id" class="pet-card">
        <div class="pet-info">
          <h2>{{ pet.name }} ({{ pet.type }})</h2>
          <p>Age: {{ pet.age }}</p>
          <p v-if="showMore[pet.id]">{{ pet.description }}</p>
          <button @click="toggleShowMore(pet.id)">
            {{ showMore[pet.id] ? "Show Less" : "Show More" }}
          </button>
        </div>
        <div class="pet-image-container">
          <img
              src="https://via.placeholder.com/300"
              alt="Pet Image"
              class="pet-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.pet-list-container {
  background-color: #407cc0;
  padding: 20px;
  color: white;
}

.add-pet-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.add-pet-form input,
.add-pet-form textarea {
  margin-bottom: 10px;
  padding: 8px;
}

.pet-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.pet-card {
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 8px;
  width: 70%;
  display: flex;
  align-items: center;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  background-color: #0056b3;
  color: white;
  border-radius: 4px;
}

button:hover {
  background-color: #003c80;
}

.pet-info {
  flex: 1;
}

.pet-image-container {
  display: flex;
  align-items: center;
}

.pet-image {
  width: 200px;
  height: auto;
}

</style>

