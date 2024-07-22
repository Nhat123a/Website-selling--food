import axios from "axios";
//  Call api provinces
//  Tỉnh thành
export const CallApiprovinces = async () => {
  try {
    const response = await axios.get("https://esgoo.net/api-tinhthanh/1/0.htm");
    return response.data;
  } catch (error) {
    console.log("Lỗi :", error);
    throw error;
  }
};
export const CallApidistrics = async (provinceId) => {
  try {
    const response = await axios.get(
      `https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const CallApiward = async (districsID) => {
  try {
    const response = await axios.get(
      `https://esgoo.net/api-tinhthanh/3/${districsID}.htm`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
