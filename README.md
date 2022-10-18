# Tests K6


## Types of tests

#### Smoke Test
##### Warmup for application and tests
- Low number of users
- Enough duration to go through the entire testing scenario
- Allows you to validate both the script and the stability of the application before loading


#### Load Test
##### Checks application behavior under many concurrent accesses

- Controlled and constantly increases the user load respecting the application limit
- Allows comparison of response times between different stages of load
- Allows you to identify application behavior and bottlenecks without causing downtime

#### Stress Test
##### Checks the stability and reliability of an application
- Constantly increase the load, at regular intervals
- Exceeds expectation or commom application consumption metric after some execution time
- The objective is to verify how the application behaves after receiving a load above which it can respond

#### Peak Test
##### Checks the behavior and recovery of the application to an excess of the common load
- Instantly exceeds the common expectation or metric of application consumption
- The results can be classified into:
    1. Excellent: System performance is not impaired during peak traffic. Response time is similar during low and high traffic.
    2. Good: Response time is slower but the system does not produce errors. All requests are answered.
    3. Poor: System produces errors during peak traffic but returns to normal after traffic slows down.
    4. Very Bad: System crashes and does not recover after traffic slows down.
    
