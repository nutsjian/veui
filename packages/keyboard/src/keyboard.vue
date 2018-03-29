<template>
  <div class="ve-keyboard__wrapper" v-show="options.visible">
	<div class="ve-mask"></div>
	<div class="ve-keyboard">
	  <div class="ve-keyboard-title">{{options.title}}</div>
		<div class="ve-keyboard-inner">
		  <div class="ve-keyboard-row" v-for="row in keyRows">
			<p v-for="key in row" track-by="$index" :class="{'ve-keyboard-delete':key === 'Delete', 've-keyboard-cap':key === 'CapsLock', 've-keyboard-close':key === 'Close', 've-keyboard-sure':key === 'Sure'}" @click="keyClick(key)">{{key | keyfmt(capsed)}}</p>
	    </div>
	  </div>
	</div>
  </div>
</template>
<script>

export default {
	name: 've-keyboard',
	//text是对应的表单控件的value
	//title是键盘的标题，提示输入什么内容
	//show是控制键盘显示与隐藏的
	// props: ['text', 'title', 'show'],
	props: {
	  "options": {
	  	type: Object,
	  	required: true,
	  	default () {
	  	  return {
	  	  	title: '密码',
	  	  	text: '',
	  	  	visible: false
	  	  }
	  	}
	  }
	},
	data () {
		return {
			// 定义一个局部变量，因为父子组件 props 单向数据流的原因
			// visible: this.show,
			capsed: false,
			// letter: {
			// 	"a":"a","b":"b","c":"c","d":"d","e":"e","f":"f","g":"g","h":"h","i":"i","j":"j","k":"k","l":"l","m":"m","n":"n","o":"o","p":"p","q":"q","r":"r","s":"s","t":"t","u":"u","v":"v","w":"w","x":"x","y":"y","z":"z"
			// },
			// caseButtonText: "大写",
			// keyRow1: ['q','w','e','r','t','y','u','i','o','p','Delete','7','8','9'],
			// keyRow2: ['a','s','d','f','g','h','j','k','l','CapsLock','.','4','5','6'],
			// keyRow3: ['Close','z','x','c','v','b','n','m','Sure','0','1','2','3'],

			normalKeyRow1: ['q','w','e','r','t','y','u','i','o','p','Delete','7','8','9'],
			normalKeyRow2: ['a','s','d','f','g','h','j','k','l','CapsLock','.','4','5','6'],
			normalKeyRow3: ['Close','z','x','c','v','b','n','m','Sure','0','1','2','3'],

			capsedKeyRow1: ['Q','W','E','R','T','Y','U','I','O','P','Delete','7','8','9'],
			capsedKeyRow2: ['A','S','D','F','G','H','J','K','L','CapsLock','.','4','5','6'],
			capsedKeyRow3: ['Close','Z','X','C','V','B','N','M','Sure','0','1','2','3'],

			keyRows: {
				row1: ['q','w','e','r','t','y','u','i','o','p','Delete','7','8','9'],
				row2: ['a','s','d','f','g','h','j','k','l','CapsLock','.','4','5','6'],
				row3: ['Close','z','x','c','v','b','n','m','Sure','0','1','2','3']
			}
		}
	},
	ready () {
		// this.text = "";
		// this.title = "";
		// this.show = false;
	},
	watch: {
		"capsed": function(val, oldVal) {
			this.keyRows.row1 = val ? this.capsedKeyRow1 : this.normalKeyRow1;
			this.keyRows.row2 = val ? this.capsedKeyRow2 : this.normalKeyRow2;
			this.keyRows.row3 = val ? this.capsedKeyRow3 : this.normalKeyRow3;
		}
		// show (val) {
		// 	this.visible = val
		// },
		// visible (val) {
		// 	this.$emit('on-close', val)
		// }
	},
	methods: {
		keyClick: function(key) {
			switch(key) {
				case "CapsLock":
					this.capsed = !this.capsed
					// this.keyRows.row1 = this.capsed ? this.capsedKeyRow1 : this.normalKeyRow1;
					// this.keyRows.row2 = this.capsed ? this.capsedKeyRow2 : this.normalKeyRow2;
					// this.keyRows.row3 = this.capsed ? this.capsedKeyRow3 : this.normalKeyRow3;
					break;
				case "Close":
					// this.show = false
					this.capsed = false
					break
				case "Delete":
					let kbt = this.text
					this.text = kbt.length ? kbt.substring(0, kbt.length - 1) : kbt
					kbt = null
					break
				case "Sure":
					// this.show = false
					// this.visible = false
					this.options.visible = false
					this.capsed = false
					break
				default:
					this.options.text += key.toString()
					console.log(this.options.text)
					break
			}
		},
		//切换大小写
		toggleCase: function() {
			var a = this.letter['a']
			if(a < 'A' || a > 'Z') {		//判断字符是否是小写
				//如果是小写，转换成大写
				for(var l in this.letter) {
					this.letter[l] = l.toUpperCase()
				}
				this.caseButtonText = "小写"
			}else{	
				//如果是大写，转换成小写
				for(var l in this.letter) {
					this.letter[l] = l.toLowerCase()
				}
				this.caseButtonText = "大写"
			}
		}
	}
}
</script>
<style>
.ve-mask {
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	overflow: hidden;
	-webkit-user-select: none;
	z-index: 1024;
	background: rgb(0, 0, 0);
	opacity: 0.1;
}
.ve-keyboard {
	position: fixed;
	bottom: 0;
	height: 232px;
	width: 1024px;
	left: 50%;
	right: 50%;
	margin-left: -512px;
	margin-right: -512px;
	background: rgba(0, 0, 0, 0.8);
	z-index: 9999;
}
.ve-keyboard-title {
	position: absolute;
	left: 0;
	top: 0;
	height: 50px;
	line-height: 50px;
	width: 130px;
	/*background: #FB6001;*/
	background: rgba(0, 0, 0, 0.8);
	margin-top: -50px;
	text-align: center;
	color: #FFFFFF;
	font-weight: bold;
	font-size: 22px;
}
.ve-keyboard-inner {
	width: 100%;
	height: 100%;
}
.ve-keyboard-row {
	margin-top: 16px;
	display: flex;
	clear: both;
}

.ve-keyboard-row p:first-child {
	margin-left: 8px;
}
.ve-keyboard-row p {
	margin: 0 8px 0 0;
	padding: 0;
	background:#FFFFFF;
	color: #404040;
	width: 64px;
	height: 56px;
	line-height: 56px;
	text-align: center;
	font-size: 35px;
	font-weight: bold;
	flex: 1;
	font-family: "microsoft yahei";
	border-radius: 2px;
	cursor: pointer;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-select: none;
	user-select: none;
}
.ve-keyboard-row p.ve-keyboard-delete,
.ve-keyboard-row p.ve-keyboard-close {
	text-indent: -9999px;
}
.ve-keyboard-row p:active {
	background: #eeeeee;
}
.ve-keyboard-row p.ve-keyboard-delete {
	font-size: 16px;
	background: #FB6001;
	color: #FFFFFF;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA5CAYAAACGRC3XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBtJREFUeNrsWU1IFVEUPneei7SoJIwgCpOIqKAwdOXCQty4qIWPoI0WFoFQtLBwk76VpYtoIURK2SYoF9XCFpLkwkUgiUG1iDD7WUgWWtirqJnpnjNzrzPvPX+e3udcnblweTN3frjnu9/3nXPnsb91rBUAWiCcLcE4ADaEuBkQ8hYBEHYA8nL5crbzEEDB5pwGYH8cBUhO6wMA21sJRvUFYKXHVmwVrUcJ6kuar8osYFTUg9FwOxAq/6s3gvWAIIMP3AOMk9eJ9qE0wVjDHWAVdeFMg8sOnru32X0qo4uju1v3LurLABUrj8HbI4/B/DAKseZnMmVi8GbbEYBf32nMON6iFwNU0Z4Cy98E9qeXTsCcCd7g2Y6DOfeWrNNg7PxDpTneF/C2PWBPTwD8/kHBe1mhTxpUXNlhtUiBrtsA9sRbJ/jtB7IKfm3sBbw8ZDpnga/jymt5ksCfGZIA5G8E+/Mr6QnaAUDOPXRXvf5R81eec+oPphmjdhJQBQJtYETwrualJ7ggWP039MoCygshXuzEeCmdanjIDgQZy+xcZoFl7wZ1KYUD2w2iHHJNU+3TINbsVvfp8AJAIAz1rEoQlBZCCIJ59ShtcFayLfVzmBITXO0t+l8gAiACIAIgAiACIAJgZRvbXwWwvjC7TVfjfTBqLiufi5p/huJtvslZPefAqL85524Nr7GiEjmW12P5t8LjL8DqPAH25JhzP383K4sD8Geg75q+DLCHe9MCwS7R5oEiWBnbzykZMIIjg688K59hxYfnfl4LAF4PpJw/pb6oZ5NTtOoCOLHyxCQOjtlRTeNybC2aIK4wAfBmwNE8rrYIngMpQeCsiLUOy/sD9wBlrbhUMoCV1fqOfecCKFcmgQKAjs7K485x5Rn/rzsu6LyoxlccO8qB1Vyi1aas4d3+ciO0nrQ79wYugYJCMi0vheUvHxfXoGjXwj7Q107p0eCB4+piNsFMIbIFjuGx1dusJHglAKDzW25qwgn7fnGlUq7N+y4eIHa2r4qMLtbxTnYClIOdOra2PEBIAJmD0hLsEY2zg2VZQAWTBcQkJ99nFXhe5zeSDxqd2bSbqI7dJ4HGLVIa+jCAB0z0Fbp09Y7nzKN9E/M8urjHHL3vIGNDuQzeIgZgGqSawFP9xZr6nUIJawwFWUAJjKkuLWmanErzi/kmLT2DAycqPquv3X8PegkaJa8TtJCA1+mN8lo3n89mg1RwFru3ICkgYJnKaz5G7y6LayCBrSVOHT/YNUtZlAMBUEoTRUqLTRDm9YWKGJICyoqvvq/i+zLmSqQL2PhIGjhLWkAln8WR8ql5OcMYsQWLpOS0A4p7HVMaajpTqqRCiNcF6B3Wg2YlulcPQPRBJAIgAiACYBUDkAhx/Alm26FOAvBfgAEAEvwKpBKttI8AAAAASUVORK5CYII=) no-repeat;
}
.ve-keyboard-row p.ve-keyboard-delete:active {
	font-size: 16px;
	background: #FB6001;
	color: #FFFFFF;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA5CAYAAACGRC3XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABBhJREFUeNrsWU9IFFEc/u1qpuv6H8kQCyw6FQldOnRIsgiK7FARXVIIuwTpKQVJF4LspEKXREgvEtVBo0OUUQcPHioMOkWJZoES6q5uauY6zTfub3o7roubb3fGnfnBMDPvzZt93/e+35836xo7Q61E1EL2NJ9LJUAhG5ubbG4OAXYnID2RL88oryB3dn5CASyPjtDqL791CMg8dJxyquvJc7Q6aasY6PORv6/1v8ZKzQLeqhoqqn9oipTHz7rMjQFmgjc9BhTWdVDOuZv2DIJFDT3kPXHVnmlwy+AX/BTqrtXORlO+qdG9r8G6CpCx8gCvfBig0PgIpTW9IfLk6+BDdyuJFgNam/t8i7UUIEv2GrCsPFImPq4BVpUggneVHSb3qcTGlrjTYHFzv9QcHwG45AAp/kmipTkNvKgKy6RBt1duZefaU7EGNNNLyuTnNfClB+MCnxp7AVGHruT9bNwErEyNycXNLvA7qLkAZeWS8v2THhMsR8B0ew0FX/fK93/4/O1hVfpv1wVGy7mALBJW+33/wId9Xo8JYRJWX3ZaKwtIL4TUYiftSvu6gAd1KEO95EZfArPAlneDVimFTdsNwh3mn3XSdjUpaXCmq56mO2rtSwAsONizLUmQWgiBhKmmSloYHkgqCHwSMyULpII5/ws4BDgEOAQ4BDgEOAQk1zIrqsjtLYhrTHHjY8q9cEv6XKT8M1RQ0xYxuen716noxoMNd2voSy8p19v2Po+sxZa/vKefbZdoZXJUu8e7PccuamPmnt6zrgIWhp6sA4KDDUBBVtSPI8FZHTCA8rX3dJ0+JmP/kQ3HW4KAxZHBiPsl9X7J0LaRgQCsOhPHKw+1oG+q+aTWzm0pGQSxwkwkfB6rzeBBJJMAVezueKc/b3oMkGU7w4AAMlv1efFavGfg7CamEoCI7glPLkddGfHM7SznzboCu0OeOgarjd8QDYEwoB54znQXQDpD0BIlzGe0c9+O8Dnmvl4FhfcBOFYX2QSZgrMF2nA929MoBbwUAhD5OTVhwuIZ7ca+WAaAOLDiCHSl3V/1g8k2tqVUDGAXgGpAQrpBNSAg3gLKlCzAk/wTR5AC8LJHM5r7IND9uLZPkzoO0QUmLhfqrmEZBQAwJsd+yf5u9FMENoATg6P4jkDYXYIvujQFIA3iebH623XnlaYMpEUZWUCKAoxRmhVgJADxItakOWZgHFd8AUPpi9XH+1EnWMIFxEjPuVrMBkZyNru3wFgQFq28Rhv6oykp6S4A8FixeVW2LFleZRQ2mCgkzZsgb7hGiKUEToc4ixUfj8Fv/Q4TsVWT8lkckzXKPVobyEKRFFLbQQr3I6XBp6OlShCGugDEIiDK8HvpBDgfRBwCHAIcArYzAT4b4/e5FMXWSYD+CjAANjkhiymqUf4AAAAASUVORK5CYII=) no-repeat;
}
.ve-keyboard-row p.ve-keyboard-close {
	font-size: 16px;
	background: #1A9EFE;
	color: #FFFFFF;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA5CAYAAACGRC3XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYVJREFUeNrsmDFOAlEQhv8lhg4aKiPRBioOQDyBegA9gIYDeALcC3ABlAtwAUzsLIyN3VZWiAkdDVY0iy9gYogsi7tv3mzePw28ZLO7//dm/jc7wdFDfAegCz8jDL4BxPA4SvA8CIAACIAACIAACMDfOMj7htUy0KrZednPOTD5UgrACA/bwPkJUCnb27HHD6D3BkQzZQCM+Mum/ZQ9O1793jwp8wAJ8ZsQaIIaTfAn6oNf5nWdvE5zjVnzGCxSBpwe7rdOe03ekdtEyFaKpikxegA9gB5AD2AJaCuBrDsmlVHMAKkHSRiaUwDzRfIcYHiR30ubZ6krgX4kt2ujscIMuF8D6LTsToSG70D3VWEfUNTgWJwACICNkPrm52VaUABXjezjcnPs2QRgtQRun1cCsog39yi0B/wXgoR4MRPcF4KUeNFTIC0ESfHix+AuCNLinfQB2yC4EO+sEdqE4Eq89T5gF4S//ksHP4f5MUQABEAABEAABOA1gNBj/WEQ+90IYinAAEIke++/KTdwAAAAAElFTkSuQmCC) no-repeat;
}
.ve-keyboard-row p.ve-keyboard-close:active {
	font-size: 16px;
	background: #1A9EFE;
	color: #FFFFFF;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA5CAYAAACGRC3XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ9JREFUeNpiZJh8t4GBgaGeYWSCRkZgAPxnGMGAiWGEg9EAGA2A0QAYDYDRABgNgNEAGLmAhdoGCrAzMRiIsNPEsQ8+/2Z48OnP4AwAkMcn2AozBChxM/Cz0S5hbbz/laHh5HuGC29+Da4AAHk+XoOX5knWX5EbTAdsfTm4ygB6eB49EEYLwcFYCMIA45R7cPb/HCW8fGLUgPij1eBQSgEO0pwk8YlVQ/WUSq0RIVolUWKy2GgZMFoGjJYBo2XAaBYYbFmA0hijV4oaTQH0sogeBdqABsDHX//wjgPsD5RkoKZdgy4LTLjwkW6xtuHe18GXAiZchARAgQE/TUeEFt74zFBw+O3gawcMVTA6LD4aAKMBMNoQGvSNnwNPvw/NAEjQ5KF4uBxU7dEyAGiaBRL2vAZ7gBLPg8wY0mUAuYFAD8/TrRAkNRDo5Xm61gLEBgI9PU/3apBQINDb8wPSDsAVCAPh+QFrCKEHwkB5nubtAEKBgI1NbzDaHR7tDI0GwGgAjAbAaACMBsBoAIzoAGgcwf5vZPz/f0Q3BBkAAgwAROGx7V+P15YAAAAASUVORK5CYII=) no-repeat;
}
.ve-keyboard-row p.ve-keyboard-sure {
	background: #1A9EFE;
	color: #FFFFFF;
	-ms-flex: 2.1;
	-webkit-flex: 2.1;
	-moz-flex: 2.1;
	flex: 2.1;
	font-size: 22px;
}

.ve-keyboard-row p.ve-keyboard-cap {
	background: #1A9EFE;
	color: #FFFFFF;
	font-size: 22px;
}

.ve-keyboard-row p.ve-keyboard-sure:active,
.ve-keyboard-row p.ve-keyboard-cap:active {
	background: #0093dd;
}
</style>