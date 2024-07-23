export const add = (item) => {
  return {
      type: "add",
      payload: item
  }
}

export const del = (index) => {
  return {
      type: "delete",
      payload: index
  }
}

export const edit = (index,newItem) => {
  return {
      type: "edit",
      payload: { index, newItem },
  }
}

export const get = (index) => {
  return {
      type: "get",
      payload:  index ,
  }
}