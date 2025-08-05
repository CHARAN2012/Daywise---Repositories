<%@ page  contentType="text/html;charset=UTF-8" %>
<html>
<head><title>Courses</title></head>
<body>
    <h2>Available Courses</h2>
    <ul>
        <c:forEach var="course" items="${courseList}">
            <li>${course.name} - <a href="enroll">Enroll</a></li>
        </c:forEach>
    </ul>
</body>
</html>