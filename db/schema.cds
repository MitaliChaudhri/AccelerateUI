using {cuid} from '@sap/cds/common';

context EmpData {

    entity Employee : cuid {
        key ID         : UUID;
            Name       : String(100);
            Department : String(100);


    }
}
