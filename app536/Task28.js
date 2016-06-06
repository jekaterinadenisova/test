/**
 * Created by Екатерина on 02.06.2016.
 */


  function addStudent(id, refreshCallback) {
        refreshCallback();
   }
  function refreshStudentList() {
        console.log('Hello');
    }

addStudent(1,refreshStudentList);
