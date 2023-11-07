package com.rawafd.rest;


import com.rawafd.common.EmployeeModel;
import com.rawafd.service.EmployeeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("employees")
@CrossOrigin
@Slf4j
public class EmployeeResource {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    EmployeeModel addEmployee(@RequestBody EmployeeModel employeeModel) {
        return employeeService.addEmployee(employeeModel);
    }

    @PutMapping
    EmployeeModel updateEmployee(@RequestBody EmployeeModel employeeModel) {
        return employeeService.updateEmployee(employeeModel);
    }

    @DeleteMapping("{id}")
    public void deleteEmployee(@PathVariable("id") Long employeeId) throws Exception {
        employeeService.deleteEmployee(employeeId);
    }

    @GetMapping
    List<EmployeeModel> findAllEmployees() {
        return employeeService.findAllEmployees();
    }

    @GetMapping("{id}")
    EmployeeModel findEmployeeById(@PathVariable("id") Long employeeId) {
        return employeeService.findEmployeeById(employeeId);
    }

}
