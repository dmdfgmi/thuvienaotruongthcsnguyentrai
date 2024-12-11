// Open the modal and set the book name and book ID
function openModal(bookName) {
  // Get the book ID from the table row
  var row = event.target.closest("tr");
  var bookId = row.querySelector("td:first-child").textContent;

  // Set the book name and ID in the modal
  document.getElementById("bookName").value = bookName;
  document.getElementById("book-id").value = bookId;

  // Display the modal
  document.getElementById("overlay").style.display = "block";
  document.getElementById("modal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}

// Handle form submission
document
  .querySelector("#modal form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var bookId = document.getElementById("book-id").value;
    var borrowerName = document.getElementById("borrowerName").value;
    var className = document.getElementById("class").value;
    var borrowDate = document.getElementById("borrowDate").value;
    var returnDate = document.getElementById("borrow-time").value;

    // Check if all fields are filled
    if (!bookId || !borrowerName || !className || !borrowDate || !returnDate) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Show success message
    alert(
      "Mượn sách thành công!\n\n" +
        "Tên Sách: " +
        document.getElementById("bookName").value +
        "\n" +
        "Mã Sách: " +
        bookId +
        "\n" +
        "Tên Người Mượn: " +
        borrowerName +
        "\n" +
        "Lớp: " +
        className +
        "\n" +
        "Ngày Mượn: " +
        borrowDate +
        "\n" +
        "Ngày Trả: " +
        returnDate
    );

    // Close the modal after submission
    closeModal();
  });
