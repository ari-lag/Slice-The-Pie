## Design decisions
* Title: We decide to change the title of the user input from "percentage" to "Available: 100%" As a way for users to keep track of how much percentage is left. The value will change according to the user input.
* Text: We also remove the "%" from "Total%:" as it doesn't make sense to have two % here (Total% : 100%).

* Pie chart: We modify the PieChartClass file so that the text and the value are displayed under the chart.

## Resources:
* We implement the progress bar using [react-step-progress-bar
library](https://pierreericgarcia.github.io/react-steppi-progress-bar/)
* For the info detail pop up we use the popup component from [Semantic UI](https://react.semantic-ui.com/)
* The info icon is from [iconify](https://iconify.design/icon-sets/)