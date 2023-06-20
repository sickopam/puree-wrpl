import { useEffect, useState } from 'react';

function OrderPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      const orderId = "cliix4kii001sbdmd6czkigsk";
      const response = await fetch('http://localhost:3000/api/orders?orderId=cliix4kii001sbdmd6czkigsk');
      const data = await response.json();
      setOrder(data);
    }

    fetchOrder();
  }, []);

  console.log(order)

  return (
    <div>
      {order ? (
        <div>
          {order[0].OrderItem ? (
            <div className='space-y-4'>
              {order[0].OrderItem.map((orderItem) => (
                <div key={orderItem.id} className='text-xs font-semibold text-[#333333] space-y-1'>
                  <p>{orderItem.Item.name}</p>
                  {/* <p>{orderItem.quantity}</p> */}
                  <p className='text-[#666666]'>{orderItem.Item.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No order items found.</p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OrderPage;
