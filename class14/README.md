
### Cách chia component
Được sử dụng ở nhiều nơi
    <NavBar>
    <Footer>
    <Product>
    <RecentProduct>
    <RatingStar>
    <IconButton>
    <SearchBox>
    <ResultIndicator>
    <AdvertiseCard>
Dùng để đặt lại 1 tên có nghĩa, phân chia theo vùng
    <HomePage>
    <CheckoutPage>

### Cách xây dựng 1 component
Xác định xem component đó cần những thông tin gì
    <Product>
    imgUrl: String
    name: String
    oldPrice: Number
    newPrice: Number
    isSale: Boolean
Xác định xem cách xài nó ntn
    <Product imgUrl="..." title="Spageti" oldPrice={300} newPrice={400} isSale>
    <Product imgUrl="..." title="Spageti" oldPrice={300} newPrice={400}>
Viết code hàm render cho component
Viết code css cho component
Điều chỉnh hàm render theo những thông tin nhận vào


### `export` vs `export default`
1 file chỉ có duy nhất 1 `export default`
1 file có thể có nhiều `export`
Khi import thì mặc định sẽ import value từ `export default`
Muốn import value từ `export` thường thì phải để trong `{}`