#Notes


1. Pass collection thru props on `<AppView>`

2. Load Font Awesome and Get Skeleton

3. Create Components MultiListingContainer and SingleItem JSX for multi-view
```
<div className="multi-view">
  <h2 className="product-count">
    <span>x</span><span> products</span>
  </h2>
  <div className="multi-listing align-children">
    <div>
      <img src="./images/food-pot.jpg"/>
      <h5>Awesome zebra skirt...</h5>
      <p><button>––</button></p>
      <p><i className="fa fa-thumbs-o-down fa-3x" data-user_rating="boo"></i></p>
    </div>
  </div>
</div>
```

4. Show products count in `<h2 className="product-count"></h2>`
5. Create callback function at top level that puts thumbs down item on regrettables list

6.  Create Text Box for Regrettables at Bottom
