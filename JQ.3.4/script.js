// Step 1: Add a new counter container when #newButton is clicked
$("#newButton").on("click", function() {
    $("#container").append(`
        <div class="counterContainer">
            <div class="counterButton">Click me</div>
            <div>Counter: <span class="counterText">0</span></div>
        </div>
    `);
});

// Step 2: Use event delegation to handle clicks on dynamically added .counterButton
$("#container").on("click", ".counterButton", function() {
    // Get the sibling counter text span and increase its value by 1
    let counterText = $(this).next().find(".counterText");
    let currentCount = parseInt(counterText.text());
    counterText.text(currentCount + 1);
});
