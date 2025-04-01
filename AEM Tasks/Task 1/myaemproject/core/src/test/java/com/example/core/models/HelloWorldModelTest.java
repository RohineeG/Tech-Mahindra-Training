package com.example.core.models;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import com.day.cq.wcm.api.Page;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import com.example.core.testcontext.AppAemContext;

import static org.junit.jupiter.api.Assertions.*;

/**
 * JUnit test for verifying HelloWorldModel functionality.
 */
@ExtendWith(AemContextExtension.class)
class HelloWorldModelTest {

    private final AemContext context = AppAemContext.newAemContext();

    private HelloWorldModel hello;

    private Page page;
    private Resource resource;

    @BeforeEach
    public void setup() {
        // Prepare a page with a test resource
        page = context.create().page("/content/mypage");

        // Create a test resource with firstname and lastname properties
        resource = context.create().resource(page, "hello",
                "sling:resourceType", "myaemproject/components/helloworld",
                "firstname", "John",
                "lastname", "Doe"
        );

        // Adapt to HelloWorldModel
        hello = resource.adaptTo(HelloWorldModel.class);
    }

    @Test
    void testGetFirstAndLastName() {
        assertNotNull(hello, "HelloWorldModel should not be null");

        String firstName = hello.getFirstName();
        String lastName = hello.getLastName();

        // Debugging logs
        System.out.println("First Name: " + firstName);
        System.out.println("Last Name: " + lastName);

        // Assertions
        assertNotNull(firstName, "First Name should not be null");
        assertNotNull(lastName, "Last Name should not be null");
        assertEquals("John", firstName, "First Name should be John");
        assertEquals("Doe", lastName, "Last Name should be Doe");
    }
}
