function hide_me() {

    const adjusted_salaries_class_name = 
        ".text-truncate.badgy.salary.lg"
        + "\\:tw-btn.tw-text-ink.lg"
        + "\\:tw-btn-secondary-outline.tw-text-xs.lg"
        + "\\:tw-py-0"
        + "\\.5.lg"
        + "\\:tw-px-2.ng-star-inserted";

    const webpage_ad_class_node_list = document.querySelectorAll(".list-container.ng-star-inserted");

    for (const list_container of webpage_ad_class_node_list) {

        const listItems = list_container.children;
        const listArry = Array.from(listItems);

        listArry.forEach(
            (item) => {
                const buka = item.querySelector(adjusted_salaries_class_name);

                let temp = buka.textContent;
                temp = temp.replace(/\s+/g, '');
                let starting_range = parseInt(
                    temp.split('-')
                    );

                if (starting_range > 20000 || starting_range === "Check Salary Match") {
                        item.style.display = "none";
                    }
                }
            );

    }

}
