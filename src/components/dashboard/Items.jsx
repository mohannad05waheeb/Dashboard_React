const Items = () => {
  const searchItems = [
    { keyword: "Programming", count: 220 },
    { keyword: "JavaScript", count: 180 },
    { keyword: "PHP", count: 160 },
    { keyword: "Code", count: 145 },
    { keyword: "Design", count: 110 },
    { keyword: "Logic", count: 95 },
];
return (
    <div className="search-items p-20 bg-white rad-10">
      <h2 className="mt-0 mb-20">Top Search Items</h2>
      <div className="items-head d-flex space-between c-grey mb-10">
        <div>Keyword</div>
        <div>Search Count</div>
      </div>
      {searchItems.map((item, index) => (
        <div key={index} className="items d-flex space-between pt-15 pb-15">
          <span>{item.keyword}</span>
          <span className="bg-eee btn-shape fs-13">{item.count}</span>
        </div>
      ))}
    </div>
  );
};
export default Items;