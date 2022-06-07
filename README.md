#NYC Public School Classification Dashboard 

This dashboard is part of a larger project that attempts to classify NYC public school using and unsupervied machine learning model. The full github repository can be found [here](https://github.com/es2681/student_analysis_project). 

##[Link to Dashboard](https://amairanir.github.io/school_dashboard/)

Image 1
![](https://github.com/AmairaniR/school_dashboard/blob/main/images/dashboard_map.png)
Image 1 shows the portion of the dashboard which includes a map created with leaflet and mapbox where the location of each school is mapped. When a marker is clicked, the name of the school is displayed as well as the compiled the information for the school for all the years data is available. 

Image 2
![](https://github.com/AmairaniR/school_dashboard/blob/main/images/dashboard_average.png)

Image 2 shows the portion of the dashboard which includes an interactive dropdown menu where the user can see information on each school based on the year. They can also see a bar chart which shows the percent grads, percent total reents of cohort, percent advanced regents of cohort, and percent dropout which were the values used in the machine learning model. The user is also presented with four pie charts of demogrpahic information of the students for each school: ethnicities, gendere, economic advantage, and students with disabilities. 

Image 3
![](https://github.com/AmairaniR/school_dashboard/blob/main/images/dashboard_highest.png)

Image 3 shows how the dashboard changes when a different school or year is selected. Not only do the values of the bar chart and pie charts change, but the color of the bar chart changes depending on how it was classified from the unsupervised machine learning model. 

##Technologies Used
-HTML 
-JavaScript
-D3
-Google's Find Place API 
