// function getText() {
//   const datas = []
//   $.each($('#ctl00_ContentPlaceHolder_UpdatePanelDefault')
//          .children('table')
//          .eq(1).find('td'), (i, item) => {
//     const text = $(item).text().trim()
//     datas.push(text)
//   })
//   return JSON.stringify(datas);
// }
const ProductWiseTollCenterList = [
  "Custom Bonded WH Bangalore (MIPL) [ 62C9 ]",
  "AC Millex 25mm Durapore PVDF .45um [ 000000900000006845 ] <br /><span style=color:Green> [ SLHVDZ5NK ] </span>",
  "Custom Bonded WH Bangalore (MIPL) [ 62C9 ]",
  "Sterile XL 10 Durapore 0.22um TC|TC 1pk [ 000000900000041257 ] <br /><span style=color:Green> [ KVGLS10TT1 ] </span>",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 CN 10MYM CART250-4 [ 1.50845.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 CN 5MYM CART125-4 1 UNIT [ 1.50825.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 CN 5MYM CART250-4 1 UNIT [ 1.50892.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 CN 5MYM CART4-4 10 UNITS [ 1.50959.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 DIOL 5MYM CART125-4 [ 1.50826.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 DIOL 5MYM CART250-4 [ 1.50836.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 DIOL 5MYM CART4-4 10 UNITS [ 1.50960.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 NH2 10MYM CART250-4 [ 1.50844.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 NH2 5MYM CART125-4 [ 1.50824.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 NH2 5MYM CART25-4 3 UNITS [ 1.50932.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 NH2 5MYM CART250-4 [ 1.50834.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 NH2 5MYM CART4-4 10 UNITS [ 1.50958.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 10MYM CART250-4 [ 1.50843.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART100-4.6 [ 1.50600.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART125-3 [ 1.50159.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART125-4 [ 1.50823.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART125-4 [ 1.50943.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART150-4.6 [ 1.50601.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART25-4 [ 1.50931.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART250-3 [ 1.50154.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART250-4 [ 1.50833.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART250-4 [ 1.50983.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART250-4.6 [ 1.50602.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART4-4 10 UNITS [ 1.50957.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM CART75-4 [ 1.50987.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM HI-RT100-4.6 [ 1.50545.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM HI-RT125-4 [ 1.50477.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM HI-RT150-4.6 [ 1.50546.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM HI-RT250-4 [ 1.50377.0001 ]",
  "CWH Shirwane [ 62MW ]",
  "LISPHER100 RP18 5MYM HI-RT250-4.6 [ 1.50547.0001 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "A 1 Broth (A 1 Medium) for m 100 G [ 000061932401001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "A 1 Broth (A 1 Medium) for m 500 G [ 000061932405001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Actinomyces Agar for microbi 500 G [ 000061939505001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Agar agar for microbiology 25 KG [ 000061931290261730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Agar agar for microbiology 5 KG [ 000061931250001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Agar agar for microbiology 500 G [ 000061931205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Agar agar purified for Micro 5 KG [ 000061939050001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Agar agar purified for Micro 500 G [ 000061939005001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Agar agar, technical for mic 5 KG [ 000061950450001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Agar agar, technical for mic 500 G [ 000061950405001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Alkaline Peptone Water for microbiology [ 000061932501001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Alkaline Peptone Water for microbiology [ 000061932505001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Alternative Thioglycollate Medium (NIH T [ 000061939705001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Anaerobic Agar for microbiol 100 G [ 000061932601001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Anaerobic Agar for microbiol 500 G [ 000061932605001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Antibiotic Assay Medium No. 500 G [ 000061939805001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Asparagine Proline Broth for 500 G [ 000061940205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Azide Dextrose Broth for mic 500 G [ 000061940305001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "B.Q. Vaccine Medium (Thiogly 500 G [ 000061940505001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Baird- Parker Agar Medium for microbiolo [ 000061952001001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Baird- Parker Agar Medium for microbiolo [ 000061952005001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Baird-Parker Agar, Base for 100 G [ 000061932801001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Baird-Parker Agar, Base for 500 G [ 000061932805001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Beef Extract Agar for microb 100 G [ 000061932901001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Beef Extract Agar for microb 500 G [ 000061932905001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Beef extract powder for microbiology [ 000061931605001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Bile Esculin Agar for microb 500 G [ 000061940605001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Bismuth Sulfite Agar for mic 100 G [ 000061933001001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Bismuth Sulfite Agar for mic 500 G [ 000061933005001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Blood Agar, Base (Infusion A 100 G [ 000061933101001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Blood Agar, Base (Infusion A 500 G [ 000061933105001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Blood Agar, Base No. 2 for m 100 G [ 000061933201001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Blood Agar, Base No. 2 for m 500 G [ 000061933205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brain Heart Infusion Agar fo 100 G [ 000061933301001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brain Heart Infusion Agar fo 500 G [ 000061933305001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brain Heart Infusion Broth f 100 G [ 000061940701001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brain Heart Infusion Broth f 500 G [ 000061940705001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brain heart Infusion powder for microbio [ 000061931405001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brewer Thioglycollate Medium 500 G [ 000061940805001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brilliant Green Agar for mic 100 G [ 000061940901001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brilliant Green Agar for mic 500 G [ 000061940905001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brilliant Green Bile Broth - 100 G [ 000061941001001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Brilliant Green Bile Broth - 500 G [ 000061941005001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Bromocresol Purple Azide Bro 500 G [ 000061941105001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Buffered Enrichment Broth, (for Listeri [ 000061950805001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Buffered Peptone Water for m 100 G [ 000061933401001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Buffered Peptone Water for m 500 G [ 000061933405001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Buffered Sodium Chloride Pep 500 G [ 000061941205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Calf brain infusion powder f 500 G [ 000061932205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Cetrimide Agar, Base for mic 100 G [ 000061933501001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Cetrimide Agar, Base for mic 500 G [ 000061933505001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Cetrimide Broth for microbio 500 G [ 000061941405001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Chloramphenicol Yeast Glucos 100 G [ 000061933601001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Chloramphenicol Yeast Glucos 500 G [ 000061933605001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "CLED Agar for microbiology 100 G [ 000061941301001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "CLED Agar for microbiology 500 G [ 000061941305001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "CN Supplement [ 000061948700051730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Coli-Dtect [ 000061874700011730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Columbia Agar, Base for micr 100 G [ 000061933701001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Columbia Agar, Base for micr 500 G [ 000061933705001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Czapek Dox Agar for microbio 500 G [ 000061949905001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Demi- Fraser Broth, Base for [ 000061951005001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Deoxycholate Agar for microb 100 G [ 000061933801001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Deoxycholate Agar for microb 500 G [ 000061933805001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Deoxycholate Citrate Agar fo 100 G [ 000061933901001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Deoxycholate Citrate Agar fo 500 G [ 000061933905001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Dey Engley Neutralizing Agar 500 G [ 000061950105001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Dey Engley Neutralizing Agar for microbi [ 000061950150001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Dey Engley Neutralizing Brot 500 G [ 000061950205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EC Broth for microbiology 100 G [ 000061934001001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EC Broth for microbiology 500 G [ 000061934005001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EE Broth, Mossel for microbi [ 000061953201001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EE Broth, Mossel for microbi 500 G [ 000061942005001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EE Broth, Mossel for microbi 500 G [ 000061953205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Egg Yolk Tellurite Emulsion [ 000061947100051730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EMB Agar (Eosin Methylene Bl 100 G [ 000061934101001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EMB Agar (Eosin Methylene Bl 500 G [ 000061934105001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EMB Agar, Levine for microbi 100 G [ 000061934201001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "EMB Agar, Levine for microbi 500 G [ 000061934205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "ENDO Agar for microbiology 100 G [ 000061934301001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "ENDO Agar for microbiology 500 G [ 000061934305001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Fluid Thioglycollate Medium [ 000061934450001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Fluid Thioglycollate Medium 100 G [ 000061934401001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Fluid Thioglycollate Medium 500 G [ 000061934405001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Fraser Broth, Base for micro 500 G [ 000061942105001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Fraser Selective Supplement [ 000061947400051730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Gelatine peptone for microbi 500 G [ 000061930605001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Gentamycin - Oxytetracycline Selective S [ 000061948200051730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Glucose Yeast Extract Agar f 100 G [ 000061934601001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Glucose Yeast Extract Agar f 500 G [ 000061934605001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "GLYCEROL TRIBUTYRATE (TRIBUTYRIN) FOR BI [ 000010195805001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "GN Broth, Hajna for microbiology [ 000061934501001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "GN Broth, Hajna for microbiology [ 000061934505001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "H2S Bacteriological test kit [ 000061869400011730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Heart Infusion Agar for micr 100 G [ 000061934701001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Heart infusion powder for microbiology [ 000061931505001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Hektoen Enteric Agar for mic 100 G [ 000061934801001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Hektoen Enteric Agar for mic 500 G [ 000061934805001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Kgligler Iron Agar for micro 100 G [ 000061934901001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Kgligler Iron Agar for micro 500 G [ 000061934905001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Lactobacillus MRS Agar for m 100 G [ 000061935001001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Lactobacillus MRS Agar for m 500 G [ 000061935005001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Lactobacillus MRS Broth for 500 G [ 000061942405001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Lactose Broth for microbiolo 100 G [ 000061935101001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Lactose Broth for microbiolo 500 G [ 000061935105001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Lauryl Sulfate Broth (Lauryl 100 G [ 000061935201001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Lauryl Sulfate Broth (Lauryl 500 G [ 000061935205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "LB Agar, Miller (Luria Berta 500 G [ 000061942205001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "LB Broth, Miller (Luria Bert 500 G [ 000061942305001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Leifson`s Deoxycholate Agar, 500 G [ 000061942505001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Letheen Agar, Modified for m 500 G [ 000061942605001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Letheen Broth, for microbiol 500 G [ 000061942705001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Linden Grain Medium for micr 5 KG [ 000061954950001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Listeria Identification Agar 100 G [ 000061942801001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Listeria Identification Agar 500 G [ 000061942805001730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Listeria Moxalactum Supplement [ 000061948000051730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Listeria UVM  Supplement  II [ 000061948600051730 ]",
  "Dehydrated Culture Media-Goa [ 62A3 ]",
  "Listeria UVM  Supplement I [ 000061948500051730 ]"
]


export const getList = (query?: AnyObject): Promise<{
  rows: any[],
  total: number
}> => {
  let data: AnyObject[] = [];
  ProductWiseTollCenterList.forEach((d, i) => {
    const ind = Math.floor(i / 2);
    if (!data[ind]) {
      data[ind] = {}
    }
    if (i % 2) {
      data[ind].products = d
    } else {
      data[ind].tollCenter = d
    }

  })
  const pageNum = query?.pageNum || 1
  const pageSize = query?.pageSize || 10
  const name = query?.name || ''
  const tollCenter = query?.tollCenter || ''
  return new Promise((res) => {
    setTimeout(() => {
      if (name) {
        data = data.filter(d => d.products.includes(name));
      }
      if (tollCenter) {
        data = data.filter(d => d.tollCenter.includes(tollCenter));
      }
      const list = data.slice((pageNum - 1) * pageSize, (pageNum - 1) * pageSize + pageSize);
      res({
        total: data.length,
        rows: list
      })
    }, 800)
  })
}