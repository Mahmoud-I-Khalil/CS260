Vue.component('star-rating', VueStarRating.default);

let app = new Vue({
  el: '#app',
  data: {
    number: '',
    max: '',
    current: {
      title: '',
      img: '',
      alt: '',
    },
    loading: false,
    addedName: '',
    addedComment: '',
    comments: {},
    todays: null,
    date: null,
    currentDate: '',
    ratings: {},
    starsCount: 0,
  },

  created() {
    this.xkcd();
  },

  computed: {
    month() {
      var month = new Array;
      if (this.current.month === undefined)
        return '';
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      return month[this.current.month - 1];
    }
  },

  watch: {
    number(value, oldvalue) {
      if (oldvalue === '') {
        this.max = value;
      } else {
        this.xkcd();
      }
    },
  },



  methods: {
    async xkcd() {
      try {
        this.loading = true;
        let url = 'https://xkcd.now.sh/?comic=';
        if (this.number === '') {
          url += 'latest';
        } else {
          url += this.number;
        }
        const response = await axios.get(url);
        this.current = response.data;
        this.loading = false;
        this.number = response.data.num;
        if (this.todays === null) {
          this.todays = response.data.num;
        }
        if (this.date) {
          this.date = [current.month, current.day, current.year];
        }
      } catch (error) {
        console.log(error);
      }
    },

    previousComic() {
      this.number = this.current.num - 1;
    },

    nextComic() {
      this.number = this.current.num + 1;
    },

    latestComic() {
      this.number = this.todays;
    },

    oldestComic() {
      this.number = 1;
    },

    getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
    },

    randomComic() {
      this.number = this.getRandom(1, this.max);
    },

    rateComment(rating){
        this.starsCount = rating;
    },

    addComment() {
      if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array);
      this.currentDate = moment().calendar();
      this.comments[this.number].unshift({
        author: this.addedName,
        text: this.addedComment,
        rating: this.starsCount,
        dateP: this.currentDate
      });
      this.add
      this.addedName = '';
      this.addedComment = '';
      this.currentDate = '';
      this.starsCount = 0;
    },

    totalRating() {
      // Handle the rating
      let sum = 0;
      let total = 0;
      for(comment in this.comments[this.number]){
        let val = this.comments[this.number][total].rating;
        sum += val;
        total += 1;
        console.log(sum);
      }
      let avg = sum/total;
      return avg;

    }
  }
});
