**REST APIs Automation Project**

Free testing APIs to perform the main HTTP requetests: GET, POST, PUT, PATCH and DELETE, using as automation stack the following technologies:

 - Postman
 - Newman command line
 - JavaScript
 - Node JS
 - Gherkin language
 - Newman report

**Local configuration requirements**

 - [Install Visual Studio Code](https://code.visualstudio.com/download)
 - [Install Node JS](https://nodejs.org/en)
 - [Install Postman](https://www.postman.com/downloads/)
	
**Run API test with Newman**

 - Clone the repo
 
 ```
git clone https://github.com/PedroGironSV/Automation_Portfolio.git
```

 - Open the project on VS Code
 - Open New Terminal
 - Navigate to API_Automation folder
 ```
cd API_Automation/
```

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjv8JHTQ5lGppKPtnGDOFwacmMrY_lEznnhtJmq2IVmfzEaHt7ungULPmN7Pz8JJ31-GudGXq_1QdiaemlYGs8DCNEE9fDo5PvCr35JTJZhWw7YXK7cXCBQ0q_llx-ALxqxsZcVX1Tt-enL5bPRhXZHBn-CIzx9QUavdpPdezhey1pMHNia8Tegiykh7A/w640-h134/1.API_Automation_Folder.PNG)
 - Run the Newman js script
 ```
node newman_runner.js
```

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGC_tLgQh0wJERXf9p6pwFsMMj1cjW_q0Sz1MzX7Yy1bUAyctTThRS7Lq_mT_zHMUzqUqVwjvS6uvBdgJgNDT5AtawEfE7gjvCTt4-DIsZxyqZYbcRjf65eOhXBAndEwanEr6j66xFVH1X6AZdtQJrur9wTcaRGwslK0jigGS6ZAG8IaVBDtwciukoqg/w640-h178/2.Newman_Runner.PNG)
 - Wait a few seconds while the tests are executed

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihztXuRKM9rD6Err0Ff9fvIh45D1re763rqH_QOzVyoXGt0xVLNEgRe38tWbfZ3ektzy1JPwbFWaScac6fWc0sl-GH6ptifYkX1AAJafzN1R936bqpLwHRhv8AiT6bMG2alupHYz3-3x9-MLJsxIyw1jp1RitueuY2Dh6wIURvS73QH1FHwH8ZW28KjA/w640-h174/3.Wait_CLI_Execution.PNG)

 - Review the Execution Report generated with newman-reporter-htmlextra

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRZpDTSg7nFTUJEmU8thr0KEbClA9PpwcxmnYyAUvEJYy6MZ2XRnEUMHH4iwRKdUdrehcPPcnGg4t6QxlPl9uHFF4RTm-J7D7oR7G64Z2U2HLaTnH8mZ_Y9UbpkJZzWKb7l8QGs57lb42PVnXCEzFUXCUL1lTkrSULEikw3hq8YiPwqqk2BBEjFihDUg/w640-h434/4.Execution_Report.PNG)

 - Tests executed general view

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0qGENh8Qucs6Wq0qkE5XNYVQuvy8nKBuTLXNMnQpthQWHgjXPOrQIHqy8yTYmhyHBDaXtffpBi2hcuVZJAksgoyBvOCxnS4VYHV6oQTM_xDTf-umBw-cxvTxJc7fXUKwFgGKCiZ3CLo6gvEPNInPy9-W8Lq_9e_bB9g864brDsd669a48Rbot8TEDew/w640-h356/5.Passed_Details.PNG)

 - Review each HTTP request details

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEga6c7KDZRlofVH4srXTqNSM2sNVe6046RIumR47jRWLdCcY_dscYVyx9u3KNfUnmVP1n0gr4Xa-fhA8caOZbbLGCaP9QD39PIFyPlZgJTiqw1F85MTaOiMEMJJULo6jg1vVo0ugGaYdcfyuRpSpwtDeGVzQAviN6xM1nTC34OSr9GSFry8D4MYhILSzg/w640-h586/6.Method_Details.PNG)

 - Feel free to modify the Input Data for each HTTP Method and test different scenarios

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaCpvkuaJ9fl5IdNLN4roY_HUBukly_3ZpuuT_SfW4CqwS8RICkCDKsAmeLonK30R5qQX-GsYl1mXmck5ra5dJtQ5jrbd17GKUOj5t8UxF_k9BKsIWOoTRbu0gxgPZaHfXNEEX8XWzdD6o6B45XefC0ZRYvJcO4iP2kc-cL2yGD5oevivh5utsaRrGow/w640-h544/7.Input_Data.PNG)

 **Run API test using Postman**
 - Open the project on VS Code
 - Open New Terminal
 - Navigate to API_Automation folder
 ```
cd API_Automation/
```
- Setup Postman server js
 ```
node postman_server.js
```

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibtqvujzUg_DxldZj-1AyRCGKRSlinS7IEfVOJPEqvFZ22bisICUjBg5WZWq1IOJyi9w3KDbZA_y0ngoulxYsyIpugSw0Lnvxaf4nmRqwP_VlhmDrQDJmzjVs5Rvk7pCwIHVtknDNlN3dkaQzrD7miP8bkI2lCYBFNbYuXoh3PKX2hHRnsVKvLW-AKig/w640-h210/2.Postman_Server.PNG)

 - Open Postman and login with any email account
 - Go to 'Environments' tab and select 'Import'

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQz-vICl1NXOAcSqHSiL-M64A6ia7kOeg7Tk-bwLlnXNB-Gw27q1zY5P5lcS2mUD9VvFl-xETfwmuK-mTh61e5rpRjfA_jKzeorrjvdy_y0TjGEIXB26lJJw2CFwypoEm-CBToOGt7HZ-9dv0dp4un2dba678jAsG5ZKDNORWzW44Zfl_FoeMx8uawiA/w534-h640/3.Load_Environment.PNG)

 - Navigate to 'Automation_Portfolio\API_Automation\API_Tests\Library' and select the file 'TEST_ENVIRONMENT.json'
 
 ![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6zkxHYqcPo1Ypjqx5YZxb0oz_plfjoGs6fnIq4BPScly-a5_XJ15Pn_lNt_vPFczwdiE8ZAP2hlX630N7s8OpAt2UH6oXsN6RNCkRcREdUqJlm1Bjh-dyKXq_87_TcntaRCcKj9FFfCqPdQxeAZdetnw2v_luJp4RSCvhfkdayfPY1DNUfBEOLOMbTA/w640-h422/3.1Upload%20file.PNG)

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYRlf6qAk31WjVGcTUT6uvosq67BzCSTRmvKOgZaI2pdsaQCOyEmpNuDMPzNfmlCZF5ZIvVJ7DDGzC8uUigwL4wfwKDxWr0OcXn-2avScq579-5arHbufGG-1vAAsU_VmiXw6pxDCKqh7tO2_il1MuCo36bNYI_g_EvqldWHiri0WLjasXOC6Rw-sgrQ/w640-h404/3.2Select_Environment.PNG)

 - Go to 'Collections' tab and select 'Import'
 
 ![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfZ8pRfrWTjN_hhFfDSn91oThJ3hKtWwL1Rh-rj70FbWxVGKXvSJhcW2ZuaJZxfqeu3MR7nwwv-Zv-nqDrmTgAdjMtUKEscs_FDEm4ykKSDqxTL0MHR3tBCdgYzCWlbeCnwWiwvB5oifwzrvm_z8TimUj9VPO85uvZ8gpE4rfIT_dxn0ZW94fIP667jg/w538-h640/4.Load_Collection.PNG)
 
 - Select the file 'API_COLLECTION.postman_collection.json'


![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9MLOxT59jAln6zWC5SrnU-7jwgsEEhham65Y3JcUuo-1wKhHzUEHLp8svwfA_P8yaEAilUA-wiMoHUkwmOe4IT-Vc9rEzbis9FKZRJQInEUEfFdeP3NW-FnCtJfFIG_v9J5RSt0Jg9D1KErrldijbt5-9OZNAAcjCDMHeA-T7fIa5tZySHpmnsnFs6g/w640-h404/4.1Upload_Collection.PNG)

 - Click on the three dots button, then select 'Run collection'

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKfLbdhIBoAOPo-LVrPXHynVATIVxch1uvlgp0RiMs7Qb0Cq9tDQdZq4P1IzAAXJUo7BUYIhNa7JSP-y_aEsDjsdXjKoFC7fannICWlL2cIhHOUfegesWmS9srGoRLfVlJIwXlkZvazZ3Qyr48obgg1XO7HHZLDClwH8mh2raF7d-2JGTbJBo7CLnaZA/w568-h640/5.Run_Collection.PNG)

 - Go to the environment tab, select 'TEST_ENVIRONMET', select 'Save responses' and Run the collection

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis-ans9LnWTWp3xLLHgmkBZKq_XjOK4aHbA9e4nS31idRGvsmpagQkuM0H3XfYHK-7iPIht_wDlIgnnxsqYkynSFCcrnMlYsTGuvezJl9dqA7BoqOIEIykMpYdtvjF8Y7KrBFca-NRyA9lxHakSTb_4EayILSuEdDuvDikcnKyTKnvw44kEgdtYOaGfg/w640-h222/6.Select_Environment_Save_Responses.PNG)

 - Wait for the execution ends to see the execution's results

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjhjLRSssTz0IdsVvz2QFR8jZigBUaYEdd1OnuXF0c5POOhVWI8TGPSh_V81vOGWpfq-zmtjyvtsxeKo7U6PtLYeo_rzBOQB5KKvqQXD0bvFn4El2GCiLKMb-wPAjIlaZbU9rTsKjHOvn2mVBz3RYkVusXikgQbjMtbcjyVk4JA4oDom46liwhkYTrNA/w640-h332/7.Review_Execution_Results.PNG)

 - You can also review each method's request and run them separately

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsrFVD4fNIPR3KvRuyiPfddy1EggPgcCfF0JFIQAge7MGQZlfLgM1gBJU8ydZvPkl0-qM3AcVq70Xsl6lntI_GW06kDkN1Z_NpFvm5_ChjDxmgCaYewl2M8aNwRQCG2wHDYfx6mZrFkvVLbin01YdpFW3KZHFBxWiqChfloG_FR2xEh9oiEpyY0BD3FQ/w640-h234/8.Review_Single_Method.PNG)

