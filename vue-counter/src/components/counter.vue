<template>
    <div style="text-align:center; position:relative">
        <h1>계산기</h1>
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
        <button @mousedown="startDecrement" @mouseup="stop">-</button>
        <h2> {{ counter }}</h2>
        <button @mousedown="startIncrement" @mouseup="stop">+</button>
        </div>
        <button @click="reset" style="position:absolute;margin-top:30px;right:30%;">Reset</button>
    </div>
</template>

<script>
    export default {
        name:'CounterComponent',
        data(){
            return {
                counter:0, intervalID: null,
                };
            },
        methods:{
            increment(){
                this.counter++;
            },
            decrement(){
                this.counter--;
            },
            startIncrement(){
                this.intervalID=setInterval(() => this.increment(), 40);
            },
            startDecrement(){
                this.intervalID=setInterval(() => this.decrement(), 40);
            },
            stop(){
                clearInterval(this.intervalID);
            },
            reset(){
                this.counter=0;
            }
        },

    };
</script>