export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">모두의 쇼핑몰</h3>
            <p className="text-gray-300 text-sm">
              최고의 품질과 합리적인 가격으로 만나는 특별한 쇼핑 경험을 제공합니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">고객센터</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>전화: 1588-0000</li>
              <li>이메일: help@shoppingmall.com</li>
              <li>운영시간: 평일 9:00-18:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>배송안내</li>
              <li>교환/반품</li>
              <li>FAQ</li>
              <li>이용약관</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">회사정보</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>회사명: 모두의 쇼핑몰</li>
              <li>대표: 홍길동</li>
              <li>사업자등록번호: 123-45-67890</li>
              <li>주소: 서울시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 모두의 쇼핑몰. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
