import requests
import pytest
import time
from datetime import datetime
import os
import json
from dotenv import load_dotenv

# Load environment variables from frontend/.env to get the backend URL
load_dotenv('/app/frontend/.env')
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL')
API_URL = f"{BACKEND_URL}/api"

print(f"Using API URL: {API_URL}")

# Sample valid contact form data
valid_contact_data = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "subject": "Testing Contact Form",
    "message": "This is a test message to verify the contact form functionality."
}

# Test data for invalid cases
invalid_email_data = {
    "name": "John Doe",
    "email": "invalid-email",  # Invalid email format
    "subject": "Testing Contact Form",
    "message": "This is a test message with an invalid email."
}

missing_field_data = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    # Missing subject field
    "message": "This is a test message with a missing required field."
}

# Test POST /api/contact with valid data
def test_submit_contact_form_valid():
    """Test contact form submission with valid data"""
    response = requests.post(f"{API_URL}/contact", json=valid_contact_data)
    
    # Print response for debugging
    print(f"POST /api/contact Response: {response.status_code}")
    print(f"Response JSON: {response.json()}")
    
    # Assert response status code is 200 OK
    assert response.status_code == 200
    
    # Assert response contains expected fields
    data = response.json()
    assert "id" in data
    assert "timestamp" in data
    assert "status" in data
    assert data["status"] == "unread"
    assert data["name"] == valid_contact_data["name"]
    assert data["email"] == valid_contact_data["email"]
    assert data["subject"] == valid_contact_data["subject"]
    assert data["message"] == valid_contact_data["message"]
    
    # Save the message ID for later tests
    return data["id"]

# Test POST /api/contact with invalid email
def test_submit_contact_form_invalid_email():
    """Test contact form submission with invalid email format"""
    response = requests.post(f"{API_URL}/contact", json=invalid_email_data)
    
    # Print response for debugging
    print(f"POST /api/contact (Invalid Email) Response: {response.status_code}")
    print(f"Response Text: {response.text}")
    
    # Assert response status code is 422 Unprocessable Entity (validation error)
    assert response.status_code == 422
    
    # Assert response contains validation error for email field
    data = response.json()
    assert "detail" in data
    # Check if any validation error is related to the email field
    email_error = any("email" in str(error).lower() for error in data["detail"])
    assert email_error, "Expected validation error for email field"

# Test POST /api/contact with missing required field
def test_submit_contact_form_missing_field():
    """Test contact form submission with missing required field"""
    response = requests.post(f"{API_URL}/contact", json=missing_field_data)
    
    # Print response for debugging
    print(f"POST /api/contact (Missing Field) Response: {response.status_code}")
    print(f"Response Text: {response.text}")
    
    # Assert response status code is 422 Unprocessable Entity (validation error)
    assert response.status_code == 422
    
    # Assert response contains validation error
    data = response.json()
    assert "detail" in data

# Test GET /api/contact
def test_get_contact_messages():
    """Test retrieving contact messages"""
    # First, submit a contact form to ensure there's at least one message
    message_id = test_submit_contact_form_valid()
    
    # Get all contact messages
    response = requests.get(f"{API_URL}/contact")
    
    # Print response for debugging
    print(f"GET /api/contact Response: {response.status_code}")
    print(f"Response JSON: {response.json()}")
    
    # Assert response status code is 200 OK
    assert response.status_code == 200
    
    # Assert response is a list
    data = response.json()
    assert isinstance(data, list)
    
    # Assert the list contains at least one message
    assert len(data) > 0
    
    # Assert the message we just submitted is in the list
    message_found = any(msg["id"] == message_id for msg in data)
    assert message_found, f"Message with ID {message_id} not found in the response"

# Test GET /api/contact with limit parameter
def test_get_contact_messages_with_limit():
    """Test retrieving contact messages with limit parameter"""
    # Submit multiple contact forms
    for i in range(3):
        modified_data = valid_contact_data.copy()
        modified_data["subject"] = f"Test Subject {i}"
        requests.post(f"{API_URL}/contact", json=modified_data)
    
    # Get contact messages with limit=2
    response = requests.get(f"{API_URL}/contact?limit=2")
    
    # Print response for debugging
    print(f"GET /api/contact?limit=2 Response: {response.status_code}")
    print(f"Response JSON: {response.json()}")
    
    # Assert response status code is 200 OK
    assert response.status_code == 200
    
    # Assert response is a list with exactly 2 messages
    data = response.json()
    assert isinstance(data, list)
    assert len(data) == 2

# Test GET /api/contact with status filter
def test_get_contact_messages_with_status_filter():
    """Test retrieving contact messages with status filter"""
    # First, submit a contact form to ensure there's at least one message with status="unread"
    message_id = test_submit_contact_form_valid()
    
    # Get contact messages with status="unread"
    response = requests.get(f"{API_URL}/contact?status=unread")
    
    # Print response for debugging
    print(f"GET /api/contact?status=unread Response: {response.status_code}")
    print(f"Response JSON: {response.json()}")
    
    # Assert response status code is 200 OK
    assert response.status_code == 200
    
    # Assert response is a list
    data = response.json()
    assert isinstance(data, list)
    
    # Assert all messages have status="unread"
    for message in data:
        assert message["status"] == "unread"
    
    # Assert the message we just submitted is in the list
    message_found = any(msg["id"] == message_id for msg in data)
    assert message_found, f"Message with ID {message_id} not found in the response"

# Test PATCH /api/contact/{message_id}/status with valid status
def test_update_message_status_valid():
    """Test updating message status with valid status value"""
    # First, submit a contact form to get a message ID
    message_id = test_submit_contact_form_valid()
    
    # Update the message status to "read"
    response = requests.patch(f"{API_URL}/contact/{message_id}/status?status=read")
    
    # Print response for debugging
    print(f"PATCH /api/contact/{message_id}/status?status=read Response: {response.status_code}")
    print(f"Response JSON: {response.json()}")
    
    # Assert response status code is 200 OK
    assert response.status_code == 200
    
    # Assert response contains success message
    data = response.json()
    assert "message" in data
    assert "success" in data["message"].lower()
    
    # Verify the status was updated by getting the message
    response = requests.get(f"{API_URL}/contact?status=read")
    data = response.json()
    message_found = any(msg["id"] == message_id for msg in data)
    assert message_found, f"Message with ID {message_id} not found with status='read'"

# Test PATCH /api/contact/{message_id}/status with invalid message ID
def test_update_message_status_invalid_id():
    """Test updating message status with invalid message ID"""
    # Use a non-existent message ID
    invalid_id = "00000000-0000-0000-0000-000000000000"
    
    # Try to update the message status
    response = requests.patch(f"{API_URL}/contact/{invalid_id}/status?status=read")
    
    # Print response for debugging
    print(f"PATCH /api/contact/{invalid_id}/status?status=read Response: {response.status_code}")
    print(f"Response JSON: {response.json()}")
    
    # Assert response status code is 404 Not Found
    assert response.status_code == 404
    
    # Assert response contains error message
    data = response.json()
    assert "detail" in data
    assert "not found" in data["detail"].lower()

# Test PATCH /api/contact/{message_id}/status with invalid status value
def test_update_message_status_invalid_status():
    """Test updating message status with invalid status value"""
    # First, submit a contact form to get a message ID
    message_id = test_submit_contact_form_valid()
    
    # Try to update the message status with an invalid value
    response = requests.patch(f"{API_URL}/contact/{message_id}/status?status=invalid")
    
    # Print response for debugging
    print(f"PATCH /api/contact/{message_id}/status?status=invalid Response: {response.status_code}")
    print(f"Response JSON: {response.json()}")
    
    # Assert response status code is 400 Bad Request
    assert response.status_code == 400
    
    # Assert response contains error message
    data = response.json()
    assert "detail" in data
    assert "invalid status" in data["detail"].lower()

# Run all tests
if __name__ == "__main__":
    print("Starting backend API tests...")
    
    # Test POST /api/contact
    print("\n=== Testing POST /api/contact ===")
    try:
        test_submit_contact_form_valid()
        print("✅ test_submit_contact_form_valid: PASSED")
    except Exception as e:
        print(f"❌ test_submit_contact_form_valid: FAILED - {str(e)}")
    
    try:
        test_submit_contact_form_invalid_email()
        print("✅ test_submit_contact_form_invalid_email: PASSED")
    except Exception as e:
        print(f"❌ test_submit_contact_form_invalid_email: FAILED - {str(e)}")
    
    try:
        test_submit_contact_form_missing_field()
        print("✅ test_submit_contact_form_missing_field: PASSED")
    except Exception as e:
        print(f"❌ test_submit_contact_form_missing_field: FAILED - {str(e)}")
    
    # Test GET /api/contact
    print("\n=== Testing GET /api/contact ===")
    try:
        test_get_contact_messages()
        print("✅ test_get_contact_messages: PASSED")
    except Exception as e:
        print(f"❌ test_get_contact_messages: FAILED - {str(e)}")
    
    try:
        test_get_contact_messages_with_limit()
        print("✅ test_get_contact_messages_with_limit: PASSED")
    except Exception as e:
        print(f"❌ test_get_contact_messages_with_limit: FAILED - {str(e)}")
    
    try:
        test_get_contact_messages_with_status_filter()
        print("✅ test_get_contact_messages_with_status_filter: PASSED")
    except Exception as e:
        print(f"❌ test_get_contact_messages_with_status_filter: FAILED - {str(e)}")
    
    # Test PATCH /api/contact/{message_id}/status
    print("\n=== Testing PATCH /api/contact/{message_id}/status ===")
    try:
        test_update_message_status_valid()
        print("✅ test_update_message_status_valid: PASSED")
    except Exception as e:
        print(f"❌ test_update_message_status_valid: FAILED - {str(e)}")
    
    try:
        test_update_message_status_invalid_id()
        print("✅ test_update_message_status_invalid_id: PASSED")
    except Exception as e:
        print(f"❌ test_update_message_status_invalid_id: FAILED - {str(e)}")
    
    try:
        test_update_message_status_invalid_status()
        print("✅ test_update_message_status_invalid_status: PASSED")
    except Exception as e:
        print(f"❌ test_update_message_status_invalid_status: FAILED - {str(e)}")
    
    print("\nBackend API tests completed.")