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
