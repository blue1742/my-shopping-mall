"use client";

import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity: number;
}

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // 실제 API 호출로 대체
    const fetchProducts = async () => {
      try {
        // 임시 데이터
        const mockProducts: Product[] = [
          {
            id: 1,
            name: "프리미엄 티셔츠",
            price: 29900,
            image: "/api/placeholder/300/300",
            description: "고품질 면 소재의 편안한 티셔츠",
            category: "의류",
          },
          {
            id: 2,
            name: "스니커즈",
            price: 89000,
            image: "/api/placeholder/300/300",
            description: "편안한 착용감의 스니커즈",
            category: "신발",
          },
          {
            id: 3,
            name: "가죽 지갑",
            price: 45000,
            image: "/api/placeholder/300/300",
            description: "천연 가죽으로 제작된 고급 지갑",
            category: "액세서리",
          },
          {
            id: 4,
            name: "청바지",
            price: 65000,
            image: "/api/placeholder/300/300",
            description: "슬림핏 데님 청바지",
            category: "의류",
          },
        ];
        
        setProducts(mockProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);

  const addToCart = (product: Product) => {
    // 장바구니 추가 로직
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: CartItem) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("장바구니에 추가되었습니다!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">상품을 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">전체 상품</h1>
      
      {/* 필터 */}
      <div className="mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            전체
          </button>
          <button
            onClick={() => setFilter("의류")}
            className={`px-4 py-2 rounded-lg ${
              filter === "의류" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            의류
          </button>
          <button
            onClick={() => setFilter("신발")}
            className={`px-4 py-2 rounded-lg ${
              filter === "신발" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            신발
          </button>
          <button
            onClick={() => setFilter("액세서리")}
            className={`px-4 py-2 rounded-lg ${
              filter === "액세서리" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            액세서리
          </button>
        </div>
      </div>

      {/* 상품 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">이미지</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">
                  {product.price.toLocaleString()}원
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  장바구니
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">해당 카테고리에 상품이 없습니다.</p>
        </div>
      )}
    </div>
  );
}