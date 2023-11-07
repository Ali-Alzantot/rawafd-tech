package com.rawafd.service.mapper;


import com.rawafd.common.EmployeeModel;
import com.rawafd.repository.entity.Employee;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EmployeeMapper {


	EmployeeModel toModel(final Employee employee);

	Employee toEntity(final EmployeeModel customer);


}