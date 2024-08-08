const productData = [
  {
    productID: 1,
    productName: "Hành tây",
    priceNew: 120000.0,
    priceOld: 145000.0,
    Status: false,
    categorySlug: "/rau-cu",
    productCount: 15,
    Description:
      "Hành tây cung cấp một nguồn vitamin C, B6, sắt, kali và mangan để bảo vệ cơ thể khỏi cái lạnh và cảm cúm. Ngoài ra còn giàu Organosulfurs và các Flavonoid có thể giúp ngăn ngừa bệnh tim và tăng cường sức khỏe tim mạch. Nhờ chứa nhiều vitamin A, E và C mà hành tây có thể hỗ trợ tăng cường sức khỏe và bảo vệ da.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/hanh-tay12.jpg?v=1715069895337",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hanh-tay13.jpg?v=1715069895337",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hanh-tay14.jpg?v=1715069895337",
    ],
    tabId: 1,
    TabID: 1,
  },
  {
    productID: 2,
    productName: "Ngò rí",
    categorySlug: "/rau-cu",
    priceNew: 21000.0,
    priceOld: 25000.0,
    Status: true,
    productCount: 15,
    Description:
      "Ngò rí không chỉ tạo hương vị cho món ăn thêm hấp dẫn mà còn có nhiều công dụng cho sức khỏe. Hàm lượng vitamin C và beta-carotene có trong ngò rí giúp tăng đề kháng, ngăn tình trạng viêm nhiễm bên trong cơ thể, phòng ngừa các bệnh viêm khớp.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/ngo-ri.jpg?v=1712912315410",
    ],
    tabId: 1,
    TabID: 1,
  },
  {
    productID: 3,
    productName: "Đậu Cove",
    priceNew: 137000.0,
    priceOld: 145000.0,
    categorySlug: "/rau-cu",
    Status: true,
    productCount: 15,
    Description:
      "Một số lợi ích sức khỏe của đậu que: tăng cường sức khỏe tim mạch; ngăn ngừa ung thư ruột già và điều trị các vấn đề về dạ dày, ruột; cải thiện sức khỏe xương; tốt cho mắt. Vitamin B12, magie, chất xơ và folate trong đậu que giúp giảm cholesterol, ngừa bệnh cao huyết áp và thúc đẩy lưu thông tuần hoàn máu.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/dau-cove1.jpg?v=1712911870007",
    ],
    tabId: 1,
    TabID: 1,
  },
  {
    productID: 4,
    productName: "Cà chua hà lan",
    priceNew: 123000.0,
    priceOld: 145000.0,
    categorySlug: "/rau-cu",
    Status: true,
    productCount: 15,
    Description:
      "Cà chua có kích thước và màu sắc hấp dẫn, hương vị ngon ngọt và hàm lượng dinh dưỡng phong phú. Cà chua mang một số lợi ích tuyệt vời đối với sức khỏe như: tăng cường sức khỏe tim mạch, ngăn ngừa ung thư, tốt cho chăm sóc tóc và da",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/ca-chua-ha-lan.jpg?v=1712911444550",
    ],
    tabId: 1,
    TabID: 1,
  },
  {
    productID: 5,
    productName: "Dâu cấp đông",
    priceNew: 124000.0,
    priceOld: 145000.0,
    categorySlug: "/trai-cay",
    Status: true,
    productCount: 15,
    TabID: 1,

    Description:
      "Dâu tây có hình dạng và màu sắc rất giống hình trái tim, và loại quả này cũng thực sự là tốt để bảo vệ trái tim của bạn, tăng lượng cholesterol HDL (tốt), giảm huyết áp và bảo vệ chống ung thư. Dâu tây rất giàu chất chống oxy hóa và các hợp chất thực vật, có lợi ích cho sức khỏe tim mạch và kiểm soát lượng đường trong máu.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/dau-cap-dong-mua.jpg?v=1713175919240",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/dau-cap-dong-mua2.jpg?v=1713175919240",
    ],
    tabId: 2,
  },
  {
    productID: 6,
    productName: "Kiwi vàng",
    priceNew: 145000.0,
    categorySlug: "/trai-cay",

    Status: true,
    productCount: 15,
    TabID: 1,

    Description:
      "Kiwi chứa một hàm lượng lớn polyphenol (các dưỡng chất cần thiết cho con người), axit folic, vitamin C, K và E, folate, kali, chất xơ, choline, đồng, magiê và phốt pho. Ngoài ra, loại quả này không có cholesterol, ít đường và chất béo.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/kiwi-vang-huu-co2.jpg?v=1713175503857",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/kiwi-vang-huu-co3.jpg?v=1713175503857",
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/kiwi-vang-huu-co.jpg?v=1713175503857",
    ],
    tabId: 2,
  },
  {
    productID: 7,
    TabID: 1,
    categorySlug: "/trai-cay",

    productName: "Táo Dazzle hữu cơ",
    priceNew: 130000,
    priceOld: 145000,
    Status: true,
    productCount: 15,
    Description:
      "Táo Dazzle hữu cơ sinh trưởng tự nhiên ở New Zealand, hấp thụ ánh nắng mặt trời cùng nguồn dinh dưỡng không bị tác động từ bất kỳ hoá chất hay thuốc trừ sâu. Vì thế táo Dazzle hữu cơ không chỉ giàu vitamin C cùng chất xơ, mà còn có độ ngon thuần túy, phù hợp với mọi chế độ ăn uống và mọi lứa tuổi.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/12817-851501657688267-1657688267.jpg?v=1713175181177",
    ],
    tabId: 2,
  },
  {
    productID: 8,
    productName: "Táo Candine Pháp",
    priceNew: 121000.0,
    priceOld: 145000.0,
    Brand: "Bean Drink",
    Status: true,
    categorySlug: "/trai-cay",
    productCount: 15,
    Description:
      "Táo Candine có sắc đỏ sáng bóng, thịt táo mọng nước cùng độ giòn ngọt. Táo Candine đang được trồng và mở rộng tại Pháp và Ý.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/ao-candine-huu-co-phap.jpg?v=1713174555260",
    ],
    tabId: 2,
    TabID: 1,
  },
  {
    productID: 9,
    productName: "Hạt sen tươi",
    priceNew: 222000,
    priceOld: 245000,
    Status: true,
    categorySlug: "/do-kho",
    productCount: 15,
    Description: "Chưa có mô tả",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hat-sen-tuoi.jpg?v=1713587709807",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hat-sen-tuoi2.jpg?v=1713587709807",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hat-sen-tuoi3.jpg?v=1713587709807",
    ],
    tabId: 3,
    TabID: 1,
    Brand: "Bean Drink",
  },
  {
    TabID: 1,

    productID: 10,
    productName: "Hạt điều bóc vỏ",
    priceNew: 227000,
    categorySlug: "/do-kho",

    priceOld: 345000,
    Status: true,
    productCount: 15,
    Description: "Tăng cường sức khỏe xương, cơ bắp",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hat-dieu-boc-vo.jpg?v=1713587480277",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hat-dieu-boc-vo2.jpg?v=1713587480277",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hat-dieu-boc-vo3.jpg?v=1713587480277",
    ],
    tabId: 3,
  },
  {
    productID: 11,
    productName: "Hạt hạnh nhân",
    priceNew: 167000,
    priceOld: 175000,
    categorySlug: "/do-kho",

    Status: true,
    productCount: 15,
    Description:
      "Hạt hạnh nhân hữu cơ Health Paradise có độ giòn và thơm lừng. Hạnh nhân chứa các axit béo không bão hòa đơn lành mạnh và chất chống oxy hóa, giúp hỗ trợ sức khỏe tim mạch và ngăn ngừa các yếu tố của bệnh tim mạch. Ngoài ra, hạnh nhân còn có các khoáng chất dinh dưỡng quan trọng như magiê, đồng, mangan, canxi và kali. Với các chất dinh dưỡng có trong hạnh nhân, loại hạt này được xem là thực phẩm tốt cho não, da, hệ tiêu hóa và xương.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/hat-hanh-nhan-dd.jpg?v=1713587200417",
    ],
    tabId: 3,
    TabID: 1,
  },
  {
    productID: 12,
    productName: "Đậu phộng đỏ",
    priceNew: 89000,
    categorySlug: "/do-kho",
    Status: true,
    productCount: 15,
    Description:
      "Đậu phộng chứa vitamin E, protein, khoáng chất như mangan, hỗ trợ cơ thể hấp thu canxi và ổn định đường huyết. Các dưỡng chất trong đậu phộng còn có tác dụng hỗ trợ kiểm soát hàm lượng cholesterol có trong máu. Đậu phộng thích hợp dùng làm nguyên liệu chế biến nhiều món ngon.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/dau-phong-do.jpg?v=1713586854930",
    ],
    tabId: 3,
    TabID: 1,
  },
  {
    productID: 13,
    productName: "Xương ống bò Kobe",
    priceNew: 87000,
    priceOld: 92000,
    categorySlug: "/thi-heo",
    Status: true,
    productCount: 15,
    TabID: 2,
    Description:
      "Thịt bò Wagyu là sản phẩm được chọn lọc bởi Bean Farm, thuộc nhóm đặc sản vùng miền, chăn nuôi và quy trình giết mổ khép kín. Bò wagyu do Công ty CP Bò Kobe Việt Nam (KVB) phát triển, đây cũng là trang trại đầu tiên và duy nhất tại Việt Nam nuôi thành công giống Bò lông đen Nhật Bản thế hệ F1 với phương thức chăn nuôi đúng chuẩn của Nhật Bản do chính các chuyên gia Nhật Bản chỉ đạo kỹ thuật. Đây là một loại thịt bò chất lượng (ngon, thơm, mềm) và sạch (không sử dụng hormones, không chất tăng trưởng).",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/xuong-ong-bo-kobe2.jpg?v=1713511789060",
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/xuong-ong-bo-kobe.jpg?v=1713511789060",
      "https://bizweb.dktcdn.net/thumb/medium/100/514/629/products/xuong-ong-bo-kobe3.jpg?v=1713511789060",
    ],
    tabId: 4,
  },
  {
    productID: 14,
    productName: "Thịt Vai",
    priceNew: 87000,
    categorySlug: "/thi-heo",

    priceOld: 92000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description:
      "Thức ăn của Heo, Gà được định lượng khoa học bởi hãng Bayer (Đức) và nấu chín giúp hệ tiêu hoá và sức đề kháng khoẻ mạnh. Bò và Dê được cho ăn hoàn toàn từ cỏ trong trang trại.Ngoài ra còn có các loại thảo dược như diệp hạ châu, tỏi, gừng, nghệ dùng thay cho thuốc kháng sinh để phòng và trị bệnh cho vật nuôi.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/nac-vai.jpg?v=1713511141443",
    ],
    tabId: 4,
  },
  {
    productID: 15,
    productName: "Mỡ Heo",
    priceNew: 76000,
    priceOld: 84000,
    categorySlug: "/thi-heo",

    Status: true,
    productCount: 15,
    TabID: 2,
    Description:
      "Thức ăn của Heo, Gà được định lượng khoa học bởi hãng Bayer (Đức) và nấu chín giúp hệ tiêu hoá và sức đề kháng khoẻ mạnh. Bò và Dê được cho ăn hoàn toàn từ cỏ trong trang trại.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/mo-heo.jpg?v=1713510949583",
    ],

    tabId: 4,
  },
  {
    productID: 16,
    productName: "Xương cotne",
    priceNew: 87000,
    priceOld: 92000,
    categorySlug: "/thi-heo",
    Status: true,
    productCount: 15,
    TabID: 2,
    Description:
      "Thức ăn của Heo, Gà được định lượng khoa học bởi hãng Bayer (Đức) và nấu chín giúp hệ tiêu hoá và sức đề kháng khoẻ mạnh. Bò và Dê được cho ăn hoàn toàn từ cỏ trong trang trại.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/cot-let-heo.jpg?v=1713510533377",
    ],
    tabId: 4,
  },
  {
    productID: 17,
    productName: "Xương thịt Karst",
    priceNew: 87000,
    priceOld: 92000,
    categorySlug: "/thi-heo",
    Status: true,
    productCount: 15,
    TabID: 2,
    Description:
      "Thức ăn của Heo, Gà được định lượng khoa học bởi hãng Bayer (Đức) và nấu chín giúp hệ tiêu hoá và sức đề kháng khoẻ mạnh. Bò và Dê được cho ăn hoàn toàn từ cỏ trong trang trại",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/xuong-thit-karst.jpg?v=1713176456930",
    ],
    tabId: 4,
  },
  {
    productID: 18,
    productName: "Nạc dăm",
    priceNew: 87000,
    priceOld: 92000,
    categorySlug: "/thi-heo",

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "Cà rốt tươi, giàu beta-carotene.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/nac-dam.jpg?v=1713508834890",
    ],
    tabId: 4,
  },
  //Thịt bò
  {
    productID: 19,
    productName: "Bò xay",
    priceNew: 87000,
    priceOld: 92000,
    categorySlug: "/thi-heo",

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/bo-xay-karst.jpg?v=1713513689450",
    ],
    tabId: 5,
  },
  {
    productID: 20,
    productName: "Xương ống bò",
    priceNew: 87000,
    priceOld: 92000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/xuong-ong-bo.jpg?v=1713513504497",
    ],
    tabId: 5,
  },
  {
    productID: 21,
    productName: "Bắp chân bò",
    priceNew: 87000,
    priceOld: 92000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/bap-chan-bo-kobe.jpg?v=1713513309253",
    ],
    tabId: 5,
  },
  {
    productID: 22,
    productName: "Dẻ bò",
    priceNew: 87000,
    priceOld: 92000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/de-suon-bo-kobe.jpg?v=1713512193857",
    ],
    tabId: 5,
  },
  {
    productID: 23,
    productName: "Gân bò",
    priceNew: 115000,
    priceOld: 120000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/gan-bo-kobe.jpg?v=1713512528300",
    ],
    tabId: 5,
  },
  //Hải sản
  {
    productID: 24,
    productName: "Chả mực",
    priceNew: 300000,
    priceOld: 410000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/cha-muc.jpg?v=1713514946607",
    ],
    tabId: 6,
    Type: 1,
  },
  {
    productID: 25,
    productName: "Tôm sú",
    priceNew: 269000,
    priceOld: 275000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "Cà rốt tươi, giàu beta-carotene.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/tom-su.jpg?v=1713516087560",
    ],
    tabId: 6,
    Type: 1,
  },
  {
    productID: 26,
    productName: "Cá thu một nắng",
    priceNew: 300000,
    priceOld: 310000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "Cà rốt tươi, giàu beta-carotene.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/ca-thu.jpg?v=1713515932630",
    ],
    tabId: 6,
    Type: 1,
  },
  {
    productID: 27,
    productName: "Cá chim trắng",
    priceNew: 234000,
    priceOld: 275000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "Cà rốt tươi, giàu beta-carotene.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/ca-chim-trang.jpg?v=1713515560530",
    ],
    tabId: 6,
    Type: 1,
  },
  {
    productID: 28,
    productName: "Cá lục",
    priceNew: 114000,
    priceOld: 125000,

    Status: true,
    productCount: 15,
    TabID: 2,
    Description: "Cà rốt tươi, giàu beta-carotene.",
    productImage: [
      "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/ca-nuc.jpg?v=1713515803790",
    ],
    tabId: 6,
    Type: 1,
  },
];

export default productData;
