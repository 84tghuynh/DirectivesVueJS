new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function() {
                console.log("result: computed-"+ this.value);
                return this.value === 37 ? 'Done' : 'Not there yet'
            }
        },
        watch: {
            value: function(value){
                var vm=this;
                setTimeout(function(){
                    vm.value =0;
                }, 2000);
            }
        }

    });