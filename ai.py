import openai
key="sk--ioDUSg87F1x4KxBiWKN9swgMOZUyLii5U48sFe-X5T3BlbkFJPgUddOUyKyKzE-ZN6ZZAn7s8SZY_KqvzbQt99joZwA"
import os

# Load the API key from an environment variable
openai.api_key = key

# try:
#     # Make a simple request to test connection
#     response = openai.models.list()
#     print("Models available:")
#     for model in response['data']:
#         print(model['id'])
# except Exception as e:
#     print(f"An error occurred: {e}")
# Define the prompt or input message
prompt1 = "Write a short story about a robot learning to dance."

# Make a request to the OpenAI API
response = openai.completions.create(
    model="davinci-002",  # You can choose different models (e.g., text-davinci-003, gpt-3.5-turbo)
    prompt=prompt1,
    max_tokens=200,  # Adjust the number of tokens based on your needs
)

# Extract and print the generated message
message = response.choices[0].text.strip()
print(message)