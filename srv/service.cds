using {EmpData as my} from '../db/schema';

service Employeeinformation @(path: '/browse') {


    entity Employee as projection on my.Employee;


}
