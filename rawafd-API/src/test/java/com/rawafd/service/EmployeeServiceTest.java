package com.rawafd.service;

import com.rawafd.repository.EmployeeRepository;
import com.rawafd.repository.entity.Employee;
import com.rawafd.service.impl.EmployeeServiceImpl;
import com.rawafd.service.mapper.EmployeeMapper;
import com.rawafd.service.mapper.EmployeeMapperImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;


@ExtendWith(SpringExtension.class)
public class EmployeeServiceTest {
    @MockBean
    EmployeeRepository employeeRepository;

    @Autowired EmployeeService employeeService;

    @BeforeEach
    public void setup() {
        when(employeeRepository.findById(1L)).thenReturn(Optional.of(new Employee()));
    }
    @Test
    public void testGetById_shouldReturn() throws Exception {
        assertNotNull(employeeService.findEmployeeById(1L));
    }

    @Test
    public void testGetById_shouldNotReturn() throws Exception {
        assertThrows(Exception.class, () -> employeeService.findEmployeeById(3L));
    }

    @TestConfiguration
    static class EmployeeServiceTestConfig {
        @Bean
        EmployeeService employeeService() {
            return new EmployeeServiceImpl();
        }

        @Bean
        EmployeeMapper employeeMapper() {return new EmployeeMapperImpl();}
    }

}
