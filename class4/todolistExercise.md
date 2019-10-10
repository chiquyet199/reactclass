# Todolist
 Make an application with following UI
 ![](https://files.slack.com/files-pri/TBX6NSXJS-FNUES7VS6/smartselect_20191009-211552_samsung_notes.jpg)
 - An input that take in a string known as `todoitem`
 - When click button `Add` new item will added to list of todo below
 - A `todoitem` will have 2 status . `done` and `notdone`, 
 - Click on a `todoitem` will toggle it's status
 - `done todoitem` will have `orange color` and `not done` will have `blue color`
 - There are 3 filter buttons `All` `Done` and `NotDone`
 - The default filter will be `All`
 - When click `Done` the todolist will show only done item
 - When click `Not Done` the todolist will show only not done item
 
## Guideline
 - Make hard code UI first
 - Each `todoitem` will have class `todoItem`
 - Each `done todoitem` will have class `todoItem done`
 - 3 filter buttons will have class `filterButton`
 - Active button will have class `filterButton active`
 - Remember to add styling accordingly for each item and it's alternative status in order to make UI clear and easy to use for user
 - There will be an `ul` element with class `todoContainer`
 ##### **At this point you can see complete UI for todoapp**
 - When you're done with hardcode UI, remove all the todo item, we will use JS to render it.
 - When user click button `Add` take the value from `input` then create a `li` element (The one with class `todoItem` you make in html) append to  `todoContainer` (We did the same functionality with products in the class3) 
 ##### **At this point you're able to add new item to a list**
 - We have to do one more thing, bind click listener for `todoItem`, we do that after we append it to `todoContainer`. So when user click todoItem, we will check if that item is done (have class `done`) we remove that class, if that item not done we add class `done`. You need to google yourself for `how to add, remove a class in javascrip`.
##### **At this point you're able to add new item, and click on each item to toggle it's status**
- Now, it's time to add function for filter buttons
- The `All` button will have class `active` by default.
- When we click button `Done` we will do 3 things, first query all todoItem using `querySelectorAll`, loop throuh it, then for each item (todoItem) we will check, if that item done (have class done) we remove class `hidden` if that item not done we add class `hidden` (remember to add css for class `hidden`)(google yourself how to use JS to check if element have which class). And Finally add class `active` to button done, remove class active for 2 other buttons 
- Similar to `Done`, if we click `Not Done` will will loop through all item, remove class `hidden` for `notdone` and add class hidden for `done`. Add class `active` for button not done and remove class `active` on 2 others
- when click button `All` simply remove class `hidden` on all items. Add class `active` for button all and remove class `active` on 2 others
