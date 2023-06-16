import React, { useEffect } from "react";
import "./Form.css";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Form = () => {
  const [ınformatıons, setInformatıons] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    malzeme1: "",
    malzeme2: "",
    malzeme3: "",
    malzeme4: "",
    malzeme5: "",
    malzeme6: "",
    not: "",
  });

  const [ınformatıonErrs, setInformatıonErrs] = useState({
    isim: "",
    boyut: "",
    hamur: "",
  });

  const ınformatıonsFormSchema = Yup.object().shape({
    isim: Yup.string()
      .trim()
      .required("Lütfen adınızı giriniz!")
      .min(2, "Lütfen isminizi doğru giriniz!"),
    boyut: Yup.string().required("Lütfen bir pizza boyutu seçiniz"),
    hamur: Yup.string().required("Lütfen hamur tipini seçiniz"),
    not: Yup.string(),
  });

  const [valid, setValid] = useState(false);
  const [dataIn, setDataIn] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (valid) {
      axios
        .post("https://reqres.in/api/users", ınformatıons)
        .then((response) => setDataIn([...dataIn, response.data]));
    }
    console.log(ınformatıons);
    setInformatıons({
      isim: "",
      boyut: "",
      hamur: "",
      malzeme1: "",
      malzeme2: "",
      malzeme3: "",
      malzeme4: "",
      malzeme5: "",
      malzeme6: "",
      not: "",
    });
  };
  console.log(dataIn);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    Yup.reach(ınformatıonsFormSchema, name)
      .validate(value)
      .then((vld) => {
        setInformatıonErrs({ ...ınformatıonErrs, [name]: "" });
      })
      .catch((err) => {
        setInformatıonErrs({ ...ınformatıonErrs, [name]: err.errors[0] });
      });

    setInformatıons({ ...ınformatıons, [name]: value });
  };

  const checkChangeHandler = (e) => {
    const { name, checked } = e.target;

    setSeçimler(seçimler + 5);
    setFiyat(fiyat + 5);
    setInformatıons({ ...ınformatıons, [name]: checked });
    console.log(checked);
  };

  useEffect(() => {
    ınformatıonsFormSchema.isValid(ınformatıons).then((vld) => setValid(vld));
  }, [ınformatıons]);

  const [fiyat, setFiyat] = useState(0);
  const [seçimler, setSeçimler] = useState(0);
  const [adet, setAdet] = useState(0);

  const arttırıcı = () => {
    setAdet(adet + 1);
    setFiyat(fiyat + 85.5);
  };

  const azaltıcı = () => {
    if (adet != 0) {
      setAdet(adet - 1);
      setFiyat(fiyat - 85.5);
    }
  };
  return (
    <div className="pizza-form ">
      <div>
        <h3>Position Absolute Acı Pizza</h3>
        <strong>85.50 ₺</strong>
        <p>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu acı pizza
          tam sana göre.Pizza, domates,peynir ve genellikle çesşitli
          malzemelerle kaplanmış daha sonra geleneksel olarak odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <form
        onSubmit={submitHandler}
        action="http://localhost:3000/pizza/siparisim"
      >
        <div className="boyut-hamur">
          <div className="boyut">
            <h3>
              Boyut Seç <span>*</span>
            </h3>
            <label>
              <input
                type="radio"
                id="size-dropdown"
                name="boyut"
                value="Küçük"
                onChange={changeHandler}
              />
              Küçük
            </label>
            <br />
            <label>
              <input
                type="radio"
                id="size-dropdown"
                name="boyut"
                value="Orta"
                onChange={changeHandler}
              />
              Orta
            </label>
            <br />
            <label>
              <input
                data-cy="büyük"
                type="radio"
                id="size-dropdown"
                name="boyut"
                value="Büyük"
                onChange={changeHandler}
              />
              Büyük
            </label>
          </div>

          <div className="hamur">
            <h3>
              Hamur Seç <span>*</span>
            </h3>
            <label>
              <select
                id="size-dropdowntwo"
                name="hamur"
                onChange={changeHandler}
              >
                <option disabled selected>
                  Lütfen seçim yapınız
                </option>
                <option value="Normal">Normal</option>
                <option value="İnce">İnce</option>
                <option value="Süper İnce">Süper İnce</option>
              </select>
            </label>
          </div>
        </div>
        <div className="malzeme">
          <h3>Ek Malzemeler</h3>
          <p>En fazla 6 malzeme seçebilirsiniz. 5₺</p>
          <div className="malzemeler">
            <label>
              Pepperoni
              <input
                data-cy="malzeme1"
                type="checkbox"
                id="malzeme"
                name="malzeme1"
                checked={ınformatıons.malzeme1}
                onChange={checkChangeHandler}
              />
            </label>
            <label>
              Sosis
              <input
                data-cy="malzeme2"
                type="checkbox"
                id="malzeme"
                name="malzeme2"
                checked={ınformatıons.malzeme2}
                onChange={checkChangeHandler}
              />
            </label>
            <label>
              Sucuk
              <input
                data-cy="malzeme3"
                type="checkbox"
                id="malzeme"
                name="malzeme3"
                checked={ınformatıons.malzeme3}
                onChange={checkChangeHandler}
              />
            </label>
            <label>
              Mısır
              <input
                type="checkbox"
                id="malzeme"
                name="malzeme4"
                checked={ınformatıons.malzeme4}
                onChange={checkChangeHandler}
              />
            </label>
            <label>
              Zeytin
              <input
                type="checkbox"
                id="malzeme"
                name="malzeme5"
                checked={ınformatıons.malzeme5}
                onChange={checkChangeHandler}
              />
            </label>
            <label>
              Domates
              <input
                type="checkbox"
                id="malzeme"
                name="malzeme6"
                checked={ınformatıons.malzeme6}
                onChange={checkChangeHandler}
              />
            </label>
          </div>
        </div>
        <div className="name-not-input">
          <label>
            <h3>
              İsim: <span>*</span>
            </h3>
            <input
              data-cy="isim"
              type="text"
              id="name-input"
              name="isim"
              value={ınformatıons.isim}
              onChange={changeHandler}
              placeholder="Lütfen isminizi giriniz."
            />
          </label>
          {ınformatıonErrs.isim !== "" && (
            <div data-cy="hata" className="error">
              {ınformatıonErrs.isim}
            </div>
          )}
        </div>
        <label>
          <h3>Sipariş notu:</h3>
          <input
            type="text"
            id="special-text"
            name="not"
            value={ınformatıons.not}
            onChange={changeHandler}
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
          />
        </label>
        <div className="sepete-ekle">
          <div className="arttır-azalt">
            <button id="azaltıcı" onClick={azaltıcı}>
              -
            </button>
            <div id="adet">{adet}</div>
            <button id="arttırıcı" onClick={arttırıcı}>
              +
            </button>
          </div>
          <div className="button-div">
            <div className="fiyat">
              <div className="sipariş-toplamı">
                <h3>Sipariş Toplamı:</h3>
                <div>
                  <h4>Seçimler:</h4>
                  <h4>{seçimler}</h4>
                </div>
                <div>
                  <h4 style={{ color: "red" }}>Toplam:</h4>
                  <h4 style={{ color: "red" }}>{fiyat}₺</h4>
                </div>
              </div>
            </div>
            <NavLink to="/pizza/siparisim" exact>
              <button
                data-cy="buton"
                id="button"
                type="submit"
                disabled={!valid}
              >
                SİPARİŞ VER
              </button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
