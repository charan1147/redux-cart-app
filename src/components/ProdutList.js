import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import './ProductList.css';
 
const products= [
  {
      id: 1,
      title: "iPhone 16Pro max",
      description: "SIM-Free, 6.9-inch Super Retina HD display with OLED technology A18Pro Bionic chip with ...",
      price: "1,39,999",
      features:["17.53cm(6.9 inch) super Retina XDR DIspay 120hz",
          "256Gb ROM","8gb Ram",
          "48MP+48MP+12MP | 12MP Front Camera",
          "A18Pro Chip,6 Core Processor",
          "1 Year Warranty for Phone and 1 Year Warranty for in Box Accessories"
      ],
      discountPercentage: 12.96,
      rating: 4.69,
      brand: "Apple",
      category: "smartphones",
      image: "https://m.media-amazon.com/images/I/61PBLEFPoKL._AC_UY327_FMwebp_QL65_.jpg",
      quantity:0
  },
  {
      id: 2,
      title: "iPhone 15",
      description: "SIM-Free, 6.1-inch Super Retina display with OLED technology A12 Bionic chip with ...",
      price: "64,999",
      features:["15.49cm(6.1 Inch) super Retina XDR DIspay 60hz ","256Gb ROM", "6Gb Ram",
          "48MP++12MP | 12MP Front Camera",
          "A17 Chip,6 Core Processor",
          "1 Year Warranty for Phone and 1 Year Warranty for in Box Accessories"],
      discountPercentage: 17.94,
      rating: 4.44,
      brand: "Apple",
      category: "smartphones",
      image: "https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg",
      quantity:0
      
  },
  {
      id: 3,
      title: "Samsung Universe S24 Ultra",
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: "1,09,999",
      features:["17.27 cm (6.8 Inch) Quad Hd+ Display",
          "12Gb ram","256Gb Rom",
          "200MP+50MP+12MP+10MP |12MP Front",
          "5000 mAh Battery",
          "sanpdragon 8 Gen3 Processor",
          "1 Year Warranty for Phone and 6 Months Warranty for in Box Accessories "
],
      discountPercentage: 15.46,
      rating: 4.09,
      brand: "Samsung",
      category: "smartphones",
      image: "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
      quantity:0
  },
  {
      id: 4,
      title: "OPPO FInd X8 Pro",
      description: "OPPO Find X8 Pro is officially announced on October 2024.",
      price: "63,999",
      features:["17.27 cm (6.8 Inch) 1.5k Resolution Hd+ Display",
          "12Gb ram","256Gb Rom",
          "50MP+50MP+50MP |32MP Front Camera",
          "5910 mAh Battery",
          "MediaTech Dimensity 9400 Soc Processor",
          "1 Year Warranty for Phone and 6 Months Warranty for in Box Accessories "],
      discountPercentage: 17.91,
      rating: 4.3,
      brand: "OPPO",
      category: "smartphones",
      image:"https://i.gadgets360cdn.com/products/small/oppo-find-x8-240x180-1729779598.jpg?output-quality=80" ,
      quantity:0
  },
  {
      id: 5,
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday ",
      price: "49,999",
      features:["17.27 cm (6.8 Inch) Hd Display",
          "6Gb ram","256Gb Rom",
          "12MP+12MP+12MP |32MP Front Camera",
          "4000mAh Battery",
          "Kirin 910 Soc Proceesor",
          "1 Year Warranty for Phone and 6 Months Warranty for in Box Accessories "],
      discountPercentage: 10.58,
      rating: 4.09,
      brand: "Huawei",
      category: "smartphones",
      image: "https://m.media-amazon.com/images/I/51N2wcrT00L._AC_UF894,1000_QL80_.jpg",
      quantity:0
  }
]

const ProductList = () => {
  const dispatch = useDispatch();

  const handleBuy = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <ul>            
              {product.features.map((feature,index)=>(
              <li key={index}>{feature}  </li>
              ))}
          </ul>
          <p>Price: ₹{product.price.toLocaleString('en-IN')}</p>
          <button onClick={() => handleBuy(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;


