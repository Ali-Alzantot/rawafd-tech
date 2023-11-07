package com.rawafd.service;


import com.rawafd.common.EmployeeModel;

import java.util.List;

public interface EmployeeService {

    EmployeeModel addEmployee(EmployeeModel employeeModel);

    EmployeeModel updateEmployee(EmployeeModel employeeModel);

    void deleteEmployee(Long employeeId) throws Exception;

    EmployeeModel findEmployeeById(Long employeeId);

    List<EmployeeModel> findAllEmployees();

}
