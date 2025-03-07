import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react18";

describe("Quiz Component", () => {
    beforeEach(() => {
        cy.intercept("GET", "/api/questions/random", { fixture: "questions.json" }).as("getQuestions"); // ✅
      });
      

  it("renders the quiz start screen", () => {
    mount(<Quiz />);
    cy.contains("Welcome to the Tech Quiz!").should("exist");
    cy.contains("Start Quiz").should("exist");
  });

  it("starts the quiz when clicking 'Start Quiz'", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");
    cy.contains("Which of the following").should("exist");
  });

  it("shows the completion screen after finishing the quiz", () => {
    mount(<Quiz />);
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");

    cy.contains("Which of the following").should("exist");

    cy.contains("except").click(); // Seleccionamos una respuesta correcta

    cy.wait(1000); 
    cy.get("body").then(($body) => {
      if ($body.text().includes("Quiz Completed")) {
        cy.contains("Quiz Completed").should("exist");
      } else {
        cy.wait(5000); // Espera extra para asegurar que React actualice el DOM
        cy.contains("Quiz Completed", { timeout: 10000 }).should("exist");        
      }
    });
    
  });
});
