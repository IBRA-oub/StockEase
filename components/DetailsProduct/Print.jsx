import * as Print from 'expo-print';

export const printProductDetails = async (productDetail, productCity) => {

    const generateHTML = () => {
        const quantityCity = productDetail?.stocks?.filter(stock => stock.localisation.city === productCity) || [];
        return `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { text-align: center; margin-bottom: 20px; }
            .divider { border-top: 2px solid #000; margin: 20px 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
            th { background-color: #f4f4f4; }
            .barcode-container { text-align: center; margin-top: 20px; }
            .barcode { font-size: 40px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>Product Report</h2>
          </div>
          
          <div class="divider"></div>

          <table>
            <tr>
              <th>Product Name</th>
              <td>${productDetail?.name}</td>
            </tr>
            <tr>
              <th>Product Type</th>
              <td>${productDetail?.type}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>${productDetail?.price ? productDetail?.price : '0'} DH</td>
            </tr>
            <tr>
              <th>Solde</th>
              <td>${productDetail?.solde ? productDetail?.solde : '0'} DH</td>
            </tr>
            <tr>
              <th>Supplier</th>
              <td>${productDetail?.supplier}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>${quantityCity[0].quantity ? quantityCity[0].quantity : '0'}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>${productCity}</td>
            </tr>
            <tr>
              <th>Barcode</th>
              <td>${productDetail?.barcode}</td>
            </tr>
          </table>

          <div class="divider"></div>

          <div class="barcode-container">
            <p class="barcode">${productDetail?.barcode}</p>
          </div>
        </body>
      </html>
    `;
    };

    try {
        const html = generateHTML();
        const { uri } = await Print.printToFileAsync({ html });
        await Print.printAsync({ uri });
        return true;
    } catch (error) {
        return false
    }
};
