// [{ name: '1', id: '2'}] => [{ label: '1', value: '2'}]
export const convertRawDataToSelect = dataArr => dataArr.map(item =>
  ({value: item.id || item._id, label: item.name}))