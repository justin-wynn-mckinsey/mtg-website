<template>
  <div id="main">
    <div v-if="showContainer" class="container">
        <div class="left-box"></div>
        <hr>
        <div class="right-box">
            <div class="right-box-rectangle"></div>
            <div class="right-box-rectangle"></div>
        </div>
    </div>

    <div v-else-if="contactCard" class="card">
      <form @submit.prevent="submitForm">
        <label>
          Name:   <input type="text" v-model="name" />
        </label>
        <br />
        <label>
          Email:  <input type="email" v-model="email" />
        </label>
        <br />
        <label>
          Subject:  <input type="text" v-model="subject" />
        </label>
        <br />
        <label>
          Message:  <textarea v-model="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>

    <div v-else-if="storyline" class="story">
      <p>The mission of our organization is different than an current SO because
different than that of the current RSOs
we are entering a completely new field for all HBCU's. The Esports industry
in the same organization type group?
has always been devoid of representation, especially on a collegiate level,
this SO strives to not only increase representation within the industry, but
also to introduce esports as a viable career option for all black people who
never had a space to excel in that field. It also strives to brina together a
very large majority of students, because it is a very common denominator
between all students everywhere, it brinas us together for many reasons.
whether it be competition, recreation, relaxation, or organization.
</p>
    </div>

  </div>
  <h2>{{ contentTitle }}</h2>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },

  props: {
    contentTitle: String,

    showContainer: {
      type: Boolean,
      default: false
    },

    contactCard: {
      type: Boolean,
      default: false
    },

    storyline: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/send-email', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#main{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  background-color: var(--maroon-color);
  border-radius: 9%;
  padding:2%;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60%;
  max-height: 60%;
  display: inline-block
}

.card input, .card textarea {
  width:315px;
  height: auto;
  border-radius: 10px;
  padding: 1%;
  margin:2%;
  margin-right: 0%;
  display: inline-block;
}
.card textarea{
  min-height: 100px;
  max-width: 350px;
  overflow-x: auto;
}

label{
  display: inline-block;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    margin: 0 auto;
    border: 6px solid var(--white-color);
}
.left-box {
    width:40%;
    height: 100%;
    background-color: var(--black-color);
}
hr {
    border: none;
    height: 100%;
    width: 4px;
    background-color: var(--white-color);
}
.right-box {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
}
.right-box-rectangle {
    width: 100%;
    height: 50%;
    background-color: var(--black-color);
    border-bottom: 4px solid var(--white-color);
}

h2{
  display: block;
}

</style>
