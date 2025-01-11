 
# API Documentation

This is the API documentation for the Netflix API service.

## Base URL
`http://localhost:3000/api/netflix`

### External API Host
This API uses the **Netflix API** hosted on **RapidAPI**:

`netflix-api10.p.rapidapi.com`

 
Here are the headers required for all requests:

X-Rapidapi-Key: 97bfee352bmsh529350ac99792e5p171b11jsnee6aeb5b17f3
X-Rapidapi-Host: netflix-api10.p.rapidapi.com


## Endpoints

### 1. Search Users

**URL**: `http://localhost:3000/netflix/titles`

**Method**: `GET`

#### Query Parameters:
- none

**Response**:
```json

{
    "success": true,
    "message": "🎥 Netflix Binge-Worthy Picks! 🍿",
    "subtitle": "Here are the top 50 trending titles, ready for your next watch party! 🎉",
    "totalTitles": 50,
    "data": [
        {
            "id": 1,
            "name": "#AAY",
            "creativeTagline": "✨ #1: \"#AAY\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#AAY\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 2,
            "name": "#Alive",
            "creativeTagline": "✨ #2: \"#Alive\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Alive\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 3,
            "name": "#Anne Frank Parallel Stories",
            "creativeTagline": "✨ #3: \"#Anne Frank Parallel Stories\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Anne Frank Parallel Stories\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 4,
            "name": "#BlackAF",
            "creativeTagline": "✨ #4: \"#BlackAF\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#BlackAF\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 5,
            "name": "#Female Pleasure",
            "creativeTagline": "✨ #5: \"#Female Pleasure\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Female Pleasure\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 6,
            "name": "#FriendButMarried 2",
            "creativeTagline": "✨ #6: \"#FriendButMarried 2\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#FriendButMarried 2\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 7,
            "name": "#FriendsButMarried",
            "creativeTagline": "✨ #7: \"#FriendsButMarried\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#FriendsButMarried\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 8,
            "name": "#IAmHere",
            "creativeTagline": "✨ #8: \"#IAmHere\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#IAmHere\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 9,
            "name": "#Iamhere",
            "creativeTagline": "✨ #9: \"#Iamhere\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Iamhere\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 10,
            "name": "#Izakaya Shinkansen",
            "creativeTagline": "✨ #10: \"#Izakaya Shinkansen\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Izakaya Shinkansen\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 11,
            "name": "#Jowable",
            "creativeTagline": "✨ #11: \"#Jowable\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Jowable\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 12,
            "name": "#LadyRancho",
            "creativeTagline": "✨ #12: \"#LadyRancho\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#LadyRancho\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 13,
            "name": "#Manhole",
            "creativeTagline": "✨ #13: \"#Manhole\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Manhole\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 14,
            "name": "#NoFilter",
            "creativeTagline": "✨ #14: \"#NoFilter\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#NoFilter\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 15,
            "name": "#OOTD: Outfit of the Designer",
            "creativeTagline": "✨ #15: \"#OOTD: Outfit of the Designer\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#OOTD: Outfit of the Designer\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 16,
            "name": "#Realityhigh",
            "creativeTagline": "✨ #16: \"#Realityhigh\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Realityhigh\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 17,
            "name": "#Rucker50",
            "creativeTagline": "✨ #17: \"#Rucker50\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Rucker50\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 18,
            "name": "#Sohavégetnemérös",
            "creativeTagline": "✨ #18: \"#Sohavégetnemérös\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#Sohavégetnemérös\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 19,
            "name": "#WszystkoGra",
            "creativeTagline": "✨ #19: \"#WszystkoGra\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"#WszystkoGra\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 20,
            "name": "'71",
            "creativeTagline": "✨ #20: \"'71\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"'71\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 21,
            "name": "'76",
            "creativeTagline": "✨ #21: \"'76\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"'76\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 22,
            "name": "'83",
            "creativeTagline": "✨ #22: \"'83\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"'83\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 23,
            "name": "'Robin Hood: Men in Tights' – The Legend Had It Coming",
            "creativeTagline": "✨ #23: \"'Robin Hood: Men in Tights' – The Legend Had It Coming\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"'Robin Hood: Men in Tights' – The Legend Had It Coming\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 24,
            "name": "'Tis Time for \"Torture, \" Princess",
            "creativeTagline": "✨ #24: \"'Tis Time for \"Torture, \" Princess\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"'Tis Time for \"Torture, \" Princess\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 25,
            "name": "'Twas the Text Before Christmas",
            "creativeTagline": "✨ #25: \"'Twas the Text Before Christmas\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"'Twas the Text Before Christmas\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 26,
            "name": "(Ab)Normal Desire",
            "creativeTagline": "✨ #26: \"(Ab)Normal Desire\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"(Ab)Normal Desire\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 27,
            "name": "(Sex) Appeal",
            "creativeTagline": "✨ #27: \"(Sex) Appeal\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"(Sex) Appeal\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 28,
            "name": "(Un)Well",
            "creativeTagline": "✨ #28: \"(Un)Well\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"(Un)Well\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 29,
            "name": "(Un)lucky Sisters",
            "creativeTagline": "✨ #29: \"(Un)lucky Sisters\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"(Un)lucky Sisters\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 30,
            "name": "...And Hope to Die",
            "creativeTagline": "✨ #30: \"...And Hope to Die\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"...And Hope to Die\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 31,
            "name": "0.5 no Otoko",
            "creativeTagline": "✨ #31: \"0.5 no Otoko\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"0.5 no Otoko\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 32,
            "name": "1 Contra Todos - O Filme",
            "creativeTagline": "✨ #32: \"1 Contra Todos - O Filme\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"1 Contra Todos - O Filme\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 33,
            "name": "1 Contra Todos: O Filme 2",
            "creativeTagline": "✨ #33: \"1 Contra Todos: O Filme 2\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"1 Contra Todos: O Filme 2\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 34,
            "name": "1 Contra Todos: O Filme 3",
            "creativeTagline": "✨ #34: \"1 Contra Todos: O Filme 3\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"1 Contra Todos: O Filme 3\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 35,
            "name": "1 Kadin 1 Erkek",
            "creativeTagline": "✨ #35: \"1 Kadin 1 Erkek\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"1 Kadin 1 Erkek\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 36,
            "name": "1,000,000 yen no Onnatachi",
            "creativeTagline": "✨ #36: \"1,000,000 yen no Onnatachi\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"1,000,000 yen no Onnatachi\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 37,
            "name": "10 000 timmar",
            "creativeTagline": "✨ #37: \"10 000 timmar\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10 000 timmar\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 38,
            "name": "10 Cloverfield Lane",
            "creativeTagline": "✨ #38: \"10 Cloverfield Lane\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10 Cloverfield Lane\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 39,
            "name": "10 Days of a Bad Man",
            "creativeTagline": "✨ #39: \"10 Days of a Bad Man\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10 Days of a Bad Man\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 40,
            "name": "10 Days of a Curious Man",
            "creativeTagline": "✨ #40: \"10 Days of a Curious Man\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10 Days of a Curious Man\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 41,
            "name": "10 Days of a Good Man",
            "creativeTagline": "✨ #41: \"10 Days of a Good Man\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10 Days of a Good Man\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 42,
            "name": "10 Days with Dad",
            "creativeTagline": "✨ #42: \"10 Days with Dad\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10 Days with Dad\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 43,
            "name": "10 Women in Black",
            "creativeTagline": "✨ #43: \"10 Women in Black\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10 Women in Black\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 44,
            "name": "10 años con Bebe",
            "creativeTagline": "✨ #44: \"10 años con Bebe\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10 años con Bebe\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 45,
            "name": "10,000 BC",
            "creativeTagline": "✨ #45: \"10,000 BC\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10,000 BC\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 46,
            "name": "10.000 Km",
            "creativeTagline": "✨ #46: \"10.000 Km\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"10.000 Km\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 47,
            "name": "100",
            "creativeTagline": "✨ #47: \"100\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"100\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 48,
            "name": "100 Days My Prince",
            "creativeTagline": "✨ #48: \"100 Days My Prince\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"100 Days My Prince\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 49,
            "name": "100 Days to Indy",
            "creativeTagline": "✨ #49: \"100 Days to Indy\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"100 Days to Indy\" and enjoy the cinematic magic! ✨"
        },
        {
            "id": 50,
            "name": "100 Humans: Life's Questions. Answered.",
            "creativeTagline": "✨ #50: \"100 Humans: Life's Questions. Answered.\" is ready to binge! 🍿",
            "cuteTag": "📽️ Dive into \"100 Humans: Life's Questions. Answered.\" and enjoy the cinematic magic! ✨"
        }
    ]
}  ` ``` `

### `Endpoint: Get Countries`

### 2. Countirs


### Method: `GET`
### URL: `/countries`
This endpoint retrieves information about netflix getting countries that are avaible.

#### Full Request Example:

http://localhost:3000/netflix/counries

#### Query Parameters:
- none

**Response**:

```json

{
    "success": true,
    "message": "🌍 Netflix Global Availability",
    "subtitle": "Find Netflix in your country! 📺",
    "totalCountries": 131,
    "data": [
        {
            "id": 1,
            "code": "AD",
            "cuteTag": "📍 Netflix is available in AD 🌟"
        },
        {
            "id": 2,
            "code": "AE",
            "cuteTag": "📍 Netflix is available in AE 🌟"
        },
        {
            "id": 3,
            "code": "AG",
            "cuteTag": "📍 Netflix is available in AG 🌟"
        },
        {
            "id": 4,
            "code": "AL",
            "cuteTag": "📍 Netflix is available in AL 🌟"
        },
        {
            "id": 5,
            "code": "AO",
            "cuteTag": "📍 Netflix is available in AO 🌟"
        },
        {
            "id": 6,
            "code": "AR",
            "cuteTag": "📍 Netflix is available in AR 🌟"
        },
        {
            "id": 7,
            "code": "AT",
            "cuteTag": "📍 Netflix is available in AT 🌟"
        },
        {
            "id": 8,
            "code": "AU",
            "cuteTag": "📍 Netflix is available in AU 🌟"
        },
        {
            "id": 9,
            "code": "AZ",
            "cuteTag": "📍 Netflix is available in AZ 🌟"
        },
        {
            "id": 10,
            "code": "BA",
            "cuteTag": "📍 Netflix is available in BA 🌟"
        },
        {
            "id": 11,
            "code": "BB",
            "cuteTag": "📍 Netflix is available in BB 🌟"
        },
        {
            "id": 12,
            "code": "BE",
            "cuteTag": "📍 Netflix is available in BE 🌟"
        },
        {
            "id": 13,
            "code": "BG",
            "cuteTag": "📍 Netflix is available in BG 🌟"
        },
        {
            "id": 14,
            "code": "BH",
            "cuteTag": "📍 Netflix is available in BH 🌟"
        },
        {
            "id": 15,
            "code": "BM",
            "cuteTag": "📍 Netflix is available in BM 🌟"
        },
        {
            "id": 16,
            "code": "BO",
            "cuteTag": "📍 Netflix is available in BO 🌟"
        },
        {
            "id": 17,
            "code": "BR",
            "cuteTag": "📍 Netflix is available in BR 🌟"
        },
        {
            "id": 18,
            "code": "BS",
            "cuteTag": "📍 Netflix is available in BS 🌟"
        },
        {
            "id": 19,
            "code": "BY",
            "cuteTag": "📍 Netflix is available in BY 🌟"
        },
        {
            "id": 20,
            "code": "BZ",
            "cuteTag": "📍 Netflix is available in BZ 🌟"
        },
        {
            "id": 21,
            "code": "CA",
            "cuteTag": "📍 Netflix is available in CA 🌟"
        },
        {
            "id": 22,
            "code": "CH",
            "cuteTag": "📍 Netflix is available in CH 🌟"
        },
        {
            "id": 23,
            "code": "CI",
            "cuteTag": "📍 Netflix is available in CI 🌟"
        },
        {
            "id": 24,
            "code": "CL",
            "cuteTag": "📍 Netflix is available in CL 🌟"
        },
        {
            "id": 25,
            "code": "CM",
            "cuteTag": "📍 Netflix is available in CM 🌟"
        },
        {
            "id": 26,
            "code": "CO",
            "cuteTag": "📍 Netflix is available in CO 🌟"
        },
        {
            "id": 27,
            "code": "CR",
            "cuteTag": "📍 Netflix is available in CR 🌟"
        },
        {
            "id": 28,
            "code": "CU",
            "cuteTag": "📍 Netflix is available in CU 🌟"
        },
        {
            "id": 29,
            "code": "CV",
            "cuteTag": "📍 Netflix is available in CV 🌟"
        },
        {
            "id": 30,
            "code": "CY",
            "cuteTag": "📍 Netflix is available in CY 🌟"
        },
        {
            "id": 31,
            "code": "CZ",
            "cuteTag": "📍 Netflix is available in CZ 🌟"
        },
        {
            "id": 32,
            "code": "DE",
            "cuteTag": "📍 Netflix is available in DE 🌟"
        },
        {
            "id": 33,
            "code": "DK",
            "cuteTag": "📍 Netflix is available in DK 🌟"
        },
        {
            "id": 34,
            "code": "DO",
            "cuteTag": "📍 Netflix is available in DO 🌟"
        },
        {
            "id": 35,
            "code": "DZ",
            "cuteTag": "📍 Netflix is available in DZ 🌟"
        },
        {
            "id": 36,
            "code": "EC",
            "cuteTag": "📍 Netflix is available in EC 🌟"
        },
        {
            "id": 37,
            "code": "EE",
            "cuteTag": "📍 Netflix is available in EE 🌟"
        },
        {
            "id": 38,
            "code": "EG",
            "cuteTag": "📍 Netflix is available in EG 🌟"
        },
        {
            "id": 39,
            "code": "ES",
            "cuteTag": "📍 Netflix is available in ES 🌟"
        },
        {
            "id": 40,
            "code": "FI",
            "cuteTag": "📍 Netflix is available in FI 🌟"
        },
        {
            "id": 41,
            "code": "FJ",
            "cuteTag": "📍 Netflix is available in FJ 🌟"
        },
        {
            "id": 42,
            "code": "FR",
            "cuteTag": "📍 Netflix is available in FR 🌟"
        },
        {
            "id": 43,
            "code": "GB",
            "cuteTag": "📍 Netflix is available in GB 🌟"
        },
        {
            "id": 44,
            "code": "GF",
            "cuteTag": "📍 Netflix is available in GF 🌟"
        },
        {
            "id": 45,
            "code": "GG",
            "cuteTag": "📍 Netflix is available in GG 🌟"
        },
        {
            "id": 46,
            "code": "GH",
            "cuteTag": "📍 Netflix is available in GH 🌟"
        },
        {
            "id": 47,
            "code": "GI",
            "cuteTag": "📍 Netflix is available in GI 🌟"
        },
        {
            "id": 48,
            "code": "GQ",
            "cuteTag": "📍 Netflix is available in GQ 🌟"
        },
        {
            "id": 49,
            "code": "GR",
            "cuteTag": "📍 Netflix is available in GR 🌟"
        },
        {
            "id": 50,
            "code": "GT",
            "cuteTag": "📍 Netflix is available in GT 🌟"
        },
        {
            "id": 51,
            "code": "HK",
            "cuteTag": "📍 Netflix is available in HK 🌟"
        },
        {
            "id": 52,
            "code": "HN",
            "cuteTag": "📍 Netflix is available in HN 🌟"
        },
        {
            "id": 53,
            "code": "HR",
            "cuteTag": "📍 Netflix is available in HR 🌟"
        },
        {
            "id": 54,
            "code": "HU",
            "cuteTag": "📍 Netflix is available in HU 🌟"
        },
        {
            "id": 55,
            "code": "ID",
            "cuteTag": "📍 Netflix is available in ID 🌟"
        },
        {
            "id": 56,
            "code": "IE",
            "cuteTag": "📍 Netflix is available in IE 🌟"
        },
        {
            "id": 57,
            "code": "IL",
            "cuteTag": "📍 Netflix is available in IL 🌟"
        },
        {
            "id": 58,
            "code": "IN",
            "cuteTag": "📍 Netflix is available in IN 🌟"
        },
        {
            "id": 59,
            "code": "IQ",
            "cuteTag": "📍 Netflix is available in IQ 🌟"
        },
        {
            "id": 60,
            "code": "IS",
            "cuteTag": "📍 Netflix is available in IS 🌟"
        },
        {
            "id": 61,
            "code": "IT",
            "cuteTag": "📍 Netflix is available in IT 🌟"
        },
        {
            "id": 62,
            "code": "JM",
            "cuteTag": "📍 Netflix is available in JM 🌟"
        },
        {
            "id": 63,
            "code": "JO",
            "cuteTag": "📍 Netflix is available in JO 🌟"
        },
        {
            "id": 64,
            "code": "JP",
            "cuteTag": "📍 Netflix is available in JP 🌟"
        },
        {
            "id": 65,
            "code": "KE",
            "cuteTag": "📍 Netflix is available in KE 🌟"
        },
        {
            "id": 66,
            "code": "KR",
            "cuteTag": "📍 Netflix is available in KR 🌟"
        },
        {
            "id": 67,
            "code": "KW",
            "cuteTag": "📍 Netflix is available in KW 🌟"
        },
        {
            "id": 68,
            "code": "LB",
            "cuteTag": "📍 Netflix is available in LB 🌟"
        },
        {
            "id": 69,
            "code": "LC",
            "cuteTag": "📍 Netflix is available in LC 🌟"
        },
        {
            "id": 70,
            "code": "LI",
            "cuteTag": "📍 Netflix is available in LI 🌟"
        },
        {
            "id": 71,
            "code": "LT",
            "cuteTag": "📍 Netflix is available in LT 🌟"
        },
        {
            "id": 72,
            "code": "LU",
            "cuteTag": "📍 Netflix is available in LU 🌟"
        },
        {
            "id": 73,
            "code": "LV",
            "cuteTag": "📍 Netflix is available in LV 🌟"
        },
        {
            "id": 74,
            "code": "LY",
            "cuteTag": "📍 Netflix is available in LY 🌟"
        },
        {
            "id": 75,
            "code": "MA",
            "cuteTag": "📍 Netflix is available in MA 🌟"
        },
        {
            "id": 76,
            "code": "MC",
            "cuteTag": "📍 Netflix is available in MC 🌟"
        },
        {
            "id": 77,
            "code": "MD",
            "cuteTag": "📍 Netflix is available in MD 🌟"
        },
        {
            "id": 78,
            "code": "ME",
            "cuteTag": "📍 Netflix is available in ME 🌟"
        },
        {
            "id": 79,
            "code": "MG",
            "cuteTag": "📍 Netflix is available in MG 🌟"
        },
        {
            "id": 80,
            "code": "MK",
            "cuteTag": "📍 Netflix is available in MK 🌟"
        },
        {
            "id": 81,
            "code": "ML",
            "cuteTag": "📍 Netflix is available in ML 🌟"
        },
        {
            "id": 82,
            "code": "MT",
            "cuteTag": "📍 Netflix is available in MT 🌟"
        },
        {
            "id": 83,
            "code": "MU",
            "cuteTag": "📍 Netflix is available in MU 🌟"
        },
        {
            "id": 84,
            "code": "MX",
            "cuteTag": "📍 Netflix is available in MX 🌟"
        },
        {
            "id": 85,
            "code": "MY",
            "cuteTag": "📍 Netflix is available in MY 🌟"
        },
        {
            "id": 86,
            "code": "MZ",
            "cuteTag": "📍 Netflix is available in MZ 🌟"
        },
        {
            "id": 87,
            "code": "NE",
            "cuteTag": "📍 Netflix is available in NE 🌟"
        },
        {
            "id": 88,
            "code": "NG",
            "cuteTag": "📍 Netflix is available in NG 🌟"
        },
        {
            "id": 89,
            "code": "NI",
            "cuteTag": "📍 Netflix is available in NI 🌟"
        },
        {
            "id": 90,
            "code": "NL",
            "cuteTag": "📍 Netflix is available in NL 🌟"
        },
        {
            "id": 91,
            "code": "NO",
            "cuteTag": "📍 Netflix is available in NO 🌟"
        },
        {
            "id": 92,
            "code": "NZ",
            "cuteTag": "📍 Netflix is available in NZ 🌟"
        },
        {
            "id": 93,
            "code": "OM",
            "cuteTag": "📍 Netflix is available in OM 🌟"
        },
        {
            "id": 94,
            "code": "PA",
            "cuteTag": "📍 Netflix is available in PA 🌟"
        },
        {
            "id": 95,
            "code": "PE",
            "cuteTag": "📍 Netflix is available in PE 🌟"
        },
        {
            "id": 96,
            "code": "PF",
            "cuteTag": "📍 Netflix is available in PF 🌟"
        },
        {
            "id": 97,
            "code": "PH",
            "cuteTag": "📍 Netflix is available in PH 🌟"
        },
        {
            "id": 98,
            "code": "PK",
            "cuteTag": "📍 Netflix is available in PK 🌟"
        },
        {
            "id": 99,
            "code": "PL",
            "cuteTag": "📍 Netflix is available in PL 🌟"
        },
        {
            "id": 100,
            "code": "PS",
            "cuteTag": "📍 Netflix is available in PS 🌟"
        },
        {
            "id": 101,
            "code": "PT",
            "cuteTag": "📍 Netflix is available in PT 🌟"
        },
        {
            "id": 102,
            "code": "PY",
            "cuteTag": "📍 Netflix is available in PY 🌟"
        },
        {
            "id": 103,
            "code": "QA",
            "cuteTag": "📍 Netflix is available in QA 🌟"
        },
        {
            "id": 104,
            "code": "RO",
            "cuteTag": "📍 Netflix is available in RO 🌟"
        },
        {
            "id": 105,
            "code": "RS",
            "cuteTag": "📍 Netflix is available in RS 🌟"
        },
        {
            "id": 106,
            "code": "SA",
            "cuteTag": "📍 Netflix is available in SA 🌟"
        },
        {
            "id": 107,
            "code": "SC",
            "cuteTag": "📍 Netflix is available in SC 🌟"
        },
        {
            "id": 108,
            "code": "SE",
            "cuteTag": "📍 Netflix is available in SE 🌟"
        },
        {
            "id": 109,
            "code": "SG",
            "cuteTag": "📍 Netflix is available in SG 🌟"
        },
        {
            "id": 110,
            "code": "SI",
            "cuteTag": "📍 Netflix is available in SI 🌟"
        },
        {
            "id": 111,
            "code": "SK",
            "cuteTag": "📍 Netflix is available in SK 🌟"
        },
        {
            "id": 112,
            "code": "SM",
            "cuteTag": "📍 Netflix is available in SM 🌟"
        },
        {
            "id": 113,
            "code": "SN",
            "cuteTag": "📍 Netflix is available in SN 🌟"
        },
        {
            "id": 114,
            "code": "SV",
            "cuteTag": "📍 Netflix is available in SV 🌟"
        },
        {
            "id": 115,
            "code": "TC",
            "cuteTag": "📍 Netflix is available in TC 🌟"
        },
        {
            "id": 116,
            "code": "TD",
            "cuteTag": "📍 Netflix is available in TD 🌟"
        },
        {
            "id": 117,
            "code": "TH",
            "cuteTag": "📍 Netflix is available in TH 🌟"
        },
        {
            "id": 118,
            "code": "TN",
            "cuteTag": "📍 Netflix is available in TN 🌟"
        },
        {
            "id": 119,
            "code": "TR",
            "cuteTag": "📍 Netflix is available in TR 🌟"
        },
        {
            "id": 120,
            "code": "TT",
            "cuteTag": "📍 Netflix is available in TT 🌟"
        },
        {
            "id": 121,
            "code": "TW",
            "cuteTag": "📍 Netflix is available in TW 🌟"
        },
        {
            "id": 122,
            "code": "TZ",
            "cuteTag": "📍 Netflix is available in TZ 🌟"
        },
        {
            "id": 123,
            "code": "UA",
            "cuteTag": "📍 Netflix is available in UA 🌟"
        },
        {
            "id": 124,
            "code": "UG",
            "cuteTag": "📍 Netflix is available in UG 🌟"
        },
        {
            "id": 125,
            "code": "US",
            "cuteTag": "📍 Netflix is available in US 🌟"
        },
        {
            "id": 126,
            "code": "UY",
            "cuteTag": "📍 Netflix is available in UY 🌟"
        },
        {
            "id": 127,
            "code": "VE",
            "cuteTag": "📍 Netflix is available in VE 🌟"
        },
        {
            "id": 128,
            "code": "YE",
            "cuteTag": "📍 Netflix is available in YE 🌟"
        },
        {
            "id": 129,
            "code": "ZA",
            "cuteTag": "📍 Netflix is available in ZA 🌟"
        },
        {
            "id": 130,
            "code": "ZM",
            "cuteTag": "📍 Netflix is available in ZM 🌟"
        },
        {
            "id": 131,
            "code": "ZW",
            "cuteTag": "📍 Netflix is available in ZW 🌟"
        }
    ]
}

