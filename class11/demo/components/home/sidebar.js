
console.log('define function renderHomeSidebar')
const renderHomeSidebar = state => {
    return `<div class="sidebar">
    <div class="searching">
        <h4>SEARCHING BY</h4>
        <form action="index.html">
            <input type="text" name="keyword" id="keyword" placeholder="Are you looking for?">
            <button type="submit" class="keyword-searching"><i class="far fa-eye" alt="Further searching" aria-hidden="true"></i></button>
        </form>
    </div>
    <div class="listing-2">
        <h3>Recent Product</h3>
        <ul class="products">
            <li class="aside_img">
                <a><img src="./assest/images/recipes/7.jpg" alt="AFood"></a>
                <ul class="aside_listing">
                    <li><a href="index.html">
                            <h4>Food</h4>
                        </a></li>
                    <li>200,000d</li>
                    <li class="sidebar-start">☆☆☆☆☆</li>
                </ul>
            </li>
            <li class="aside_img">
                <a><img src="./assest/images/recipes/8.jpg" alt="AFood"></a>
                <ul class="aside_listing">
                    <li><a href="index.html">
                            <h4>Fish</h4>
                        </a></li>
                    <li>200,000d</li>
                    <li class="sidebar-start">☆☆☆☆☆</li>
                </ul>
            </li>
            <li class="aside_img">
                <a><img src="./assest/images/recipes/9.jpg" alt="AFood"></a>
                <ul class="aside_listing">
                    <li><a href="index.html">
                            <h4>Indian</h4>
                        </a></li>
                    <li>200,000d</li>
                    <li class="sidebar-start">☆☆☆☆☆</li>
                </ul>
            </li>
            
        </ul>
    </div>
    <div class="ad-sidebar"><a href="index.html"><img src="./assest/images/blog/1.jpg" alt="ad-sidebar"></a></div>
</div>`
}