<template lang="pug">
  div.calendar-wrapper
    header
      div.current-date
        div.calendar-title Укажите дату
        div.today
          div
            div.arrow-up(@click="dateIncrease()")
          div
            div.arrow-up(@click="monthIncrease()")
          div
            div.arrow-up(@click="yearIncrease()")
          div {{ currentDate.date }}
          div {{ month[currentDate.month] }}
          div {{ currentDate.year }}
          div
            div.arrow-down(@click="dateDecrease()")
          div
            div.arrow-down(@click="monthDecrease()")
          div
            div.arrow-down(@click="yearDecrease()")
    div.calendar__main
      div.weekdays
        div.weekday(v-for="(weekday, index) in weekdays" :key="index") {{ weekday }}

      div.date
        div.day-hidden(v-for="(n, index) in (firstMonthDay -1)" :key="'prev'+index") {{ (prevMonthDays +1) - firstMonthDay + n }}
        div.day(:class="{ active: n === currentDate.date}" @click="currentDate.date = n" v-for="(n, index) in currentMonthDays" :key="'day'+index") {{ n }}
        div.day-hidden(v-for="(n, index) in (43 - (currentMonthDays + firstMonthDay))" :key="'next'+index") {{ n }}

</template>

<script>
  export default {
    name: 'Calendar',
    data: function() {
      return {
        weekdays: ['Пон','Вт','Ср','Чт','Пят','Суб','Вос'],
        weekdayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
        month: [
          'Январь','Февраль','Март','Апрель','Май','Июнь','Июль',
          'Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
        ],
        currentDate: {
          date: 0,
          month: 0,
          year: 0
        }
      }
    },
    computed: {
      //Посчитать количество оставшихся дней в прошлом месяце
      prevMonthDays() {
        //Если это январь то берем предыдущий год для расчета количества дней в предыдущ месяце
        let year = this.currentDate.month === 0 ? this.currentDate.year - 1 : this.currentDate.year;
        let month = this.currentDate.month === 0 ? 12 : this.currentDate.month;
        //Получаем кол-во дней
        return new Date(year, month, 0).getDate();
      },
      //Посчитать день недели первой недели месяца
      firstMonthDay() {
        let firstDay = new Date(this.currentDate.year, this.currentDate.month, 1).getDay();
        if(firstDay === 0) firstDay = 7;
        return firstDay;
      },
      currentDay() {
        return new Date(this.currentDate.year, this.currentDate.month, this.currentDate.date).getDay();
      },
      //Посчитать количество дней в текущем месяце
      currentMonthDays() {
        //Добавляю 1 к this.currentDate.month из за особенностей массива
        return new Date(this.currentDate.year, this.currentDate.month +1, 0).getDate();
      }
    },
    methods: {
      //Получить текущую дату при загрузке календаря
      getCurrentDate() {
        let today = new Date();
        this.currentDate.date = today.getDate();
        this.currentDate.month = today.getMonth();
        this.currentDate.year = today.getFullYear();
      },

      dateIncrease() {
        /*Если текущая дата равна общему количеству дней
        в текущем месяце то перескакиваем на след месяц*/
        if(this.currentDate.date === this.currentMonthDays) {
          this.currentDate.date = 1;
          this.monthIncrease();
        }
        else {
          this.currentDate.date += 1;
        }
      },

      dateDecrease() {
        /*Если текущая дата достигла минимального знач то перескакиваем на пред месяц*/
        if(this.currentDate.date === 1) {
          this.currentDate.date = this.prevMonthDays;
          this.monthDecrease();
        }
        else {
          this.currentDate.date -= 1;
        }
      },

      monthIncrease() {
        /*Если количество достигла максимального знач то перескакиваем на след месяц*/
        if(this.currentDate.month === 11) {
          this.currentDate.month = 0;
          this.currentDate.year += 1;
        }
        else {
          this.currentDate.month += 1;
        }
      },
      /*Если количество достигла минимального знач то перескакиваем на пред месяц*/
      monthDecrease() {
        if(this.currentDate.month === 0) {
          this.currentDate.month = 11;
          this.currentDate.year -= 1;
        }
        else {
          this.currentDate.month -= 1;
        }
      },

      yearIncrease(){
        this.currentDate.year += 1;
      },

      yearDecrease(){
        this.currentDate.year -= 1;
      }
    },
    created() {
      this.getCurrentDate();
    }
  }
</script>

<style lang="stylus" scoped>

  calendar-layout(property)
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-gap: 10px;
    padding: $property;
    div
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      color: #fff;


  arrow-style()
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    cursor: pointer;

  .calendar-wrapper
    margin: 5em 0;
    width: 30vw;
    background-color: #efefef;
    overflow: hidden;
    background-size: cover;
    user-select: none;

    header
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
      text-align: center;
      overflow: hidden;
      color: #000;
      font-weight: 600;

      .current-date
        width: 300px;

      .arrow-up
        arrow-style();
        border-bottom: 10px solid #000;
        &:hover
          border-bottom: 10px solid rgba(0,0,0,.4);


      .arrow-down
        arrow-style();
        border-top: 10px solid #000;

        &:hover
          border-top: 10px solid rgba(0,0,0,.4);


      .today
        display: grid;
        grid-template-columns: 40px auto 70px;
        grid-gap: 0;
        div
          display: flex;
          justify-content: center;


      .calendar-title
        font-size: 2rem;
        margin-bottom: 2rem;

      .today
        font-size: 2rem;


    .weekdays
      calendar-layout(20px);
      background-color: rgba(136, 130, 130, 0.5);
      font-weight: 600;

    .date
      calendar-layout(10px 20px 20px);
      background-color: rgba(0,0,0,.7);
      .active
        background-color: #fff;
        color: #2A4C50;

      .day
        cursor: pointer;
        &:hover
          background-color: #fff;
          color: #2A4C50;


      .day-hidden
        opacity: .4;



</style>
