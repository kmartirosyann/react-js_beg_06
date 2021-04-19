

 const validate=(state,name)=>{
   console.log(name)
    let errors = {};
    let isValid = false;
    if (!state["name"] && name === "name" ) {
      isValid = true;
      errors["name"] = "Please enter your name.";
    }

    if (!state["email"] && name === "email") {
      isValid = true;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof state["email"] !== "undefined" && name === "email") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(state["email"])) {
        isValid = true;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!state["message"] && name === "message") {
      isValid = true;
      errors["message"] = "Please enter your message.";
    }
    if (!state["title"] && name === "title") {
      isValid = true;
      errors["title"] = "Please enter your title.";
    }

    if (!state["description"] && name === "description") {
      isValid = true;
      errors["description"] = "Please enter your description.";
    }

    
      errors= errors
    return {
      isValid,
      errors
    }
}

export default validate