var app = new Vue({
 el: "#app",
 data:{
  
  name:"",
  nameValid:false,
  nameMessage:"",
   
  age:"",
  ageValid:false,
  ageMessage:"", 
  
  email:"",
  emailValid:false,
  emailMessage:"",
   
  comment:"",
  commentValid:false,
  commentMessage:"",
  
  arrayStatus: ["Invalid","Invalid","Invalid","Invalid","Invalid","Invalid"],
  checkSubmission:""
  },
  
  
  methods:{
    submitForm: function(){
      if(this.arrayStatus.includes("Invalid")){
        this.checkSubmission =  "Invalid Submission";
      }
      else{
        this.checkSubmission = "You can submit!";
      }
    }
  },
  
  watch:{
    
    name: function(){
      if(this.name.length>=2){
        this.nameValid = null;
        this.arrayStatus[0] = "Valid";
        this.arrayStatus[1] = "Valid";
        this.submitForm();
         }
      else{
        this.nameValid = "Must be at least two characters";
        this.arrayStatus[1] = "Invalid";
        this.submitForm();
      }
    },
    
    age: function(){
      if(this.age>=18){
        this.ageValid = null;
        this.arrayStatus[2] = "Valid";
        this.arrayStatus[3] = "Valid";
        this.submitForm();
          }
      else{
        this.ageValid = "Must be at least 18";
        this.arrayStatus[3] = "Invalid";
        this.submitForm();
          }
    },
    
   
    email: function(){
      var aye = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      //thank you w3resource.com, I couldn't figure out how to do email validation without something crazy like this
      if(aye.test(this.email)){
        this.emailValid = null;
        this.arrayStatus[4] = "Valid";
        this.arrayStatus[5] = "Valid";
        this.submitForm();
      }
      else{
        this.emailValid = "Must be a valid email address. Ex: name@site.domain"
        this.arrayStatus[5] = "Invalid";
        this.submitForm();
      }
    },
    
    comment: function(){
      if(this.comment.length < 250){
        this.commentValid=false;
      }
      else{
        this.commentValid=true;
        this.commentMessage="Way to keep it under 250 characters, the database admins appreciate it"
      }
    }
    
      
  }
  
  
})