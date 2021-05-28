function loginModal() {
    $('#loginModal').modal('show');
}

function changeLogin(mssv) {
    $('#loginModal').modal('hide');
    $('h4').empty();
    $('h4').append(`Chào ${mssv}`)
    $("#btnLogin").empty();
    $("#btnLogin").append("Đăng xuất");
    $("#mssvForm").val(mssv);
}

$(document).ready(function() {
    let login = false;

    $("#btnSubmit").click(function() {
        let password = $('#password').val();
        let mssv = $('#mssv').val()
        if (mssv !== '') {
            if (password === '123456') {
                changeLogin(mssv);
                login = true;
            } else {
                $('#result').empty();
                $('#result').append('Sai mật khẩu (hint: 123456)');
            }
        } else {
            $('#result').empty();
            $('#result').append('Vui lòng nhập MSSV');
        }
    });

    $('#askForm').on('submit', function(e) {
        if (login === true) {
            let op = window.open("", "", "width=300,height=300");
            op.document.write("<p style='font-size:30px'><b>Xác nhận gửi câu hỏi</b></p>");
            op.document.write("<p>Tên của bạn: " + $("#mssvForm").val() + " </p>");
            op.document.write("<p>Nội dung: " + $("#content").val() + " </p>");
            op.document.write("<p>Đơn vị đào tạo bạn chọn: " + $("#uni").val() + "</p>");
        } else {
            alert("Vui lòng đăng nhập trước");
        }
    });
});