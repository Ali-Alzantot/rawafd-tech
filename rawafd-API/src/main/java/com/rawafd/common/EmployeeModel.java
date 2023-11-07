package com.rawafd.common;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Column;


@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class EmployeeModel {

	private long id;

	private String firstName;

	private String lastName;

	private String email;

	private String phone;

	private int salary;

}
