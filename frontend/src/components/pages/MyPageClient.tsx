"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  joinDate: string;
}

interface Order {
  id: number;
  date: string;
  status: string;
  total: number;
  items: string[];
}

export default function MyPageClient() {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제 API 호출로 대체
    const fetchUserData = async () => {
      try {
        // 임시 사용자 데이터
        const mockUser: User = {
          id: 1,
          name: "홍길동",
          email: "hong@example.com",
          joinDate: "2024-01-15",
        };

        // 임시 주문 데이터
        const mockOrders: Order[] = [
          {
            id: 1,
            date: "2024-01-20",
            status: "배송완료",
            total: 149000,
            items: ["프리미엄 티셔츠", "청바지"],
          },
          {
            id: 2,
            date: "2024-01-25",
            status: "배송중",
            total: 89000,
            items: ["스니커즈"],
          },
        ];

        setUser(mockUser);
        setOrders(mockOrders);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">정보를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">마이페이지</h1>
      
      {/* 사용자 정보 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">회원 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">이름</label>
            <p className="mt-1 text-lg text-gray-900">{user?.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">이메일</label>
            <p className="mt-1 text-lg text-gray-900">{user?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">가입일</label>
            <p className="mt-1 text-lg text-gray-900">{user?.joinDate}</p>
          </div>
          <div className="flex items-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              정보 수정
            </button>
          </div>
        </div>
      </div>

      {/* 주문 내역 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">주문 내역</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">주문 내역이 없습니다.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-gray-800">주문번호: {order.id}</p>
                    <p className="text-sm text-gray-600">주문일: {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-600">
                      {order.total.toLocaleString()}원
                    </p>
                    <p className="text-sm text-gray-600">{order.status}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>주문 상품: {order.items.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 액션 버튼들 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/products"
          className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
        >
          <h3 className="font-semibold mb-2">쇼핑 계속하기</h3>
          <p className="text-sm opacity-90">더 많은 상품을 둘러보세요</p>
        </Link>
        
        <Link
          href="/cart"
          className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700 transition-colors"
        >
          <h3 className="font-semibold mb-2">장바구니</h3>
          <p className="text-sm opacity-90">담은 상품을 확인하세요</p>
        </Link>
        
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-colors"
        >
          <h3 className="font-semibold mb-2">로그아웃</h3>
          <p className="text-sm opacity-90">안전하게 로그아웃하세요</p>
        </button>
      </div>
    </div>
  );
}
