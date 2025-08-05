<%@ page contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head><title>Enroll</title></head>
<body>
    <h2>Enrollment Form</h2>
    <form action="submitEnrollment" method="post">
        Name: <input type="text" name="name" /><br/>
        Email: <input type="email" name="email" /><br/>
        Course ID: <input type="text" name="courseId" /><br/>
        <input type="submit" value="Submit" />
    </form>
</body>
</html>