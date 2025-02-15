import { useState } from "react"

export function useValidate() {
  const [fields, setFields] = useState({
    productName: "",
    type: "",
    barCode: "",
    price: "",
    discount: "",
    supplier: "",
    image: "",
    city: "",
    quantity: "",
  })

  const [errors, setErrors] = useState({})

  const validateForm = (fields) => {
    setErrors({})
    let isFormValid = true

    const { productName, type, barCode, price, discount, supplier, image, city, quantity } = fields

    if (productName.trim() === "") {
      setErrors((prevState) => ({ ...prevState, productName: "Product name is required" }))
      isFormValid = false
    }

    if (type.trim() === "") {
      setErrors((prevState) => ({ ...prevState, type: "Product type is required" }))
      isFormValid = false
    }

    if (barCode.trim() === "") {
      setErrors((prevState) => ({ ...prevState, barCode: "Bar code is required" }))
      isFormValid = false
    } else if (!/^\d+$/.test(barCode)) {
      setErrors((prevState) => ({ ...prevState, barCode: "Bar code must contain only numbers" }))
      isFormValid = false
    }

    if (price.trim() === "") {
      setErrors((prevState) => ({ ...prevState, price: "Price is required" }))
      isFormValid = false
    } else if (isNaN(Number(price)) || Number(price) <= 0) {
      setErrors((prevState) => ({ ...prevState, price: "Price must be a positive number" }))
      isFormValid = false
    }

    if (discount.trim() === "") {
      setErrors((prevState) => ({ ...prevState, discount: "Discount must be a non-negative number" }))
      isFormValid = false
    }

    if (supplier.trim() === "") {
      setErrors((prevState) => ({ ...prevState, supplier: "Supplier is required" }))
      isFormValid = false
    }

    if (image.trim() === "") {
      setErrors((prevState) => ({ ...prevState, image: "Image URL must start with https://" }))
      isFormValid = false
    }

    if (city.trim() === "") {
      setErrors((prevState) => ({ ...prevState, city: "City is required" }))
      isFormValid = false
    }

    if (quantity.trim() === "") {
      setErrors((prevState) => ({ ...prevState, quantity: "Quantity is required" }))
      isFormValid = false
    } else if (!/^\d+$/.test(quantity) || Number(quantity) <= 0) {
      setErrors((prevState) => ({ ...prevState, quantity: "Quantity must be a positive integer" }))
      isFormValid = false
    }

    return isFormValid
  }

  const resetForm = () => {
    setFields({
      productName: "",
      type: "",
      barCode: "",
      price: "",
      discount: "",
      supplier: "",
      image: "",
      city: "",
      quantity: "",
    })
  }

  const getError = (fieldName) => errors[fieldName]

  const hasError = (fieldName) => getError(fieldName) !== undefined

  const handleFieldChange = (fieldName, value) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: value,
    }))
  }

  return {
    validateForm,
    resetForm,
    getError,
    hasError,
    fields,
    handleFieldChange,
  }
}

