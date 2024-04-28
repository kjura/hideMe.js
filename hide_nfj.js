var adjusted_salaries_class_name = ".text-truncate.badgy.salary.lg\\:tw-btn.tw-text-ink.lg\\:tw-btn-secondary-outline.tw-text-xs.lg\\:tw-py-0\\.5.lg\\:tw-px-2.ng-star-inserted";

var salaries_items = Array.from(
    document.querySelectorAll(adjusted_salaries_class_name)
);

for (const element of salaries_items) {

    let temp = element.textContent;
    temp = temp.replace(/\s+/g, '');
    let starting_range = parseInt(
        temp.split('-')
        );

    if (starting_range > 20000) {
        element.style.visibility = "hidden";
    }
    
}


{/* <span _ngcontent-serverapp-c1542614857="" 
data-cy="salary ranges on the job offer listing" nfjstopevent="" 
commonmeasureclickevent="" nfjscrolltoponclick="" 
class="text-truncate badgy salary lg:tw-btn tw-text-ink lg:tw-btn-secondary-outline tw-text-xs lg:tw-py-0.5 lg:tw-px-2 ng-star-inserted">
     19&nbsp;800  – 27&nbsp;700 <!----><!----> PLN </span> */}


// document.getElementsByClassName("text-truncate badgy salary lg:tw-btn tw-text-ink lg:tw-btn-secondary-outline tw-text-xs lg:tw-py-0.5 lg:tw-px-2 ng-star-inserted")[0]
// text-truncate badgy salary lg\\:tw-btn tw-text-ink lg\\:tw-btn-secondary-outline tw-text-xs lg\\:tw-py-0.5 lg\\:tw-px-2 ng-star-inserted