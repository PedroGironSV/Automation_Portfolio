**JSON Placeholder - APIs Automation Project**

API testing for the main HTTP requetests: GET, POST, PUT, PATCH and DELETE, using as automation stack the following technologies:

 - Python
 - Pytest
 - Requests
 - Node JS
 - Pytest-html report

**Local configuration requirements**

 - [Install Visual Studio Code](https://code.visualstudio.com/download)
 - [Install Node JS](https://nodejs.org/en)
	
**Run the automated script**

 - Clone the repo
 
 ```
git clone https://github.com/PedroGironSV/Automation_Portfolio.git
```

 - Open the project on VS Code
 - Open New Terminal
 - Navigate to 'Pytest-Python' folder
 ```
cd API_Automation/Pytest-Python
```
- Execute the tests with the command:
 ```
npm test
```

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJYu4zwoDFLqFhZHwPkyqSc0sG0Yg4ujqg5dq0UJeQuOhJpdhvlmIoBsTPRf5YhAckqg2EOhkpteTjaqnLOriYVSVRZE5f_8WdcC88wotmWHp0_OC5iFjcGsGbnBXhCJMVLOw90I-2l5s3-VAUJVAZSN3XfIq9P3bcHzG4Pza5qm3uDZYLlVU_Rk8YZWaj/w640-h376/4.%20run_test.PNG)

 - Wait a few seconds while the tests are executed

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDl-MMfIoQCZwBEpM6gM9ZWgL393BkaYhZZUtvNWvheNQ2XahcJPUW3pEhVJIp_Y7KSqowCKbJQo9HkPDReAl58PqLBVH0cSKmEzG9ypR_FY7ChimJEKuEPQ7CxJWpOlv_SYAZOZcntLX_Xb2a1NY5eH6pcGMBG1arEB5HnZmfiFBAGeQewmRoO_QRm9mK/w640-h256/5.%20console_results.PNG)

 - Review the Execution Report generated with pytest-html

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDgBz9UCa87mczwTZtvR1rhR0qiKLqlagHTnJSN5vxvG13lAol9IJU4wTQm1VXSmDoVT-q3ivjCX7c2bdnSg1O3iwfnFJl8ifgcQ5T1ksNsn_o65vgAF9_4xJJDAoWGnp4fmCUJUSR0m6wSVUh4IhksXyldY3pVzSYFU3GyE8mre0z2aE8MYKx4eL8LcZJ/w640-h228/5.1%20report.PNG)

- Click on 'Show all details' to see the request's logs
  
![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPtlvkx-VMkqvMYbsFgVRSK0dFQXJPb_U55EMaEIokkuGPwxYOiRCsdVNlAgYB0BBycEo7OZLL_oPIPyqlj4-ItrbLjojpzHrppRGjHy0Q6K7oe0CO5U0fKAq94mfCCd23Qo4ZTGHX9NoWVVRGOhJnlfJoY_JnZRt4eTksO4HXCUgncOPnwVeXmH5Woy5Z/w640-h270/5.2%20collapsed.PNG)

**Review the project files**

- General project info
  
![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQs4YDpx7yhQ7A92VLJ8yxeB3DabHbz3kcA0nqeTjyLRKcGSoK9bHkKqkXhHrj1kNaygjtspDZpgGaheUeT8g5wMXI3tYhbJcEClpqTYHCedvkqBns-UbO-E8O5t2WOKahn5dIOCIDupOBHa8O1dochGwQ6L7yJWFJgHrWxq5Gurgd56Zb_VXWKXkr8ATX/w640-h248/1.%20general_info.PNG)

- Automated script and its assertions

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcTtyZussSaDeplIH8DHEGYz6lDaWzEYUOvm2JU7a2m18oeA8g1lhxa8F4hdbkz3V50chclve7kCja9waUNBTF_yOHcBy4oNgiDF_5JjlE9PSqs7F4HlxBe6GSD4Ux5B5da7fL1b4lpPh2NK-ND_ZaIgNV23Upg7Q-a9m6XxUo0hXbXVoVsvhbHu6nvGaD/w640-h536/2.%20automated_script.PNG)

- Report folder

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwvhnGKiWHZApfbusvBo_65rePjJR7F1G_RhwwTzS7AqEH1SfQt490VUGKcww3IMh34hxhGFltwnJ1hj8ZsmjzzYEcQ8TX-1wIqYJJoWZfDybjmfS9uHVjE9NTZfofZhjWRVwcFmqMoDLnSx1DIwkXjz7IaFPRKvA4Zu6zPbE5RlRjvnZ-UKtN3n8CiN6B/w640-h502/3.%20pytest-html.PNG)
