**Postman Collections Project**

Postman collections implementation to run manual and automated tests for the main HTTP requests, using the following technologies:

 - Postman
 - Newman command line
 - JavaScript
 - Node JS
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
 - Navigate to 'Postman-JavaScript' folder
 ```
cd API_Automation/Postman-JavaScript
```

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiEGbQwx4KS8ZPMEMBPbEQNJloYvpbzUE_tG1CGGO6Fg50cIGxPIAw0hiDmO8jFsTfYAjVrnVGQD17rGFielHSQkJa4eTY_Iot-4XaenJIm-jUxuPwpiMDtJxXiIXWfkDUWyVWnEI-w7cjew8jOzNHp2Myd6a_iS053cfshbINW8PjT8Zl4d9Kt39jwImY/w640-h92/1.%20open%20folder.PNG)
 - Run the Newman js script
 ```
npm run newman
```

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2fh9vZK_TTdEfYEQk1uemyudQKDe5_e3cPRH7T6RePmBswmVyPLV-uqif4IaoBhJYn6kg3g8Tk1gxMxP5LBCg8OXraGxcUtEMsuUYicuLOpuYqJ_h4OIyRdUtP7el0a1Imn3rgWDuU7TSnDOoymQ-j3Lq_tL2E_-w_SZXeYu3G7KmQ4lM0La5X2lueOvu/w640-h224/2.%20runner.PNG)

 - Wait a few seconds while the tests are executed

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihztXuRKM9rD6Err0Ff9fvIh45D1re763rqH_QOzVyoXGt0xVLNEgRe38tWbfZ3ektzy1JPwbFWaScac6fWc0sl-GH6ptifYkX1AAJafzN1R936bqpLwHRhv8AiT6bMG2alupHYz3-3x9-MLJsxIyw1jp1RitueuY2Dh6wIURvS73QH1FHwH8ZW28KjA/w640-h174/3.Wait_CLI_Execution.PNG)

 - Review the Execution Report generated with newman-reporter-htmlextra

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQfZHde4wouIprA3pn_0Z8Kl1GU_JT6fiIYj2hHkQ0d1mbc0L0zWWptFOz-HOtyNH2z4l36OHFitZsxVjRKnILKhpWOfw20orIDbD827C6wWPFp37oxrsR57S01PMgK-Ck5VFalVgsmgDwXm_XkRpeRwGGvaaaB2CevPuzQjNOhBv7ZNWXT4MEBWOlHDGu/w640-h172/3.%20finished.PNG)

 - Tests executed general view

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0qGENh8Qucs6Wq0qkE5XNYVQuvy8nKBuTLXNMnQpthQWHgjXPOrQIHqy8yTYmhyHBDaXtffpBi2hcuVZJAksgoyBvOCxnS4VYHV6oQTM_xDTf-umBw-cxvTxJc7fXUKwFgGKCiZ3CLo6gvEPNInPy9-W8Lq_9e_bB9g864brDsd669a48Rbot8TEDew/w640-h356/5.Passed_Details.PNG)

 - Review each HTTP request details

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEga6c7KDZRlofVH4srXTqNSM2sNVe6046RIumR47jRWLdCcY_dscYVyx9u3KNfUnmVP1n0gr4Xa-fhA8caOZbbLGCaP9QD39PIFyPlZgJTiqw1F85MTaOiMEMJJULo6jg1vVo0ugGaYdcfyuRpSpwtDeGVzQAviN6xM1nTC34OSr9GSFry8D4MYhILSzg/w640-h586/6.Method_Details.PNG)

 - Feel free to modify the Input Data for each HTTP Method and test different scenarios

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaCpvkuaJ9fl5IdNLN4roY_HUBukly_3ZpuuT_SfW4CqwS8RICkCDKsAmeLonK30R5qQX-GsYl1mXmck5ra5dJtQ5jrbd17GKUOj5t8UxF_k9BKsIWOoTRbu0gxgPZaHfXNEEX8XWzdD6o6B45XefC0ZRYvJcO4iP2kc-cL2yGD5oevivh5utsaRrGow/w640-h544/7.Input_Data.PNG)

 **Run API test using Postman**
 - Open the project on VS Code
 - Open New Terminal
 - Navigate to 'Postman-JavaScript' folder
 ```
cd API_Automation/Postman-JavaScript
```
- Setup Postman server js
 ```
node postman_server.js
```

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0MnNsnz2zkKEbhZDY112m63_ufXMt4hdWkcGAqiUgUrSJU2r23G_BfInjITmDi7PF6o-XXi0CXmEMhbY_gOXfSSPh22GfRZPi0S7UhkjdgcgWy6NHC_U3EKOj_WtSZKtdSHMVA5n6LX7JAej09w3cQKAe2DTtcUXR5hEkKkRrpFnh0e1JZM9tsHgnZzK_/w640-h154/1.%20postman_runner.PNG)

 - Open Postman and login with any email account
 - Go to 'Environments' tab and select 'Import'

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQz-vICl1NXOAcSqHSiL-M64A6ia7kOeg7Tk-bwLlnXNB-Gw27q1zY5P5lcS2mUD9VvFl-xETfwmuK-mTh61e5rpRjfA_jKzeorrjvdy_y0TjGEIXB26lJJw2CFwypoEm-CBToOGt7HZ-9dv0dp4un2dba678jAsG5ZKDNORWzW44Zfl_FoeMx8uawiA/w534-h640/3.Load_Environment.PNG)

 - Navigate to 'Automation_Portfolio\API_Automation\Postman-JavaScript\TestData\Library' and select the file 'TEST_ENVIRONMENT.json'
 
 ![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6zkxHYqcPo1Ypjqx5YZxb0oz_plfjoGs6fnIq4BPScly-a5_XJ15Pn_lNt_vPFczwdiE8ZAP2hlX630N7s8OpAt2UH6oXsN6RNCkRcREdUqJlm1Bjh-dyKXq_87_TcntaRCcKj9FFfCqPdQxeAZdetnw2v_luJp4RSCvhfkdayfPY1DNUfBEOLOMbTA/w640-h422/3.1Upload%20file.PNG)

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYRlf6qAk31WjVGcTUT6uvosq67BzCSTRmvKOgZaI2pdsaQCOyEmpNuDMPzNfmlCZF5ZIvVJ7DDGzC8uUigwL4wfwKDxWr0OcXn-2avScq579-5arHbufGG-1vAAsU_VmiXw6pxDCKqh7tO2_il1MuCo36bNYI_g_EvqldWHiri0WLjasXOC6Rw-sgrQ/w640-h404/3.2Select_Environment.PNG)

 - Go to 'Collections' tab and select 'Import'
 
 ![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfZ8pRfrWTjN_hhFfDSn91oThJ3hKtWwL1Rh-rj70FbWxVGKXvSJhcW2ZuaJZxfqeu3MR7nwwv-Zv-nqDrmTgAdjMtUKEscs_FDEm4ykKSDqxTL0MHR3tBCdgYzCWlbeCnwWiwvB5oifwzrvm_z8TimUj9VPO85uvZ8gpE4rfIT_dxn0ZW94fIP667jg/w538-h640/4.Load_Collection.PNG)
 
 - Select the file 'JSON_Placeholder.postman_collection.json'


![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguhAZMhRhcX0Yzp9A639k8QgUzvj1px7DD4M5orvQOEiLD-nabQKYmgkXVxJ6v588F7vVVJajU4yPP2TvxkRSQMzwVWq8sASmmmGes7Wt3p_pzQ02IgUcf-eeiu8FOo0gsofC7DosniA4XjmUJA9OxC6LSD1SdmZBYDyulUds2H_95Dfcb8-vCWgZj_9FV/w640-h398/2.%20collection.PNG)

 - Click on the three dots button, then select 'Run collection'

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKfLbdhIBoAOPo-LVrPXHynVATIVxch1uvlgp0RiMs7Qb0Cq9tDQdZq4P1IzAAXJUo7BUYIhNa7JSP-y_aEsDjsdXjKoFC7fannICWlL2cIhHOUfegesWmS9srGoRLfVlJIwXlkZvazZ3Qyr48obgg1XO7HHZLDClwH8mh2raF7d-2JGTbJBo7CLnaZA/w568-h640/5.Run_Collection.PNG)

 - Go to the environment tab, select 'TEST_ENVIRONMET', select 'Save responses' and Run the collection

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis-ans9LnWTWp3xLLHgmkBZKq_XjOK4aHbA9e4nS31idRGvsmpagQkuM0H3XfYHK-7iPIht_wDlIgnnxsqYkynSFCcrnMlYsTGuvezJl9dqA7BoqOIEIykMpYdtvjF8Y7KrBFca-NRyA9lxHakSTb_4EayILSuEdDuvDikcnKyTKnvw44kEgdtYOaGfg/w640-h222/6.Select_Environment_Save_Responses.PNG)

 - Wait for the execution ends to see the execution's results

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjhjLRSssTz0IdsVvz2QFR8jZigBUaYEdd1OnuXF0c5POOhVWI8TGPSh_V81vOGWpfq-zmtjyvtsxeKo7U6PtLYeo_rzBOQB5KKvqQXD0bvFn4El2GCiLKMb-wPAjIlaZbU9rTsKjHOvn2mVBz3RYkVusXikgQbjMtbcjyVk4JA4oDom46liwhkYTrNA/w640-h332/7.Review_Execution_Results.PNG)

 - You can also review each method's request and run them separately

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsrFVD4fNIPR3KvRuyiPfddy1EggPgcCfF0JFIQAge7MGQZlfLgM1gBJU8ydZvPkl0-qM3AcVq70Xsl6lntI_GW06kDkN1Z_NpFvm5_ChjDxmgCaYewl2M8aNwRQCG2wHDYfx6mZrFkvVLbin01YdpFW3KZHFBxWiqChfloG_FR2xEh9oiEpyY0BD3FQ/w640-h234/8.Review_Single_Method.PNG)

