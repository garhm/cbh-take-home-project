# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. Add Custom Agent IDs to Facility table
   Add a new field to the Facility table to store a custom ID for each Agent they work with. Update the application to use this custom ID instead of the internal database ID on generated reports.
    - Acceptance Criteria:
        - Add a new column to the Facility table called `custom_agent_id`
        - The column should be a string
        - The column should be nullable
    - Time Estimate: 6 hours
    - Implementation Details:
        - Add a new migration file to the `migrations` folder
        - Add a new column to the Facility table
        - Add a new column to the Facility model
  
2. Add Custom Agent IDs to Shifts table
   Add a new field to the Shifts table to store the custom Agent ID set by the Facility. Update the application to display and use this custom ID on generated reports.
    - Acceptance Criteria:
        - Add a new column to the Shifts table called `custom_agent_id`
        - The column should be a string
        - The column should be nullable
    - Time Estimate: 6 hours
    - Implementation Details:
        - Add a new migration file to the `migrations` folder
        - Add a new column to the Shifts table
        - Add a new column to the Shifts model
      
3. Provide API for Facility to update custom Agent IDs
   Add an API endpoint for Facilities to update the custom Agent IDs for Agents they work with.
    - Acceptance Criteria:
        - Add a new endpoint to the `facilities` router
        - The endpoint should accept a Facility ID and a list of Agent IDs
        - The endpoint should update the custom Agent IDs for the Facility
    - Time Estimate: 8 hours
    - Implementation Details:
        - Add a new endpoint to the `facilities` router
        - Add a new controller function to the `facilities` controller
        - Add a new service function to the `facilities` service
      
4. Update generateReport function to use custom Agent IDs
   Update the `generateReport` function to use the custom Agent IDs instead of the internal database IDs.
    - Acceptance Criteria:
        - The `generateReport` function should use the custom Agent IDs
        - The `generateReport` function should generate report with the custom Agent IDs from metadata
    - Time Estimate: 3 hours
   
    - Implementation Details:
        - Update the `generateReport` function to use the custom Agent IDs
  