import iteneraryAPI as itAPI
def consolidatedAPI(start_date,end_date,source,destination,travel,accommodation):
    
    prompt="Create an itinerary from "+ source +" to "+destination+" from "+ start_date+ " to " +end_date+ " Include the airport code for the nearest airport to"+ destination +" the city code for a city near"+ destination+ " the railway station code for a major station in "+destination+" in json format"
    data=itAPI.generateChatResponse(prompt)

    return data