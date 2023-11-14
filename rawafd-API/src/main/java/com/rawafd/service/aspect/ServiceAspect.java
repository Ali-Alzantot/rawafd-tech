package com.rawafd.service.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Aspect
@Configuration
@Slf4j
public class ServiceAspect {

    @Around("serviceLayerPointcut()")
    public Object aroundMethodInvocation(ProceedingJoinPoint pjp) throws Throwable {
        Logger log = LoggerFactory.getLogger(pjp.getTarget().getClass());
            log.info("-> {} args: {}", pjp.getSignature().getName(), Arrays.deepToString(pjp.getArgs()));
            Object result = pjp.proceed();
            log.info("<- {} result: {}", pjp.getSignature().getName(), result);
        return result;
    }

    @Pointcut("within(com.rawafd.service.impl..*)")
    public void serviceLayerPointcut() {}
}
