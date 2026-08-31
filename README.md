# HR Management Dashboard

A comprehensive HR Management System with employee clock-in/clock-out tracking, time-off management, and attendance monitoring.

## Features

### 🎯 Dashboard
- Real-time employee statistics
- Total employees count
- Clocked-in employees today
- Employees on time off
- Average hours worked

### ⏰ Clock In/Out
- Quick clock-in/clock-out functionality
- Real-time clock display
- Track daily hours worked
- Display clock-in and clock-out times

### 📅 Time Off Management
- Request time off with dates
- Multiple time-off types (Vacation, Sick Leave, Personal, Other)
- View all time-off requests
- Track approval status

### 📊 Attendance Tracking
- Monitor employee attendance rates
- View present/absent days
- Track attendance statistics
- Identify attendance patterns

### 👥 Employee Directory
- Complete employee database
- Employee profiles with contact info
- Filter by department and position
- Track vacation day balances
- Edit employee information

### 📈 Reports
- Monthly reporting with key metrics
- Total hours worked analysis
- Attendance rate calculations
- Time-off request summary
- PDF download capability

## Project Structure

```
HR-Management/
├── public/
│   ├── index.html       # Main dashboard HTML
│   ├── styles.css       # Dashboard styles
│   ├── app.js          # JavaScript functionality
│   └── assets/         # Images and assets (if needed)
├── src/
│   ├── js/            # Additional JavaScript modules
│   └── css/           # Additional stylesheets
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend required - works entirely in the browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YGCCC-Media/HR-Management.git
cd HR-Management
```

2. Open the application:
```bash
# Option 1: Open directly in browser
open public/index.html

# Option 2: Use a local server
python -m http.server 8000
# Then visit http://localhost:8000/public
```

## Usage

### Adding Employees
1. Navigate to the "Employees" section
2. Click "Add Employee"
3. Fill in employee details
4. Click "Add Employee"

### Clock In/Out
1. Go to "Clock In/Out" section
2. Click "Clock In" when starting work
3. Click "Clock Out" when ending work
4. View today's hours summary

### Requesting Time Off
1. Navigate to "Time Off" section
2. Click "Request Time Off"
3. Select employee, type, and dates
4. Submit the request

### Viewing Attendance
1. Go to "Attendance" section
2. View all employees' attendance rates
3. Check present/absent days

### Generating Reports
1. Navigate to "Reports" section
2. Select desired month
3. Click "Generate Report"
4. View or download the report

## Features in Detail

### Dashboard Statistics
- **Total Employees**: Count of all employees in the system
- **Clocked In Today**: Number of employees currently clocked in
- **On Time Off**: Number of employees on approved time off
- **Average Hours**: Average working hours per employee

### Employee Data
Pre-loaded with sample employees including:
- Employee name and ID
- Email and contact information
- Position and department
- Vacation day allocation
- Current clock-in/out status

### Time Off Types
- **Vacation**: Planned time off
- **Sick Leave**: Medical leave
- **Personal**: Personal business
- **Other**: Other types of leave

## Customization

### Adding More Employees
Edit the `employees` array in `public/app.js` to add more sample data:

```javascript
let employees = [
    { 
        id: 13, 
        name: 'Your Name', 
        email: 'email@company.com', 
        position: 'Position', 
        dept: 'Department', 
        vacationDays: 20, 
        avatar: 'YN', 
        clockIn: null, 
        clockOut: null, 
        status: 'clocked-out' 
    },
    // ... more employees
];
```

### Styling
Customize colors by editing CSS variables in `public/styles.css`:

```css
:root {
    --primary: #3b82f6;      /* Primary blue */
    --secondary: #10b981;    /* Green for success */
    --danger: #ef4444;       /* Red for danger */
    --dark: #1f2937;         /* Dark gray */
    --light: #f3f4f6;        /* Light gray */
    --border: #e5e7eb;       /* Border color */
}
```

## Browser Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Features Coming Soon

- Backend database integration
- User authentication and login
- Email notifications for time-off requests
- Advanced reporting with charts
- Mobile app version
- API integration
- Real-time syncing
- Audit logging

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email systems@ygccc.com or open an issue on GitHub.

## About

Developed for YGCCC Media - HR Management System
Version: 1.0.0
Last Updated: August 2026
