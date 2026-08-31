// Sample Data
let employees = [
    { id: 1, name: 'George Yu', email: 'george.yu@ygccc.com', position: 'CEO', dept: 'Executive', vacationDays: 25, avatar: 'GY', clockIn: '08:00', clockOut: '18:00', status: 'clocked-out' },
    { id: 2, name: 'Lizzy Loren Jangao', email: 'lizzy.jangao@ygccc.com', position: 'Project Manager', dept: 'Operations', vacationDays: 20, avatar: 'LJ', clockIn: '09:00', clockOut: '17:30', status: 'clocked-out' },
    { id: 3, name: 'Karoline San Miguel', email: 'karoline.miguel@ygccc.com', position: 'Marketing Specialist', dept: 'Marketing', vacationDays: 20, avatar: 'KM', clockIn: '09:15', clockOut: null, status: 'clocked-in' },
    { id: 4, name: 'Myka Hosmillo', email: 'myka.hosmillo@ygccc.com', position: 'Designer', dept: 'Marketing', vacationDays: 18, avatar: 'MH', clockIn: '08:45', clockOut: null, status: 'clocked-in' },
    { id: 5, name: 'Muhammad Bin Taimur', email: 'muhammad.taimur@ygccc.com', position: 'Developer', dept: 'Engineering', vacationDays: 20, avatar: 'MT', clockIn: '09:30', clockOut: '18:00', status: 'clocked-out' },
    { id: 6, name: 'Himaja Kosaraju', email: 'himaja.kosaraju@ygccc.com', position: 'Senior Developer', dept: 'Engineering', vacationDays: 22, avatar: 'HK', clockIn: '09:00', clockOut: null, status: 'clocked-in' },
    { id: 7, name: 'Eryl Karl Agustin', email: 'eryl.agustin@ygccc.com', position: 'QA Engineer', dept: 'Engineering', vacationDays: 20, avatar: 'EA', clockIn: '09:45', clockOut: '17:45', status: 'clocked-out' },
    { id: 8, name: 'Aditya Yata', email: 'aditya.yata@ygccc.com', position: 'Business Analyst', dept: 'Operations', vacationDays: 20, avatar: 'AY', clockIn: '08:30', clockOut: null, status: 'clocked-in' },
    { id: 9, name: 'Demir Dumanlar', email: 'demir.dumanlar@ygccc.com', position: 'Sales Representative', dept: 'Sales', vacationDays: 19, avatar: 'DD', clockIn: '09:00', clockOut: '17:00', status: 'clocked-out' },
    { id: 10, name: 'Israela Joy Dagami', email: 'israela.dagami@ygccc.com', position: 'HR Coordinator', dept: 'HR', vacationDays: 20, avatar: 'ID', clockIn: null, clockOut: null, status: 'timeoff' },
    { id: 11, name: 'Ann', email: 'ann@ygccc.com', position: 'Administrative Assistant', dept: 'HR', vacationDays: 20, avatar: 'AN', clockIn: '09:00', clockOut: '17:00', status: 'clocked-out' },
    { id: 12, name: 'Konstantin', email: 'konstantin@ahs.com', position: 'Project Lead - AHS', dept: 'AHS', vacationDays: 22, avatar: 'KN', clockIn: '08:45', clockOut: null, status: 'clocked-in' }
];

let timeOffs = [
    { id: 1, employeeId: 3, employee: 'Carol White', type: 'Vacation', startDate: '2026-09-01', endDate: '2026-09-05', days: 5, status: 'Approved' },
    { id: 2, employeeId: 8, employee: 'Henry Wilson', type: 'Sick Leave', startDate: '2026-08-31', endDate: '2026-08-31', days: 1, status: 'Approved' },
    { id: 3, employeeId: 2, employee: 'Bob Smith', type: 'Personal', startDate: '2026-09-10', endDate: '2026-09-12', days: 3, status: 'Pending' }
];

let currentUser = { name: 'John Doe', role: 'HR Manager', avatar: 'JD' };
let userClockIn = null;
let userClockOut = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    renderDashboard();
    renderTodayStatus();
    renderTimeOffList();
    renderAttendanceList();
    renderEmployeeList();
    populateEmployeeSelects();
    setInterval(updateClock, 1000);
});

// Navigation
function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');

    const titles = {
        dashboard: 'Dashboard',
        clock: 'Clock In/Out',
        timeoff: 'Time Off Management',
        attendance: 'Attendance Overview',
        employees: 'Employee Directory',
        reports: 'Reports'
    };
    document.getElementById('page-title').textContent = titles[sectionId];
}

// Clock Functions
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}

function clockIn() {
    userClockIn = new Date();
    document.getElementById('current-status').textContent = 'Clocked In';
    document.getElementById('current-status').className = 'status-badge status-clocked-in';
    document.getElementById('display-clock-in').textContent = userClockIn.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    alert('Clocked in at ' + userClockIn.toLocaleTimeString());
}

function clockOut() {
    if (!userClockIn) {
        alert('Please clock in first!');
        return;
    }
    userClockOut = new Date();
    document.getElementById('current-status').textContent = 'Clocked Out';
    document.getElementById('current-status').className = 'status-badge status-clocked-out';
    document.getElementById('display-clock-out').textContent = userClockOut.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    const hours = Math.floor((userClockOut - userClockIn) / 3600000);
    const minutes = Math.floor(((userClockOut - userClockIn) % 3600000) / 60000);
    document.getElementById('today-hours').textContent = `${hours}h ${minutes}m`;
    alert('Clocked out at ' + userClockOut.toLocaleTimeString());
}

// Render Functions
function renderDashboard() {
    const clockedInCount = employees.filter(e => e.status === 'clocked-in').length;
    const timeoffCount = employees.filter(e => e.status === 'timeoff').length;
    const avgHours = (8.2).toFixed(1);

    document.getElementById('total-employees').textContent = employees.length;
    document.getElementById('clocked-in-count').textContent = clockedInCount;
    document.getElementById('on-timeoff-count').textContent = timeoffCount;
    document.getElementById('avg-hours').textContent = avgHours;
}

function renderTodayStatus() {
    const tbody = document.getElementById('today-status');
    tbody.innerHTML = employees.map(emp => `
        <tr>
            <td>${emp.name}</td>
            <td><span class="badge ${getBadgeClass(emp.status)}">${getStatusText(emp.status)}</span></td>
            <td>${emp.clockIn || '--:--'}</td>
            <td>${emp.clockOut || '--:--'}</td>
            <td>${emp.clockOut ? '8h 30m' : '--'}</td>
        </tr>
    `).join('');
}

function renderTimeOffList() {
    const tbody = document.getElementById('timeoff-list');
    tbody.innerHTML = timeOffs.map(to => `
        <tr>
            <td>${to.employee}</td>
            <td>${to.type}</td>
            <td>${to.startDate}</td>
            <td>${to.endDate}</td>
            <td>${to.days}</td>
            <td><span class="badge ${to.status === 'Approved' ? 'badge-success' : 'badge-warning'}">${to.status}</span></td>
        </tr>
    `).join('');
}

function renderAttendanceList() {
    const tbody = document.getElementById('attendance-list');
    tbody.innerHTML = employees.map(emp => {
        const presentDays = Math.floor(Math.random() * 20) + 15;
        const absentDays = 22 - presentDays;
        const rate = ((presentDays / 22) * 100).toFixed(1);
        return `
            <tr>
                <td>${emp.name}</td>
                <td>${presentDays}</td>
                <td>${absentDays}</td>
                <td>${rate}%</td>
                <td><span class="badge badge-success">Good</span></td>
            </tr>
        `;
    }).join('');
}

function renderEmployeeList() {
    const container = document.getElementById('employee-list');
    container.innerHTML = employees.map(emp => `
        <div class="employee-card">
            <div class="employee-info">
                <div class="avatar">${emp.avatar}</div>
                <div class="employee-details">
                    <h3>${emp.name}</h3>
                    <p>${emp.position} • ${emp.dept}</p>
                    <p>${emp.email}</p>
                </div>
            </div>
            <div style="text-align: right;">
                <div><strong>Vacation Days:</strong> ${emp.vacationDays}</div>
                <button class="btn btn-secondary" style="margin-top: 10px; font-size: 12px;" onclick="alert('Edit: ${emp.name}')">Edit</button>
            </div>
        </div>
    `).join('');
}

function populateEmployeeSelects() {
    const select = document.getElementById('timeoff-employee');
    select.innerHTML = '<option>-- Select Employee --</option>' + employees.map(emp =>
        `<option value="${emp.id}">${emp.name}</option>`
    ).join('');
}

function getBadgeClass(status) {
    if (status === 'clocked-in') return 'badge-success';
    if (status === 'timeoff') return 'badge-warning';
    return 'badge-info';
}

function getStatusText(status) {
    if (status === 'clocked-in') return 'Clocked In';
    if (status === 'clocked-out') return 'Clocked Out';
    return 'On Time Off';
}

// Time Off Modal
function openTimeOffModal() {
    document.getElementById('timeoffModal').classList.add('active');
}

function closeTimeOffModal() {
    document.getElementById('timeoffModal').classList.remove('active');
}

function submitTimeOff() {
    const empId = document.getElementById('timeoff-employee').value;
    const employee = employees.find(e => e.id == empId);
    if (!employee) {
        alert('Please select an employee');
        return;
    }

    const startDate = document.getElementById('timeoff-start').value;
    const endDate = document.getElementById('timeoff-end').value;
    const type = document.getElementById('timeoff-type').value;

    if (!startDate || !endDate) {
        alert('Please select both dates');
        return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    const newTimeOff = {
        id: timeOffs.length + 1,
        employeeId: empId,
        employee: employee.name,
        type: type,
        startDate: startDate,
        endDate: endDate,
        days: days,
        status: 'Pending'
    };

    timeOffs.push(newTimeOff);
    renderTimeOffList();
    closeTimeOffModal();
    alert('Time off request submitted!');
    document.getElementById('timeoffModal').querySelector('form')?.reset();
}

// Employee Modal
function openEmployeeModal() {
    document.getElementById('employeeModal').classList.add('active');
}

function closeEmployeeModal() {
    document.getElementById('employeeModal').classList.remove('active');
}

function submitEmployee() {
    const name = document.getElementById('emp-name').value;
    const email = document.getElementById('emp-email').value;
    const position = document.getElementById('emp-position').value;
    const dept = document.getElementById('emp-department').value;
    const vacation = parseInt(document.getElementById('emp-vacation').value) || 20;

    if (!name || !email || !position) {
        alert('Please fill in all fields');
        return;
    }

    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const newEmployee = {
        id: employees.length + 1,
        name: name,
        email: email,
        position: position,
        dept: dept,
        vacationDays: vacation,
        avatar: initials,
        clockIn: null,
        clockOut: null,
        status: 'clocked-out'
    };

    employees.push(newEmployee);
    renderEmployeeList();
    renderDashboard();
    populateEmployeeSelects();
    closeEmployeeModal();
    alert('Employee added successfully!');
}

// Reports
function generateReport() {
    const month = document.getElementById('report-month').value;
    const reportContent = document.getElementById('report-content');

    const totalHours = employees.reduce((sum) => sum + 160, 0);
    const avgAttendance = 95.5;

    reportContent.innerHTML = `
        <div style="background: var(--light); padding: 15px; border-radius: 8px;">
            <h3>Monthly Report - ${month}</h3>
            <div style="margin-top: 15px;">
                <p><strong>Total Employees:</strong> ${employees.length}</p>
                <p><strong>Total Hours Worked:</strong> ${totalHours} hours</p>
                <p><strong>Average Attendance Rate:</strong> ${avgAttendance}%</p>
                <p><strong>Time Off Requests:</strong> ${timeOffs.filter(to => to.status === 'Approved').length} approved</p>
            </div>
            <button class="btn btn-primary" style="margin-top: 15px;" onclick="alert('Report downloaded!')">Download PDF</button>
        </div>
    `;
}

// Close modals on outside click
window.onclick = (event) => {
    const timeoffModal = document.getElementById('timeoffModal');
    const employeeModal = document.getElementById('employeeModal');
    if (event.target === timeoffModal) timeoffModal.classList.remove('active');
    if (event.target === employeeModal) employeeModal.classList.remove('active');
};