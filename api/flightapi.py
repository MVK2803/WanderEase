import requests,json
# Set up your Amadeus API credentials
client_id = 'Q0e06banDXpdGHGz9S4ZVHzcqa0jfV0f'
client_secret = '2ztr5JmBPDSDPUgl'

def get_access_token():
    # Define the endpoint URL for obtaining the access token
    url = 'https://test.api.amadeus.com/v1/security/oauth2/token'

    # Create the request payload with client credentials
    payload = {
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret
    }

    try:
        # Make a POST request to the endpoint to obtain the access token
        response = requests.post(url, data=payload)
        response.raise_for_status()

        # Extract the access token from the response
        access_token = response.json()['access_token']
        return access_token

    except requests.exceptions.RequestException as error:
        print(f"Error: {error}")
        return None
def get_transportation_details(source, destination, adults=1, max_results=5):
    access_token = get_access_token()

    if access_token:
        # Set the access token in the Authorization header
        headers = {
            'Authorization': f'Bearer {access_token}'
        }

        try:
            # Search for flight offers between source and destination
            url = 'https://test.api.amadeus.com/v2/shopping/flight-offers'

            params = {
                'originLocationCode': source,
                'destinationLocationCode': destination,
                'departureDate': '2023-06-06',
                'adults': adults,
                'max': max_results
            }

            response = requests.get(url, headers=headers, params=params)
            response.raise_for_status()

            if response.status_code == 200:
                # Process flight details
                print("Flight Details:")
                data = response.json()
                return data
        except requests.exceptions.RequestException as error:
            print(f"Error: {error}")