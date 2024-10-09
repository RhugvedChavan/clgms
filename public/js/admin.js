// Show the selected section (Attendance, Fees, etc.)
function showSection(section) {
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Attendance Form Submission
document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRowToTable('attendanceTable', ['studentName', 'attendanceDate', 'attendanceStatus']);
});

// Fees Form Submission
document.getElementById('feesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRowToTable('feesTable', ['studentNameFees', 'feesAmount', 'feesStatus']);
});

// Announcements Form Submission
document.getElementById('announcementForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRowToTable('announcementTable', ['announcementTitle', 'announcementDetails'], new Date().toLocaleDateString());
});

// Assignments Form Submission
document.getElementById('assignmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRowToTable('assignmentTable', ['assignmentTitle', 'assignmentDetails'], new Date().toLocaleDateString());
});

// Students Form Submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRowToTable('studentTable', ['studentID', 'studentNameManage']);
});

// Faculty Form Submission
document.getElementById('facultyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRowToTable('facultyTable', ['facultyID', 'facultyName']);
});

// Courses Form Submission
document.getElementById('courseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addRowToTable('courseTable', ['courseCode', 'courseName']);
});

// Helper function to add rows to tables
function addRowToTable(tableId, inputIds, additionalValue = null) {
    const tableBody = document.getElementById(tableId).querySelector('tbody');
    const newRow = tableBody.insertRow();
    inputIds.forEach(id => {
        const cell = newRow.insertCell();
        cell.textContent = document.getElementById(id).value;
    });
    if (additionalValue) {
        const cell = newRow.insertCell();
        cell.textContent = additionalValue;
    }
    // Clear form inputs
    inputIds.forEach(id => document.getElementById(id).value = '');
}


