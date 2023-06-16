describe("Form Tests", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("İnputa bir metin giren test", function () {
    const acıktım = cy.get("[ data-cy=acıktım]").click();
    const isim = cy.get("[ data-cy=isim]").click();
    const metin = isim.type("İhsan");
    metin.first().should("have.value", "İhsan");
  });

  it("Birden fazla malzeme seçebilen bir test", function () {
    const acıktım = cy.get("[ data-cy=acıktım]").click();
    const malzeme1 = cy.get("[ data-cy=malzeme1]").click();
    const malzeme2 = cy.get("[ data-cy=malzeme2]").click();
    const malzeme3 = cy.get("[ data-cy=malzeme3]").click();
  });

  it("İsim inputuna eksik karakter girildiğinde sipariş et butonu disabled olucak mı?", function () {
    const acıktım = cy.get("[ data-cy=acıktım]").click();
    const isim = cy.get("[ data-cy=isim]").click();
    const metin = isim.type("İ");

    const dropdown = cy.get("select").select("İnce");
    const radio = cy.get("[ data-cy=büyük]").click();

    const buton = cy.get("[ data-cy=buton]").should("be.disabled");
  });

  it("İsim yanlış girildiğinde hata mesajı çıkıyor mu ve mesaj metni doğru mu?", function () {
    const acıktım = cy.get("[ data-cy=acıktım]").click();
    const isim = cy.get("[ data-cy=isim]").click();
    const metin = isim.type("İ");

    const hata = cy.get("[ data-cy=hata]");
    hata.should("be.visible");

    hata.should("have.text", "Lütfen isminizi doğru giriniz!");
  });
});
