import { memo, useEffect, useState } from "react";
import { CallApiprovinces, CallApidistrics } from "../../../API/callApi";
const ShopSystem = () => {
  const dataCard = [
    {
      ID: 1,
      Name: "Fruit Hà Nội",
      location: "Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội",
      Phone: "1900 6750",
    },
    {
      ID: 2,
      Name: "Fruit Thanh Xuân",
      location: "126Nguyễn Trãi, Phường Hạ Đình, Quận Thanh Xuân, Hà Nội",
      Phone: "1900 6750",
    },
    {
      ID: 3,
      Name: "Fruit Đà Nẵng",
      location:
        "181 đường Huỳnh Tấn Phát, Phường Hoà Cường Nam, Quận Hải Châu, TP Đà Nẵng",
      Phone: "1900 6750",
    },
    {
      ID: 4,
      Name: "Fruit Hồ Chí Minh",
      location: "Tầng 3, 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh",
      Phone: "1900 6750",
    },
    {
      ID: 5,
      Name: "Fruit Hải Dương",
      location: "15 Phường Hải Tân, Hải dương",
      Phone: "1900 6750",
    },
  ];
  const [cities, setCities] = useState([]);
  const [District, setDistrict] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  //  Call api tỉnh thành
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const result = await CallApiprovinces();
        if (result.error === 0) {
          const filteredCities = result.data.filter((x) =>
            ["Hà Nội", "Hải Dương", "Hồ Chí Minh", "Đà Nẵng"].includes(x.name)
          );
          //   console.log("Filtered Cities:", filteredCities);
          //   console.log(cities);
          setCities(filteredCities);
        } else {
          setError(result.error_text);
        }
      } catch (error) {
        setError("Error fetching data");
      }
    };
    fetchCities();
  }, []);
  //  Call api huyện
  const extractDistricts = (location) => {
    const match = location.match(/Quận\s(.+?)\,/);
    return match ? match[1] : null;
  };
  const fetchDistrict = async (provinceId) => {
    try {
      const result = await CallApidistrics(provinceId);
      if (result.error === 0) {
        // Get the district names from dataCard for the selected city
        const districtsFromDataCard = dataCard
          .filter((item) =>
            item.location.includes(
              cities.find((city) => city.id === provinceId)?.name
            )
          )
          .map((item) => extractDistricts(item.location));

        // Filter districts from API response based on the districts in dataCard
        const filteredDistricts = result.data.filter((district) =>
          districtsFromDataCard.includes(district.full_name)
        );
        setDistrict(filteredDistricts);
      } else {
        setError(result.error_text);
      }
    } catch (error) {
      setError("Error fetching data");
    }
  };
  const handleCityChange = (event) => {
    const selectedCityId = event.target.value;
    setSelectedCity(selectedCityId);
    if (selectedCityId) {
      fetchDistrict(selectedCityId);
      setSelectedDistrict(""); // Reset selected district when city changes
    } else {
      setDistrict([]); // Clear districts when no city is selected
    }
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="container">
      <div className="py-8 flex items-start justify-between gap-5">
        <div className="Option bg-green w-full flex-[4_4_0%] h-full">
          <div className="group_city w-full p-3">
            <select
              className="w-full p-2 outline-none"
              onChange={handleCityChange}
            >
              <option value="">Chọn tỉnh thành</option>
              {cities.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div className="group_city w-full px-3 ">
            <select
              className="w-full p-2 outline-none"
              disabled={!selectedCity}
              onChange={handleDistrictChange}
            >
              <option value="">Chọn quận/huyện</option>
              {setSelectedCity &&
                District.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.full_name}
                  </option>
                ))}
            </select>
          </div>
          {dataCard.map((data) => (
            <div
              key={data.ID}
              className="Card_info p-2 bg-white cursor-pointer border hover:bg-yellow hover:text-white border-yellow rounded m-3 leading-7 group"
            >
              <h2 className="text-green font-semibold group-hover:text-white">
                {data.Name}
              </h2>
              <div className="location">
                <b className="font-bold group-hover:text-white">Địa chỉ: </b>
                <span className="group-hover:text-white">{data.location}</span>
              </div>
              <div className="Phone">
                <b className="font-bold group-hover:text-white">Hotline: </b>
                <span className="text-green group-hover:text-white">
                  {data.Phone}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="Map  w-full flex-[8_8_0%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5307186221867!2d106.65485467451717!3d10.77060435930216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec1e37ff45d%3A0xcab439a08d20421a!2zMyDEkC4gTOG7ryBHaWEsIFBoxrDhu51uZyAxNSwgUXXhuq1uIDExLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1722347808147!5m2!1svi!2s"
            width="100%"
            height="550"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default memo(ShopSystem);
