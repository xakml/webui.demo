 //$(document).ready(function () {
    $('#btnSubmit').click(function () {
        console.log("开始发送请求");
        //var data = $("#mainForm").serialize();
        //data = $("#mainForm").serializeArray();
        var userName = $("input[name='UserName']").val()
        console.log(userName);
        var formData = new FormData();
        formData.append("UserName",$("input[name='UserName']").val());
        formData.append("EmailAddress",$("input[name='EmailAddress']").val());
        console.log(formData);
//                console.log(data);
//{ "UserName": "hello", "EmailAddress": "world" },
//                return;
        $.ajax(
            {
                type: 'Post',
                url: 'http://localhost/identity2study/AppUser/Create',
                data: formData,
                processData:false,
                contentType:false,
                success: function (data, status) {
                    console.log(data);
                    console.log(status);
                    alert("提交成功！");
                },
                error: function (xhr, error_msg,exception) {
                    // 状态码
                    console.log(xhr.status);
                    // 状态
                    console.log(xhr.readyState);
                    // 错误信息   
                    console.log(error_msg);
                }

            }
        )
    });
//});