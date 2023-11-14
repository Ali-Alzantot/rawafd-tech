package com.rawafd.service.impl;


import com.rawafd.common.EmployeeModel;
import com.rawafd.repository.EmployeeRepository;
import com.rawafd.repository.entity.Employee;
import com.rawafd.service.EmployeeService;
import com.rawafd.service.mapper.EmployeeMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@Slf4j
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
    EmployeeRepository employeeRepository;

	@Autowired
	EmployeeMapper employeeMapper;


	@Override
	public EmployeeModel addEmployee(EmployeeModel employeeModel) {
		Employee employee = employeeMapper.toEntity(employeeModel);
		return employeeMapper.toModel(employeeRepository.save(employee));
	}

	@Override
	public EmployeeModel updateEmployee(EmployeeModel employeeModel) {
		Employee employee = employeeMapper.toEntity(employeeModel);
		return employeeMapper.toModel(employeeRepository.save(employee));
	}


	@Override
	public void deleteEmployee(Long employeeId) throws Exception {
		Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new Exception("Employee not found"));
		employeeRepository.delete(employee);
	}


	@Override
	public EmployeeModel findEmployeeById(Long employeeId) throws Exception {
		return employeeMapper.toModel(employeeRepository.findById(employeeId).orElseThrow(() -> new Exception("Employee not found")));
	}

	@Override
	public List<EmployeeModel> findAllEmployees() {
		return employeeRepository.findAll()
				.stream()
				.map(employee -> employeeMapper.toModel(employee))
				.collect(Collectors.toList());
	}


}
