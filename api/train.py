import requests,json
def get_train(org_code,des_code,date):
    url = "https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations"

    querystring = {"fromStationCode":org_code,"toStationCode":des_code,"dateOfJourney":date}

    headers = {
        "X-RapidAPI-Key": "fd9f9bd4f6msh6ce21833713c1d8p17bbe7jsn2b0a844577a7",
        "X-RapidAPI-Host": "irctc1.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    data=response.json()

    return data