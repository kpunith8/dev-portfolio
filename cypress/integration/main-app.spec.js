import * as staticData from "../../src/utils/static-data";

describe("dev-portfolio", () => {
  before(() => {
    cy.visit("/");
  });

  context("nav-bar", () => {
    it("should display the nav bar", () => {
      cy.get(".nav-links").should("exist");
    });

    it("should display the nav title", () => {
      cy.get(".user-name").should("contain.text", "PUNITH K");
    });

    it("should display all nav icons", () => {
      cy.get(".github").should("exist");
      cy.get(".email").should("exist");
      cy.get(".linkedin").should("exist");
      cy.get(".twitter").should("exist");
    });

    it("should display proper href attr on icons", () => {
      cy.get(".email").should("have.attr", "href", "mailto:kpunith8@gmail.com");
      cy.get(".linkedin").should(
        "have.attr",
        "href",
        "https://www.linkedin.com/in/punith-k-7902b328/"
      );
      cy.get(".twitter").should(
        "have.attr",
        "href",
        "https://twitter.com/techie_punith_k"
      );

      // Using BDD style assertions using chai
      cy.get(".github").should((elem) => {
        expect(elem).to.have.attr("href", "https://github.com/kpunith8/");
      });
    });

    it("should display the hover tooltip on nav icons", () => {
      cy.get(".github").trigger("mouseover");
      cy.get(".MuiTooltip-popper").should("contain.text", "Github");

      cy.get(".email").trigger("mouseover");
      cy.get(".MuiTooltip-popper").should("contain.text", "Email");

      cy.get(".linkedin").trigger("mouseover");
      cy.get(".MuiTooltip-popper").should("contain.text", "LinkedIn");

      cy.get(".twitter").trigger("mouseover");
      cy.get(".MuiTooltip-popper").should("contain.text", "Twitter");
    });
  });

  context("ui-mode switcher", () => {
    it("should display the light mode icon by default and proper tooltip", () => {
      cy.get(".light-mode").should("exist");
      cy.get(".black-mode").should("not.exist");

      cy.get(".light-mode").trigger("mouseover");
      cy.get(".MuiTooltip-popper").should("contain.text", "Toggle dark theme");
    });

    it("should change to light mode on click", () => {
      cy.get(".light-mode").click();

      cy.get(".black-mode").should("exist");
      cy.get(".light-mode").should("not.exist");

      cy.get(".black-mode").trigger("mouseover");
      cy.get(".MuiTooltip-popper").should("contain.text", "Toggle light theme");
    });
  });

  context("main-page-content", () => {
    it("should display the about info", () => {
      cy.get(".about-info").should("contain.text", staticData.aboutMeInfo);
    });

    it("should display the tech skills header", () => {
      cy.get(".tech-skills").should("contain.text", "Tech Skills");
    });

    it("should display all tech skills", () => {
      cy.get(".skills-grid .MuiChip-outlined").should(
        "have.length",
        staticData.progLanguages.length
      );
    });

    it('should display the "Libraries/Frameworks" header', () => {
      cy.get(".frameworks").should("contain.text", "Libraries/Frameworks");
    });

    it("should display all the frameworks", () => {
      cy.get(".libs-grid .MuiChip-outlined").should(
        "have.length",
        staticData.frameworks.length
      );
    });

    it('should display the "Tools" header', () => {
      cy.get(".tools").should("contain.text", "Tools");
    });

    it("should display all the tools", () => {
      cy.get(".tools-grid .MuiChip-outlined").should(
        "have.length",
        staticData.tools.length
      );
    });

    it('should display the "Experience" header', () => {
      cy.get(".experience").should("contain.text", "Experience");
    });

    it('should display all "Experience" items', () => {
      cy.get(".experience-item").should(
        "have.length",
        staticData.experiences.length
      );
    });

    it('should display the "Education" header', () => {
      cy.get(".education").should("contain.text", "Education");
    });

    it('should display all "Education" items', () => {
      cy.get(".education-item").should(
        "have.length",
        staticData.educations.length
      );
    });

    it('should display "Copyright" footer', () => {
      cy.get(".copyright").should(
        "contain.text",
        `Copyright © ${new Date().getFullYear()} Punith K`
      );
    });
  });

  context("icons-on-the-web-page", () => {
    it("should display all the icons", () => {
      cy.get(".education-icon").should("exist");
      cy.get(".experience-icon").should("exist");
      cy.get(".tools-icon").should("exist");
      cy.get(".skills-icon").should("exist");
      cy.get(".frameworks-icon").should("exist");
    });
  });
});
