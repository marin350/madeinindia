// DATA
const data = [
    {
      "#": 1,
      "Img": "imgs/01.webp",
      "Color": "Red",
      "Weave": "Banarasi (Khadwa)",
      "Type": "Banarasi",
      "Notes": "20th anniversary",
      "Occasion": "Anniversary"
    },
    {
      "#": 2,
      "Img": "imgs/02.webp",
      "Color": "Blue",
      "Weave": "Banarasi (Cutwork on Georgette)",
      "Type": "Banarasi",
      "Notes": "bought on a visit to India, wanted to get a georgette buti banarasi",
      "Occasion": "Misc"
    },
    {
      "#": 3,
      "Img": "imgs/03.webp",
      "Color": "Brown",
      "Weave": "Banarasi (Khadwa)",
      "Type": "Banarasi",
      "Notes": "Bought directly from a weaver, loved the butis when the weaver sent pictures",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 4,
      "Img": "imgs/04.webp",
      "Color": "Brown",
      "Weave": "Banarasi (Khadwa Jangla)",
      "Type": "Banarasi",
      "Notes": "bought for 45th birthday",
      "Occasion": "Birthday"
    },
    {
      "#": 5,
      "Img": "imgs/05.webp",
      "Color": "Pink",
      "Weave": "Banarasi (Khadwa Jaal)",
      "Type": "Banarasi",
      "Notes": "bought for either a birthday or anniversary occasion",
      "Occasion": "Birthday"
    },
    {
      "#": 6,
      "Img": "imgs/06.webp",
      "Color": "Yellow",
      "Weave": "Banarasi (Shikargah)",
      "Type": "Banarasi",
      "Notes": "Bought for Haldi ceremony as part of a family wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 7,
      "Img": "imgs/07.webp",
      "Color": "Pink",
      "Weave": "Banarasi (Cutwork)",
      "Type": "Banarasi",
      "Notes": "Bought for 18th weddign anniversary and worn on my 16th birthday",
      "Occasion": "Anniversary"
    },
    {
      "#": 8,
      "Img": "imgs/08.webp",
      "Color": "Blue",
      "Weave": "Banarasi (Rankaat)",
      "Type": "Banarasi",
      "Notes": "Bought for another event as part of a family wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 9,
      "Img": "imgs/09.webp",
      "Color": "Red",
      "Weave": "Banarasi (Meenakari)",
      "Type": "Banarasi",
      "Notes": "Bought directly from the weaver, loved the border design and wore it at a family friend's housewarming",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 10,
      "Img": "imgs/010.webp",
      "Color": "Pink",
      "Weave": "Banarasi (Bandhani dyeing on top of Georgette)",
      "Type": "Banarasi",
      "Notes": "Wore it for my cousin's baby shower.",
      "Occasion": "Misc"
    },
    {
      "#": 11,
      "Img": "imgs/011.webp",
      "Color": "Red",
      "Weave": "Banarasi on Georgette",
      "Type": "Banarasi",
      "Notes": "Bought for a wedding anniversary",
      "Occasion": "Anniversary"
    },
    {
      "#": 12,
      "Img": "imgs/012.webp",
      "Color": "Orange",
      "Weave": "Banarasi (Jangla) on georgette",
      "Type": "Banarasi",
      "Notes": "Bought for a festival or pooja",
      "Occasion": "Pooja"
    },
    {
      "#": 13,
      "Img": "imgs/013.webp",
      "Color": "Pink",
      "Weave": "Banarasi on Tusser Silk",
      "Type": "Banarasi",
      "Notes": "Worn at a pooja event",
      "Occasion": "Pooja"
    },
    {
      "#": 14,
      "Img": "imgs/014.webp",
      "Color": "Blue",
      "Weave": "Banarasi Tissue Brocade/Tanchoi",
      "Type": "Banarasi",
      "Notes": "Bought for the sangeekt event at a family wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 15,
      "Img": "imgs/015.webp",
      "Color": "Purple",
      "Weave": "Banarasi Meenakari Cutwork",
      "Type": "Banarasi",
      "Notes": "Worn for 25th wedding anniversary but bought for 47th birthday",
      "Occasion": "Anniversary"
    },
    {
      "#": 16,
      "Img": "imgs/016.webp",
      "Color": "Yellow",
      "Weave": "Pichwai Print and on Banarasi",
      "Type": "Banarasi",
      "Notes": "Worn at my cousin's Haldi",
      "Occasion": "Wedding"
    },
    {
      "#": 17,
      "Img": "imgs/017.webp",
      "Color": "Brown",
      "Weave": "Banarasi Tanchoi",
      "Type": "Banarasi",
      "Notes": "My Great Aunt's sari given to my Mother .",
      "Occasion": "Heirloom"
    },
    {
      "#": 18,
      "Img": "imgs/018.webp",
      "Color": "Purple",
      "Weave": "Banarasi Organza",
      "Type": "Banarasi",
      "Notes": "Handwoven sari with machine embroidery on top",
      "Occasion": "Misc"
    },
    {
      "#": 19,
      "Img": "imgs/019.webp",
      "Color": "Pink",
      "Weave": "Banarasi Organza",
      "Type": "Banarasi",
      "Notes": "Handwoven sari with machine embroidery on top",
      "Occasion": "Misc"
    },
    {
      "#": 20,
      "Img": "imgs/020.webp",
      "Color": "Blue",
      "Weave": "Banarasi (Khadwa + Cutwork)",
      "Type": "Banarasi",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 21,
      "Img": "imgs/021.webp",
      "Color": "Green",
      "Weave": "Narayanpet silk with Bhandhani print",
      "Type": "Narayanpet",
      "Notes": "Bought with money given to my Mother  by my Great-Grandmother",
      "Occasion": "Gift"
    },
    {
      "#": 22,
      "Img": "imgs/022.webp",
      "Color": "Green",
      "Weave": "Narayanpet silk",
      "Type": "Narayanpet",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 23,
      "Img": "imgs/023.webp",
      "Color": "Purple",
      "Weave": "Paithani",
      "Type": "Paithani",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 24,
      "Img": "imgs/024.webp",
      "Color": "Green",
      "Weave": "Paithani",
      "Type": "Paithani",
      "Notes": "Gifted to my Mother by my Grandmother for her 40th birthday",
      "Occasion": "Gift"
    },
    {
      "#": 25,
      "Img": "imgs/025.webp",
      "Color": "Purple",
      "Weave": "Paithani (Maharani Paithani)",
      "Type": "Paithani",
      "Notes": "Gifted to my Mother by her friend, brought from Pune, India",
      "Occasion": "Gift"
    },
    {
      "#": 26,
      "Img": "imgs/026.webp",
      "Color": "Blue",
      "Weave": "Kota Doria",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver in Rajasthan.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 27,
      "Img": "imgs/027.webp",
      "Color": "Black",
      "Weave": "Kota Doria",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver named Azhar Ansari. His instagram is Nasruddin's Doria Ventures.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 28,
      "Img": "imgs/028.webp",
      "Color": "Orange",
      "Weave": "Kota Doria",
      "Type": "Kota",
      "Notes": "Bought directly from Azhar Ansari. The color is my Mother 's favorite shade of yellow. The official government mark of authenticity for Kota saris can be seen in the top right corner.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 29,
      "Img": "imgs/029.webp",
      "Color": "White",
      "Weave": "Kota Doria",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver named Azhar Ansari. My Mother bought because of her love for the mango/paisley design.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 30,
      "Img": "imgs/030.webp",
      "Color": "Yellow",
      "Weave": "Kota",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver named Azhar Ansari.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 31,
      "Img": "imgs/031.webp",
      "Color": "White",
      "Weave": "Kota",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver named Azhar Ansari. My Mother wore it for my cousin's half-sari function.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 32,
      "Img": "imgs/032.webp",
      "Color": "Pink",
      "Weave": "Kota",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver named Azhar Ansari.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 33,
      "Img": "imgs/033.webp",
      "Color": "Gray",
      "Weave": "Kota",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver named Azhar Ansari. Gifted to my Mother by her friend.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 34,
      "Img": "imgs/034.webp",
      "Color": "Yellow",
      "Weave": "Kota",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver named Azhar Ansari.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 35,
      "Img": "imgs/035.webp",
      "Color": "Blue",
      "Weave": "Kota",
      "Type": "Kota",
      "Notes": "Bought directly from a weaver named Azhar Ansari. My Mother 's friend bought the same sari after seeing her wear it.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 36,
      "Img": "imgs/036.webp",
      "Color": "Orange",
      "Weave": "Kota",
      "Type": "Kota",
      "Notes": "Bought directly from Azhar Ansari. My Mother wore it at her cousin's wedding",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 37,
      "Img": "imgs/037.webp",
      "Color": "Green",
      "Weave": "Kota",
      "Type": "Kota",
      "Notes": "Bought directly from Azhar Ansari. My Mother wore it at her cousin's wedding",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 38,
      "Img": "imgs/038.webp",
      "Color": "Blue",
      "Weave": "Gadwal",
      "Type": "Gadwal",
      "Notes": "My Uncle bought it for my Mother as part of my Grandmother 's death ceremony—it's a ritual to buy new clothes and present them.",
      "Occasion": "Gift"
    },
    {
      "#": 39,
      "Img": "imgs/039.webp",
      "Color": "Black",
      "Weave": "Gadwal",
      "Type": "Gadwal",
      "Notes": "My Mother wore it for my high school graduation",
      "Occasion": "Misc"
    },
    {
      "#": 40,
      "Img": "imgs/040.webp",
      "Color": "Brown",
      "Weave": "Gadwal",
      "Type": "Gadwal",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 41,
      "Img": "imgs/041.webp",
      "Color": "Purple",
      "Weave": "Gadwal",
      "Type": "Gadwal",
      "Notes": "Bought as a gift for my Mother by her Grandmother .",
      "Occasion": "Gift"
    },
    {
      "#": 42,
      "Img": "imgs/042.webp",
      "Color": "Blue",
      "Weave": "Chanderi",
      "Type": "Chanderi",
      "Notes": "Wore it for Dussehra celebration at home.",
      "Occasion": "Pooja"
    },
    {
      "#": 43,
      "Img": "imgs/043.webp",
      "Color": "Blue",
      "Weave": "Chanderi",
      "Type": "Chanderi",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 44,
      "Img": "imgs/044.webp",
      "Color": "Blue",
      "Weave": "Chanderi",
      "Type": "Chanderi",
      "Notes": "My Grandmother bought it for my Mother",
      "Occasion": "Gift"
    },
    {
      "#": 45,
      "Img": "imgs/045.webp",
      "Color": "Brown",
      "Weave": "Banarasi Chanderi",
      "Type": "Chanderi",
      "Notes": "Also know as Chiniya silk",
      "Occasion": "Misc"
    },
    {
      "#": 46,
      "Img": "imgs/046.webp",
      "Color": "Yellow",
      "Weave": "Banarasi Chanderi",
      "Type": "Chanderi",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 47,
      "Img": "imgs/047.webp",
      "Color": "Pink",
      "Weave": "Mangalgiri Handloom",
      "Type": "Mangalgiri",
      "Notes": "Bought in-person directly from the weaver.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 48,
      "Img": "imgs/048.webp",
      "Color": "Blue",
      "Weave": "Mangalgiri Handloom",
      "Type": "Mangalgiri",
      "Notes": "Bought in-person directly from the weaver.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 49,
      "Img": "imgs/049.webp",
      "Color": "Purple",
      "Weave": "Mangalgiri Handloom",
      "Type": "Mangalgiri",
      "Notes": "Bought in-person directly from the weaver.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 50,
      "Img": "imgs/050.webp",
      "Color": "Orange",
      "Weave": "Mangalgiri Handloom",
      "Type": "Mangalgiri",
      "Notes": "Bought in-person directly from the weaver.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 51,
      "Img": "imgs/051.webp",
      "Color": "Green",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Bought it because she loved the border design and the small checks",
      "Occasion": "Misc"
    },
    {
      "#": 52,
      "Img": "imgs/052.webp",
      "Color": "Red",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Grandmother; she wore it to visit a newly rennovated temple",
      "Occasion": "Heirloom"
    },
    {
      "#": 53,
      "Img": "imgs/053.webp",
      "Color": "Pink",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Bought for a wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 54,
      "Img": "imgs/054.webp",
      "Color": "Gray",
      "Weave": "Kanjivaram with machine embroidery",
      "Type": "Kanjivaram",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 55,
      "Img": "imgs/055.webp",
      "Color": "Green",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Gifted to my Mother by my Aunt",
      "Occasion": "Gift"
    },
    {
      "#": 56,
      "Img": "imgs/056.webp",
      "Color": "Green",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "My Mother bought it for me",
      "Occasion": "Misc"
    },
    {
      "#": 57,
      "Img": "imgs/057.webp",
      "Color": "Blue",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "She likes the mango motif buti and thought she'll get shadow-work (am ambroidery style) for the border",
      "Occasion": "Misc"
    },
    {
      "#": 58,
      "Img": "imgs/058.webp",
      "Color": "Purple",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my maternal Great-Grandmother",
      "Occasion": "Heirloom"
    },
    {
      "#": 59,
      "Img": "imgs/059.webp",
      "Color": "Brown",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my paternal Great-Grandmother",
      "Occasion": "Heirloom"
    },
    {
      "#": 60,
      "Img": "imgs/060.webp",
      "Color": "White",
      "Weave": "Kanjivaram with digital print",
      "Type": "Kanjivaram",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 61,
      "Img": "imgs/061.webp",
      "Color": "Blue",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Great-Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 62,
      "Img": "imgs/062.webp",
      "Color": "Blue",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "The sari has two pallus and two blouses—she boughts for the unique design",
      "Occasion": "Misc"
    },
    {
      "#": 63,
      "Img": "imgs/063.webp",
      "Color": "Orange",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Bought it from her favorite designer, Gaurang Shah—she loved the color and thought the buti design was unique",
      "Occasion": "Misc"
    },
    {
      "#": 64,
      "Img": "imgs/064.webp",
      "Color": "Pink",
      "Weave": "Hand-painted on Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "The entire body have the Ramayana script written on it by hand, even the border is actually called Rama Green",
      "Occasion": "Misc"
    },
    {
      "#": 65,
      "Img": "imgs/065.webp",
      "Color": "Purple",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Worn for a Tilak ceremony with my brother-in-law",
      "Occasion": "Wedding"
    },
    {
      "#": 66,
      "Img": "imgs/066.webp",
      "Color": "Black",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Worn on Diwali",
      "Occasion": "Pooja"
    },
    {
      "#": 67,
      "Img": "imgs/067.webp",
      "Color": "White",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Great-Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 68,
      "Img": "imgs/068.webp",
      "Color": "Blue",
      "Weave": "Bandhani on Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Wore it for a pooja",
      "Occasion": "Pooja"
    },
    {
      "#": 69,
      "Img": "imgs/069.webp",
      "Color": "Black",
      "Weave": "Kutch work on Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Kutch-work is her favorite hand-stitch",
      "Occasion": "Misc"
    },
    {
      "#": 70,
      "Img": "imgs/070.webp",
      "Color": "White",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Great-Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 71,
      "Img": "imgs/071.webp",
      "Color": "Orange",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Great-Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 72,
      "Img": "imgs/072.webp",
      "Color": "Green",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Worn for cousin's wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 73,
      "Img": "imgs/073.webp",
      "Color": "Red",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "An old sari, she got hand-embroidery done on the border—magam work",
      "Occasion": "Misc"
    },
    {
      "#": 74,
      "Img": "imgs/074.webp",
      "Color": "Brown",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Gifted to my Mother by my Aunt and uncle",
      "Occasion": "Gift"
    },
    {
      "#": 75,
      "Img": "imgs/075.webp",
      "Color": "Yellow",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Great-Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 76,
      "Img": "imgs/076.webp",
      "Color": "Pink",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Great-Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 77,
      "Img": "imgs/077.webp",
      "Color": "Pink",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Great-Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 78,
      "Img": "imgs/078.webp",
      "Color": "Green",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Worn for a wedding, one of the first Kanjivarams she every bought after her wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 80,
      "Img": "imgs/080.webp",
      "Color": "Brown",
      "Weave": "Twill Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 81,
      "Img": "imgs/081.webp",
      "Color": "Red",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Passed down from my Grandmother",
      "Occasion": "Heirloom"
    },
    {
      "#": 82,
      "Img": "imgs/082.webp",
      "Color": "Pink",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "She got needle-point/petit-point work for the border—a very time consuming hand-embroidering process. It also has both peacock and rudrasksha butis.",
      "Occasion": "Misc"
    },
    {
      "#": 83,
      "Img": "imgs/083.webp",
      "Color": "Brown",
      "Weave": "Hand-painted kalamkari on Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Bought for a wedding anniversary",
      "Occasion": "Anniversary"
    },
    {
      "#": 84,
      "Img": "imgs/084.webp",
      "Color": "Red",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Worn for one of her bridal ceremony",
      "Occasion": "Wedding"
    },
    {
      "#": 85,
      "Img": "imgs/085.webp",
      "Color": "",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Worn at her wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 86,
      "Img": "imgs/086.webp",
      "Color": "Pink",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Gifted to my Mother by her Aunt as a wedding present",
      "Occasion": "Gift"
    },
    {
      "#": 87,
      "Img": "imgs/087.webp",
      "Color": "Purple",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Worn for a pooja after her wedding",
      "Occasion": "Pooja"
    },
    {
      "#": 88,
      "Img": "imgs/088.webp",
      "Color": "Red",
      "Weave": "Kanjivaram",
      "Type": "Kanjivaram",
      "Notes": "Worn at her wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 89,
      "Img": "imgs/089.webp",
      "Color": "Pink",
      "Weave": "Banarasi",
      "Type": "Banarasi",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 90,
      "Img": "imgs/090.webp",
      "Color": "Pink",
      "Weave": "Banarasi",
      "Type": "Banarasi",
      "Notes": "Passed down from my Great-Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 91,
      "Img": "imgs/091.webp",
      "Color": "Blue",
      "Weave": "Plain Pattu (Plain Silk) with embroidery",
      "Type": "Misc",
      "Notes": "From before her wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 92,
      "Img": "imgs/092.webp",
      "Color": "Blue",
      "Weave": "Chanderi with print",
      "Type": "Chanderi",
      "Notes": "Gift from her friend",
      "Occasion": "Gift"
    },
    {
      "#": 93,
      "Img": "imgs/093.webp",
      "Color": "Brown",
      "Weave": "Uknown southern handloom",
      "Type": "Misc",
      "Notes": "My maternal Grandmother's sari",
      "Occasion": "Heirloom"
    },
    {
      "#": 94,
      "Img": "imgs/094.webp",
      "Color": "White",
      "Weave": "Ikat Patola",
      "Type": "Ikat",
      "Notes": "My maternal Grandmother's sari",
      "Occasion": "Heirloom"
    },
    {
      "#": 95,
      "Img": "imgs/095.webp",
      "Color": "Blue",
      "Weave": "Mysore Silk",
      "Type": "Misc",
      "Notes": "Gifted to my Mother by my Aunt",
      "Occasion": "Gift"
    },
    {
      "#": 96,
      "Img": "imgs/096.webp",
      "Color": "Gray",
      "Weave": "Unknown Gujarati Weave",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 97,
      "Img": "imgs/097.webp",
      "Color": "Blue",
      "Weave": "Ikat Orissa",
      "Type": "Ikat",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 98,
      "Img": "imgs/098.webp",
      "Color": "Brown",
      "Weave": "Jute Tussar with Handblock print",
      "Type": "Misc",
      "Notes": "Bought by my Grandmother for my Mother",
      "Occasion": "Gift"
    },
    {
      "#": 99,
      "Img": "imgs/099.webp",
      "Color": "Pink",
      "Weave": "Kesh with kalamkari border",
      "Type": "Misc",
      "Notes": "Bought as a plain white sari and dyed pink",
      "Occasion": "Misc"
    },
    {
      "#": 100,
      "Img": "imgs/0100.webp",
      "Color": "Pink",
      "Weave": "Bengal Handloom with digital print",
      "Type": "Misc",
      "Notes": "Bought for a birthday",
      "Occasion": "Birthday"
    },
    {
      "#": 101,
      "Img": "imgs/0101.webp",
      "Color": "White",
      "Weave": "Ikat Orissa",
      "Type": "Ikat",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 102,
      "Img": "imgs/0102.webp",
      "Color": "Yellow",
      "Weave": "Khadi",
      "Type": "Jamdani",
      "Notes": "Gifted by best friend",
      "Occasion": "Gift"
    },
    {
      "#": 103,
      "Img": "imgs/0103.webp",
      "Color": "White",
      "Weave": "Kanjivaram silk cotton",
      "Type": "Kanjivaram",
      "Notes": "Gifted by my father to my Mother ; a 1000 buti sari since it was made on cotton, if made on silk it would be 100,000 butis",
      "Occasion": "Gift"
    },
    {
      "#": 104,
      "Img": "imgs/0104.webp",
      "Color": "Brown",
      "Weave": "Tussar Linen",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 105,
      "Img": "imgs/0105.webp",
      "Color": "Pink",
      "Weave": "Ikat Orissa",
      "Type": "Ikat",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 106,
      "Img": "imgs/0106.webp",
      "Color": "Blue",
      "Weave": "Jamdani Uppada",
      "Type": "Jamdani",
      "Notes": "Bought for the housewarming of our home in India",
      "Occasion": "Misc"
    },
    {
      "#": 107,
      "Img": "imgs/0107.webp",
      "Color": "Green",
      "Weave": "Jamdani Uppada",
      "Type": "Jamdani",
      "Notes": "Given as a gift to my Mother during for my Aunt's wedding",
      "Occasion": "Gift"
    },
    {
      "#": 108,
      "Img": "imgs/0108.webp",
      "Color": "Black",
      "Weave": "Mysore Silk",
      "Type": "Misc",
      "Notes": "Bought from government store for authentic Mysore—this weave will no longer be produced by the Karnataka government",
      "Occasion": "Misc"
    },
    {
      "#": 109,
      "Img": "imgs/0109.webp",
      "Color": "Green",
      "Weave": "Jamdani Uppada",
      "Type": "Jamdani",
      "Notes": "Passed down by Great Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 110,
      "Img": "imgs/0110.webp",
      "Color": "Green",
      "Weave": "Mysore Silk with hand embroidery",
      "Type": "Misc",
      "Notes": "Gifted to my Mother by my Aunt",
      "Occasion": "Gift"
    },
    {
      "#": 111,
      "Img": "imgs/0111.webp",
      "Color": "Pink",
      "Weave": "Jamdani Uppada",
      "Type": "Jamdani",
      "Notes": "Bought and worn for my cousin's half-sari function",
      "Occasion": "Misc"
    },
    {
      "#": 112,
      "Img": "imgs/0112.webp",
      "Color": "Red",
      "Weave": "Bengal Handloom",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 113,
      "Img": "imgs/0113.webp",
      "Color": "Pink",
      "Weave": "Linen with machine embroidery",
      "Type": "Misc",
      "Notes": "Gifted to my Mother by her Aunt",
      "Occasion": "Gift"
    },
    {
      "#": 114,
      "Img": "imgs/0114.webp",
      "Color": "Brown",
      "Weave": "Ajrak digital print on modal silk",
      "Type": "Misc",
      "Notes": "Gift from her best friend",
      "Occasion": "Gift"
    },
    {
      "#": 115,
      "Img": "imgs/0115.webp",
      "Color": "Green",
      "Weave": "Tussar with hand block print and patchwork",
      "Type": "Misc",
      "Notes": "Passed down from my Great Aunt",
      "Occasion": "Heirloom"
    },
    {
      "#": 116,
      "Img": "imgs/0116.webp",
      "Color": "Yellow",
      "Weave": "Tusser with digital print",
      "Type": "Misc",
      "Notes": "Gifted to my Mother by her Aunt",
      "Occasion": "Gift"
    },
    {
      "#": 117,
      "Img": "imgs/0117.webp",
      "Color": "Gray",
      "Weave": "Kanjivaram with handpainted design",
      "Type": "Kanjivaram",
      "Notes": "Bought at an exhibition",
      "Occasion": "Misc"
    },
    {
      "#": 118,
      "Img": "imgs/0118.webp",
      "Color": "Orange",
      "Weave": "Plain Pattu (Plain Silk) with hand and machine embroidery",
      "Type": "Misc",
      "Notes": "My Grandmother would collect saris for my Mother before her marraige.",
      "Occasion": "Misc"
    },
    {
      "#": 119,
      "Img": "imgs/0119.webp",
      "Color": "Blue",
      "Weave": "Tusser with kalamkari hand print",
      "Type": "Misc",
      "Notes": "Wanted to buy a simple Tusser with a handpainted design",
      "Occasion": "Misc"
    },
    {
      "#": 120,
      "Img": "imgs/0120.webp",
      "Color": "Brown",
      "Weave": "Plain Pattu (Plain Silk) with machine embroidery",
      "Type": "Misc",
      "Notes": "My Grandmother bought it before my Mother 's wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 121,
      "Img": "imgs/0121.webp",
      "Color": "White",
      "Weave": "Tusser with Hand block print",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 122,
      "Img": "imgs/0122.webp",
      "Color": "Red",
      "Weave": "Baluchari woven design",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 123,
      "Img": "imgs/0123.webp",
      "Color": "Green",
      "Weave": "Ahimsa silk or Eri Silk",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 124,
      "Img": "imgs/0124.webp",
      "Color": "Red",
      "Weave": "Tusser with kalamkari hand painting",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 125,
      "Img": "imgs/0125.webp",
      "Color": "White",
      "Weave": "Unknown Weave",
      "Type": "Misc",
      "Notes": "My Uncle bought it for my Mother as part of my Grandmother 's death ceremony—it's a ritual to buy new clothes and present them.",
      "Occasion": "Gift"
    },
    {
      "#": 126,
      "Img": "imgs/0126.webp",
      "Color": "White",
      "Weave": "Vidarbha Tussar",
      "Type": "Misc",
      "Notes": "Worn for 23rd wedding anniversary",
      "Occasion": "Anniversary"
    },
    {
      "#": 127,
      "Img": "imgs/0127.webp",
      "Color": "White",
      "Weave": "Banglore Silk with hand-embroidered Kantha work and Appliqué work",
      "Type": "Misc",
      "Notes": "The Kantha work is based on Worli art, which is an Indian folk art. I used to draw a lot of Worli art when I was younger and my Mother always thinks of me when wearing this sari.",
      "Occasion": "Misc"
    },
    {
      "#": 128,
      "Img": "imgs/0128.webp",
      "Color": "Red",
      "Weave": "Plain Pattu",
      "Type": "Misc",
      "Notes": "GIfted to my Mother by her uncle as part of my Grandmother 's death ceremony—it's a ritual to buy new clothes and present them.",
      "Occasion": "Misc"
    },
    {
      "#": 129,
      "Img": "imgs/0129.webp",
      "Color": "White",
      "Weave": "Vishnupuri silk with hand-painted designs",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Gift"
    },
    {
      "#": 130,
      "Img": "imgs/0130.webp",
      "Color": "Green",
      "Weave": "Tissue Chanderi",
      "Type": "Chanderi",
      "Notes": "Passed down from my Grandmother",
      "Occasion": "Heirloom"
    },
    {
      "#": 131,
      "Img": "imgs/0131.webp",
      "Color": "Red",
      "Weave": "Dhakai Jamdani",
      "Type": "Jamdani",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 132,
      "Img": "imgs/0132.webp",
      "Color": "Blue",
      "Weave": "Cotton Gadwal",
      "Type": "Gadwal",
      "Notes": "My Great-Grandmother 's sari that she wore at my Great Uncle's wedding",
      "Occasion": "Heirloom"
    },
    {
      "#": 133,
      "Img": "imgs/0133.webp",
      "Color": "White",
      "Weave": "Bengal Handloom",
      "Type": "Misc",
      "Notes": "Passed down from my Grandmother",
      "Occasion": "Heirloom"
    },
    {
      "#": 134,
      "Img": "imgs/0134.webp",
      "Color": "Brown",
      "Weave": "Gajji Silk with ajrak and bandhani digital print",
      "Type": "Misc",
      "Notes": "I bought it for my Mother when I got my first job",
      "Occasion": "Gift"
    },
    {
      "#": 135,
      "Img": "imgs/0135.webp",
      "Color": "Red",
      "Weave": "Khadi Jamdani",
      "Type": "Jamdani",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 136,
      "Img": "imgs/0136.webp",
      "Color": "Red",
      "Weave": "Tussar Muslin",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 137,
      "Img": "imgs/0137.webp",
      "Color": "Black",
      "Weave": "Dhakai Jamdani",
      "Type": "Jamdani",
      "Notes": "My Mother bought this from a Bangladeshi weaver from Dhaka came to showcase and sell saris in our neighborhood, often at people's houses.",
      "Occasion": "Bought from a weaver"
    },
    {
      "#": 138,
      "Img": "imgs/0138.webp",
      "Color": "Blue",
      "Weave": "Chanderi with digital print",
      "Type": "Chanderi",
      "Notes": "The last sari my Grandmother ever wore.",
      "Occasion": "Heirloom"
    },
    {
      "#": 139,
      "Img": "imgs/0139.webp",
      "Color": "White",
      "Weave": "Tusser with hand-embroidery and hand-block print",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 140,
      "Img": "imgs/0140.webp",
      "Color": "Blue",
      "Weave": "Jamdani Uppada",
      "Type": "Jamdani",
      "Notes": "Passed down from my Grandmother",
      "Occasion": "Heirloom"
    },
    {
      "#": 141,
      "Img": "imgs/0141.webp",
      "Color": "Pink",
      "Weave": "Bengal handloom with digital print",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 142,
      "Img": "imgs/0142.webp",
      "Color": "Blue",
      "Weave": "Unknown weave",
      "Type": "Misc",
      "Notes": "Worn by both my Mother and Grandmother",
      "Occasion": "Heirloom"
    },
    {
      "#": 143,
      "Img": "imgs/0143.webp",
      "Color": "Blue",
      "Weave": "Tusser with digital print and machine embroidery",
      "Type": "Misc",
      "Notes": "Gifted to my Mother by my Grandmother",
      "Occasion": "Gift"
    },
    {
      "#": 144,
      "Img": "imgs/0144.webp",
      "Color": "Yellow",
      "Weave": "Muslin Jamdani",
      "Type": "Jamdani",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 145,
      "Img": "imgs/0145.webp",
      "Color": "Red",
      "Weave": "Bengal Handloom Jamdani",
      "Type": "Misc",
      "Notes": "Bought and worn for Ganesh Chaturthi festival",
      "Occasion": "Pooja"
    },
    {
      "#": 146,
      "Img": "imgs/0146.webp",
      "Color": "Gray",
      "Weave": "Organza with digital print and hand-embroidered body",
      "Type": "Misc",
      "Notes": "Worn for my Cousin's mehendi event at her wedding",
      "Occasion": "Wedding"
    },
    {
      "#": 147,
      "Img": "imgs/0147.webp",
      "Color": "Blue",
      "Weave": "Ikat Semi-Patan Patola",
      "Type": "Ikat",
      "Notes": "Worn at my Dad's 50th birthday",
      "Occasion": "Birthday"
    },
    {
      "#": 148,
      "Img": "imgs/0148.webp",
      "Color": "Pink",
      "Weave": "Ikat Twill Patola",
      "Type": "Ikat",
      "Notes": "Worn for a pooja",
      "Occasion": "Pooja"
    },
    {
      "#": 149,
      "Img": "imgs/0149.webp",
      "Color": "Green",
      "Weave": "Ikat Pochampally",
      "Type": "Ikat",
      "Notes": "Worn at my Grandfather's 70th birthday celebration",
      "Occasion": "Birthday"
    },
    {
      "#": 150,
      "Img": "imgs/0150.webp",
      "Color": "White",
      "Weave": "Ikat Pochampally",
      "Type": "Ikat",
      "Notes": "Bought and worn for Diwali",
      "Occasion": "Pooja"
    },
    {
      "#": 151,
      "Img": "imgs/0151.webp",
      "Color": "Purple",
      "Weave": "Hand-done bandhani on Ikat Patola",
      "Type": "Ikat",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 152,
      "Img": "imgs/0152.webp",
      "Color": "Pink",
      "Weave": "Ikat Patola",
      "Type": "Ikat",
      "Notes": "Passed down from my Grandmother",
      "Occasion": "Heirloom"
    },
    {
      "#": 153,
      "Img": "imgs/0153.webp",
      "Color": "Brown",
      "Weave": "Ikat Pochampally with kalamkari and hand-embroidered border",
      "Type": "Ikat",
      "Notes": "My Mother hand-embroidered the border herself",
      "Occasion": "Misc"
    },
    {
      "#": 154,
      "Img": "imgs/0154.webp",
      "Color": "Brown",
      "Weave": "Kanjivaram with an attached digital print border",
      "Type": "Kanjivaram",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 155,
      "Img": "imgs/0155.webp",
      "Color": "Pink",
      "Weave": "Organza with chikankari and kutch-work",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 156,
      "Img": "imgs/0156.webp",
      "Color": "Brown",
      "Weave": "Tusser with hand-painted kalamkari",
      "Type": "Misc",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 157,
      "Img": "imgs/0157.webp",
      "Color": "Purple",
      "Weave": "Dhakai Jamdani",
      "Type": "Jamdani",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 158,
      "Img": "imgs/0158.webp",
      "Color": "Black",
      "Weave": "Pochampally Ikat",
      "Type": "Ikat",
      "Notes": "",
      "Occasion": "Misc"
    },
    {
      "#": 159,
      "Img": "imgs/0159.webp",
      "Color": "Purple",
      "Weave": "Tissue Organza with hand-embroidery",
      "Type": "Misc",
      "Notes": "Bought for my cousin's wedding event",
      "Occasion": "Wedding"
    }
  ]


// Back To Top button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 850;
  document.documentElement.scrollTop = 850;
}


// FILTERING AND IMAGE RENDERING
const activeFilters = {
  Type: "",
  Occasion: "",
  Color: ""
};
const imgsContainer = document.querySelector(".imgs");

function renderSarisIncrementally(filteredData, chunkSize = 10) {
  imgsContainer.innerHTML = ""; // clear old content
  let index = 0;

  function renderNextChunk() {
    const slice = filteredData.slice(index, index + chunkSize);

    slice.forEach((item, i) => {
      const sari = document.createElement("div");
      sari.className = "sari";
      sari.innerHTML = `
        <img src="${item.Img}" alt="" loading="lazy">
        <div class="meta">
          <div class="weave">${item.Weave}</div>
          <div class="notes">${item.Notes}</div>
        </div>
      `;
      imgsContainer.appendChild(sari);

      // Smooth fade-in + translate after image fully loads
      const imgElement = sari.querySelector("img");
      imgElement.addEventListener("load", () => {
        setTimeout(() => {
          imgElement.classList.add("loaded"); // triggers CSS transition
        }, i * 30); // stagger within batch
      });
    });

    index += chunkSize;

    if (index < filteredData.length) {
      setTimeout(renderNextChunk, 10); // tiny delay between batches
    }
  }

  renderNextChunk();
}

// Apply filters
function applyFilters() {
  const filtered = data.filter(item => {
    return (
      (!activeFilters.Type || item.Type === activeFilters.Type) &&
      (!activeFilters.Occasion || item.Occasion === activeFilters.Occasion) &&
      (!activeFilters.Color || item.Color === activeFilters.Color)
    );
  });
  renderSarisIncrementally(filtered); // 
  // Show or hide the "no results" message
  const noResultsMessage = document.getElementById("no-results");
  if (filtered.length === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
}
// Set up filter click handlers
document.querySelectorAll(".filter").forEach(filterBlock => {
  const filterType = filterBlock.querySelector(".filter-trigger").dataset.filter;
  filterBlock.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      const value = li.dataset.value;
      // Toggle off if already active
      if (activeFilters[filterType] === value) {
        activeFilters[filterType] = "";
        li.classList.remove("active");
      } else {
        // Clear active state within this filter group
        filterBlock.querySelectorAll("li").forEach(el => el.classList.remove("active"));
        // Set new active filter
        activeFilters[filterType] = value;
        li.classList.add("active");
      }

      applyFilters();
    });
  });
});



// SVG
// INITIAL RENDER ON PAGE LOAD
renderSarisIncrementally(data);
// Animate pixels in any SVG
function animateSVG(svgId, totalDuration = 1200) {
  const pixels = Array.from(document.querySelectorAll(`#${svgId} .pixel`));

  // Randomize order for “threading” feel
  pixels.sort(() => Math.random() - 0.5);

  pixels.forEach((pixel, i) => {
    // Calculate normalized delay so all pixels finish at totalDuration
    const delay = (i / pixels.length) * totalDuration;

    setTimeout(() => {
      pixel.classList.add("show"); // triggers CSS fade-in
    }, delay);
  });
}

// Run both SVGs at the same time
window.addEventListener("DOMContentLoaded", () => {
  const animationSpeed = 4000; // total duration in ms, adjust to make faster/slower
  animateSVG("Layer_2", animationSpeed);
  animateSVG("Layer_1", animationSpeed);
});
