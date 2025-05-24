import React, { useState } from "react";
import { FormikErrors, useFormik } from "formik";
import * as Yup from "yup";
import LetsConnect from "./components/ui/LetsConnect";

const materialsData = [
  {
    section: "Cement & Concrete Products",
    items: [
      {
        material: "Ordinary Portland Cement",
        grade: "43 / 53 Grade",
        unit: "Bag (50kg)",
        minQty: 50,
        brand: "UltraTech, ACC, Dalmia",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
      },
      {
        material: "Portland Pozzolana Cement",
        grade: "ISI Marked",
        unit: "Bag (50kg)",
        minQty: 50,
        brand: "JK Cement, Ambuja, Ramco",
        isFileRequired: false
      }
    ]
  },
  {
    section: "Steel & Reinforcement",
    items: [
      {
        material: "TMT Bars",
        grade: "Fe500/Fe550",
        unit: "kg",
        minQty: 1000,
        brand: "Tata Tiscon, JSW, Kamdhenu",
        isFileRequired: true,
        allowedFileTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
      },
      {
        material: "Binding Wire",
        grade: "20 Gauge",
        unit: "kg",
        minQty: 50,
        brand: "Tata Wiron, ISI Local",
        isFileRequired: false
      }
    ]
  }
];

const validationSchema = Yup.object().shape({
  materials: Yup.array().of(
    Yup.object().shape({
      checked: Yup.boolean(),
      quantity: Yup.number()
        .when("checked", {
          is: true,
          then: (schema) => schema.required("Required").test("minQty", function (value) {
            const { minQty } = this.parent;
            return value >= minQty || this.createError({ message: `Minimum quantity is ${minQty}` });
          })
        }),
      brand: Yup.string(),
      grade: Yup.string(),
      fileUrl: Yup.string().nullable()
    })
  )
});

const onSubmit = (values: any) => {
  const groupedMaterials: any[] = [];
  let flatIndex = 0;

  for (const section of materialsData) {
    const selectedItems = [];

    for (const item of section.items) {
      const formItem = values.materials[flatIndex];
      if (formItem.checked) {
        selectedItems.push({
          material: formItem.material,
          grade: formItem.grade,
          unit: formItem.unit,
          quantity: formItem.quantity,
          brand: formItem.brand,
          fileUrl: formItem.fileUrl || null
        });
      }
      flatIndex++;
    }

    if (selectedItems.length > 0) {
      groupedMaterials.push({
        section: section.section,
        items: selectedItems
      });
    }
  }

  console.log(JSON.stringify(groupedMaterials, null, 2));
};

const ConstructionMaterialsForm: React.FC = () => {

  const [isModelOpen, setIsModelOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      materials: materialsData.flatMap(section =>
        section.items.map(item => ({
          checked: false,
          material: item.material,
          grade: item.grade,
          unit: item.unit,
          quantity: item.minQty,
          minQty: item.minQty,
          brand: item.brand,
          file: null,
          fileUrl: "",
          isFileRequired: item.isFileRequired,
          allowedFileTypes: item.allowedFileTypes || []
        }))
      )
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit
  });

  const handleSubmit = (contactDetails: any) => {
  const groupedMaterials: any[] = [];
  let flatIndex = 0;

  for (const section of materialsData) {
    const selectedItems = [];
    const values = formik.values;

    for (const item of section.items) {
      const formItem = values.materials[flatIndex];
      if (formItem.checked) {
        selectedItems.push({
          material: formItem.material,
          grade: formItem.grade,
          unit: formItem.unit,
          quantity: formItem.quantity,
          brand: formItem.brand,
          fileUrl: formItem.fileUrl || null
        });
      }
      flatIndex++;
    }

    if (selectedItems.length > 0) {
      groupedMaterials.push({
        section: section.section,
        items: selectedItems
      });
    }
  }

  const data = { groupedMaterials, contactDetails}
  console.log(JSON.stringify(data, null, 2));

}

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={formik.handleSubmit} className="p-4">
          {materialsData.map((section, sectionIndex) => (
            <div key={section.section} className="mb-6">
              <h2 className="text-xl font-bold text-blue-700 mb-2">{section.section}</h2>
              <table className="w-full table-auto border border-blue-200">
                <thead>
                  <tr className="bg-blue-100 text-blue-800">
                    <th className="p-2 border">Select</th>
                    <th className="p-2 border">Material</th>
                    <th className="p-2 border">Unit</th>
                    <th className="p-2 border">Grade</th>
                    <th className="p-2 border">Quantity</th>
                    <th className="p-2 border">Brand</th>
                    <th className="p-2 border">File Upload</th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item, index) => {
                    const globalIndex = materialsData.slice(0, sectionIndex).reduce((acc, curr) => acc + curr.items.length, 0) + index;
                    const formItem = formik.values.materials[globalIndex];
                    const error = formik.errors.materials?.[globalIndex] as FormikErrors<typeof formik.values.materials[number]> | undefined;
                    const touched = formik.touched.materials?.[globalIndex] as typeof formik.touched.materials[number] | undefined;
                    return (
                      <tr key={index} className="border">
                        <td className="p-2 border text-center">
                          <input
                            type="checkbox"
                            name={`materials[${globalIndex}].checked`}
                            checked={formItem.checked}
                            onChange={formik.handleChange}
                          />
                        </td>
                        <td className="p-2 border">{item.material}</td>
                        <td className="p-2 border">{item.unit}</td>
                        <td className="p-2 border">
                          <input
                            type="text"
                            name={`materials[${globalIndex}].grade`}
                            value={formItem.grade}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={!formItem.checked}
                            className="border rounded p-1 w-full"
                          />
                        </td>
                        <td className="p-2 border">
                          <input
                            type="number"
                            name={`materials[${globalIndex}].quantity`}
                            value={formItem.quantity}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={!formItem.checked}
                            className={`border rounded p-1 w-full ${touched?.quantity && error?.quantity ? "border-red-500" : ""}`}
                          />
                          {touched?.quantity && error?.quantity && (
                            <div className="text-red-500 text-sm">{error.quantity}</div>
                          )}
                        </td>
                        <td className="p-2 border">
                          <input
                            type="text"
                            name={`materials[${globalIndex}].brand`}
                            value={formItem.brand}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={!formItem.checked}
                            className="border rounded p-1 w-full"
                          />
                        </td>
                        <td className="p-2 border">
                          {formItem.isFileRequired && (
                            <div className="flex flex-col">
                              <input
                                type="file"
                                name={`materials[${globalIndex}].file`}
                                accept={formItem.allowedFileTypes?.join(',')}
                                onChange={e => {
                                  const file = e.currentTarget.files?.[0] || null;
                                  const allowedTypes = formItem.allowedFileTypes;
                                  if (file) {
                                    if (allowedTypes.includes(file.type)) {
                                      formik.setFieldValue(`materials[${globalIndex}].fileUrl`, file.name);
                                      formik.setFieldError(`materials[${globalIndex}].fileUrl`, ""); // clear previous error
                                    } else {
                                      console.log("hr");
      
                                      const errorMessage = "Invalid file type. Only PDF, Word, JPG, or PNG allowed.";
                                      alert(errorMessage);
                                      e.target.value = '';
                                      formik.setFieldValue(`materials[${globalIndex}].fileUrl`, "");
                                    }
                                  }
                                }}
                                disabled={!formItem.checked}
                                className="w-full"
                              />
                              {formItem.fileUrl && (
                                <div className="text-sm text-gray-600 mt-1">Selected: 
                                  <a href={formItem.fileUrl}>{formItem.fileUrl}</a>
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
          <div className="text-center">
            <button 
              type="button"
              onClick={() => setIsModelOpen(true)} 
              className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Submit</button>
          </div>
        </form>
      </div>
      <LetsConnect 
        isOpen={isModelOpen}
        onClose={() => {setIsModelOpen(false)}}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ConstructionMaterialsForm;
