import requests
from report_logger import log_request_details


base_uri = "https://jsonplaceholder.typicode.com"


def test_get_request():
    base_path = "/users/3"

    response = requests.get(base_uri + base_path, timeout=5)

    # Log execution details on test report
    log_request_details("GET", base_uri, base_path, "N/A", response)

    # Assertions
    assert response.status_code == 200
    get_json_response = response.json()
    assert get_json_response["username"] == "Samantha"
    assert get_json_response["website"] == "ramiro.info"


def test_post_request():
    base_path = "/photos"
    request_body = {
        "albumId": 36,
        "title": "POST request testing",
        "url": "https://testing.url.com"
    }

    response = requests.post(base_uri + base_path, json=request_body, timeout=5)

    # Log execution details on test report
    log_request_details("POST", base_uri, base_path, request_body, response)

    # Assertions
    assert response.status_code == 201
    post_json_response = response.json()
    assert post_json_response["albumId"] == request_body["albumId"]
    assert post_json_response["title"] == request_body["title"]
    assert post_json_response["url"] == request_body["url"]


def test_put_request():
    base_path = "/posts/1"
    updated_body = {
        "userId": 63,
        "title": "PUT request testing",
        "body": "Dummy bodie"
    }

    response = requests.put(base_uri + base_path, json=updated_body, timeout=5)

    # Log execution details on test report
    log_request_details("PUT", base_uri, base_path, updated_body, response)

    assert response.status_code == 200
    put_json_response = response.json()
    assert put_json_response["userId"] == updated_body["userId"]
    assert put_json_response["title"] == updated_body["title"]
    assert put_json_response["body"] == updated_body["body"]


def test_patch_request():
    base_path = "/posts/1"
    partial_updated_body = {
        "name": "Pedro Giron",
        "email": "pedro.giron1864@gmail.com",
        "body": "PATCH request testing"
    }

    response = requests.patch(base_uri + base_path, json=partial_updated_body, timeout=5)

    # Log execution details on test report
    log_request_details("PATCH", base_uri, base_path, partial_updated_body, response)

    assert response.status_code == 200
    patch_json_response = response.json()
    assert patch_json_response["name"] == partial_updated_body["name"]
    assert patch_json_response["email"] == partial_updated_body["email"]
    assert patch_json_response["body"] == partial_updated_body["body"]


def test_delete_request():
    base_path = "/comments/9"

    response = requests.delete(base_uri + base_path, timeout=5)

    # Log execution details on test report
    log_request_details("DELETE", base_uri, base_path, "N/A", response)

    assert response.status_code == 200
