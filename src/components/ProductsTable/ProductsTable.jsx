import './ProductsTable.css';

const ProductsTable = () => {
  return (
    <table className='products-table'>
        <tr className='products-table-heading'>
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
        </tr>
        <tr className='products-table-tr'>
            <td>
                <img src="/images/p-oil.jpg" alt="oil image" className='products-table-img' />
            </td>
            <td>
                روغن سرخ کردنی
            </td>
            <td>
                92000 تومان
            </td>
            <td>82</td>
            <td>
               <button className='products-table-btn'>جزئیات</button> 
               <button className='products-table-btn'>حذف</button> 
               <button className='products-table-btn'>ویرایش</button> 
            </td>
        </tr>
    </table>
  )
}

export default ProductsTable
