const check = () =>{
    let fruit = document.getElementById("fruit").value;

    switch(fruit){
            case 'Ổi':
            case 'Dưa hấu':
                alert('Giá: 20000VNĐ/kg');
                break;
            case 'Táo':
            case 'Xoài':
                alert('Giá: 30000 VNĐ/kg');
                break;
            case 'Cam':
            case 'Chôm chôm':
                alert('Giá: 40000 VNĐ/kg');
                break;
            case 'Măng cụt':
                alert('Giá: 50000 VNĐ/kg');
                break;
    }
}