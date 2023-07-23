import json

def log_request_details(method, base_uri, basePath, request_body, response):
    print("***** REQUEST *****")
    print(method + " " + base_uri + basePath)
    print("Request body: \n" + f"{json.dumps(request_body, indent=4)}")
    print("\n***** RESPONSE *****")
    print("Status Code: " + str(response.status_code))
    print("Response body: \n" + f"{json.dumps(response.json(), indent=4)}")