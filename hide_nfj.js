void function hide_me() {
    const adjusted_salaries_class_name = 
    ".text-truncate.badgy.salary.lg"
    + "\\:tw-btn.tw-text-ink.lg"
    + "\\:tw-btn-secondary-outline.tw-text-xs.lg"
    + "\\:tw-py-0"
    + "\\.5.lg"
    + "\\:tw-px-2.ng-star-inserted";

    const salaries_items = Array.from(
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

}
