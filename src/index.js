class SmartCalculator {
  
  constructor(initialValue) {
    this.expression = [];
    this.expression.push(initialValue);
    
  }

  add(number) {
    this.expression.push('+');
    this.expression.push(number);
    return this;
  }
  
  subtract(number) {
    this.expression.push('-');
    this.expression.push(number);
    return this;
  }

  multiply(number) {
    this.expression.push('*');
    this.expression.push(number);
    return this;
  }

  devide(number) {
    this.expression.push('/');
    this.expression.push(number);
    return this;
  }

  pow(number) {
    this.expression.push('^');
    this.expression.push(number);
    return this;
  }

  valueOf() {

    // '*' and '/'

    for(let i = this.expression.length-1; i >= 0; i--){
      if(this.expression[i] === '^'){
        console.log(this.expression);
        var temp = Math.pow(this.expression[i-1], this.expression[i+1]);
        this.expression.splice([i-1], 3 , temp);
      }
    }

    while(this.expression.indexOf('*')!== -1){
      console.log(this.expression);
      var i = this.expression.indexOf('*');
      var temp = this.expression[i-1] * this.expression[i+1];
      this.expression.splice([i-1], 3 , temp);
    }
    
    while(this.expression.indexOf('/')!== -1){
      console.log(this.expression);
      var i = this.expression.indexOf('/');
      var temp = Math.floor(this.expression[i-1] / this.expression[i+1]);
      this.expression.splice([i-1], 3 , temp);
    }

    while(this.expression.indexOf('-')!== -1){
      console.log(this.expression);
      var i = this.expression.indexOf('-');
      var temp = this.expression[i-1] - this.expression[i+1];
      this.expression.splice([i-1], 3 , temp);
    }

    while(this.expression.indexOf('+')!== -1){
      console.log(this.expression);
      var i = this.expression.indexOf('+');
      var temp = this.expression[i-1] + this.expression[i+1];
      this.expression.splice([i-1], 3 , temp);
    }


    console.log(this.expression);

    return this.expression[0];
  }
}

module.exports = SmartCalculator;
