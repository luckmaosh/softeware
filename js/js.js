function CheckPost()
{
    if (myform.name.value=="")
    {
        alert("亲，您的大名还没有填写噢~~");
        myform.name.focus();
        return false;
    }


    if (myform.mphone.value=="")
    {
        alert("亲，还是填写一下联系方式吧，我们好联系你~~");
        myform.mphone.focus();
        return false;
    }
        
    email=myform.email.value;   
    if(!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email))   
    {   
        alert("哇噜 mail格式不对噢...");   
        myform.email.focus();   
        return false;   
    }  
}
        
        