#!/bin/bash

# Create a simple PNG favicon using base64 encoded data
cat << 'EOF' | base64 -d > /home/pc/Desktop/github/portfolio/public/favicon-32x32.png
iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAC8klEQVRYCe2WTWgTQRiGnx2JH1gLKkIVEVtQD0pBEfHgxYOIeCgePHhQD148ePDgwYMHDx5yy0EFD4oXL148eOoXKKjggwcPHjx48OClHlrBikVpbdN0k52ZOjPJJpPJzOzOrJN3IGxmdnfe533f951d4B+KKKKIIoooooogNzc3ZywWi8na7XacSCSamHhVQRAaOp2uoNVqM2q1OlNfX79TV1dnMhgMUwMwwO/3+yMej6fM7XZ3cONkQ3t7O8vNzaW1tZWHDx9SVlbGJB0XLlygtbWVoqIiioqKKCgocFVXV29pampacbvdxV6v1+Xz+SIej+eH0+msCYVCFoDabDZHbTabWm+329XX1tbSbDabbDKZxI5XVlZKHmUymSRJFBQUkJubK3mUy+VaV1dXB58X5OXlUV9fT0VFRYN3/H9Kzb9a8o6GH/hDQ0OjEj/J4/dEA5lMJnfhc8cO4tEQZ+n0+/1Kc3MzTU1NPFoxwNLSUmpqaqisrMTpdEp/0DCZmZksLS1xs7WVkpISCgsLlY6ODjo7OxkZGVGam5spKiqipKRECgwNDVFeXi6dXc+Z9U5jXV0djY2N0lDaTCYTZWVltLe3Mzs7y9LSklRQV1eXtBUfH6eurg6z2cz4+Ditra00NDRQWloqHVhvwmFQs9mMxWKhubmZqqoqenp62LdvH9HR0Vy9epWdO3eSn5/P9PQ0PT09WCwWGhoa6O3tpaOjg3379lFUVERfXx8xMTHc6O9np8Uifaz3BYxg+d/5ANWZhTcTTjrPHPY1Zh+m8p0n/m5ckM43yJ2YI9/5N4+Cd3Qk+Gry8Pg="

# Create a CSS file with the favicon data
cat << 'EOF' > /home/pc/Desktop/github/portfolio/create_simple_favicon.html
<!DOCTYPE html>
<html>
<head>
    <title>Create Simple Favicon</title>
</head>
<body>
    <canvas id="canvas" width="32" height="32" style="border: 1px solid #ccc;"></canvas>
    <br><br>
    <button onclick="downloadFavicon()">Download Favicon</button>
    
    <script>
        // Create a simple 'H' favicon
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, 32, 32);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        // Fill background
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
        
        // Add letter H
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('H', 16, 16);
        
        function downloadFavicon() {
            // Convert to blob and download
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'favicon.ico';
                a.click();
                URL.revokeObjectURL(url);
            });
        }
    </script>
</body>
</html>
EOF
