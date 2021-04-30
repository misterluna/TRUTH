# TRUTH
Truth Project


The fake json data are generated using https://www.json-generator.com/ and the script in wdbfakedata.txt.

### JSON Spec Version 3
See an example of how the JSON Database will look in `JSON Version 3 Example.pdf`.

At the top level, we have `community_data` and `user_data.` community_data will hold
the values we need to calculate the comparison metrics (example: "you're in the
top 5% for hours slept"). We can calculate the percentiles using the arrays
from `community_data` and the user's value for time spent on that category.

The `user_data` array has one object per user. Each user object has various fields,
including the `activities` array that contains one object per day the user recorded data.
If the user did not record data on a given day, there will be no activities object
for that day.

Each object in the user's `activities` array will contain totals for the amount of
time spent on each category. It will also contain an array `events` filled with
event objects that describe each event's `start` time, `end` time, and `duration`.
Remember that TRUTH only supports start & end times in 15 minute increments, to
keep things simple. The duration field for each event as well as the activity
totals for each day are type `double` with units in hours. Note that 15 minutes
is 0.25 hours.

We haven't discussed this yet, but `duration` and the daily totals will have to
be calculated at some point, either on the front end or the back end.
