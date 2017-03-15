var input = document.getElementById("input");

		input.addEventListener('focus',function(event) {
			this.value = "+994-";

			input.addEventListener('keydown',function(event){
				var str = '-';
				var x = this.value.length;
				
				if(x<17){
					if(x == 7 || x == 11 || x == 14 || x == 17){
						this.value += str;
					}	


				if(event.which>=48 && event.which<=57 || event.which == 45){
					return true;
				}
				else{
					event.preventDefault();
				}
			}

			event.preventDefault();
			
			});

		});