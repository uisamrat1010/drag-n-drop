// Code goes here!
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLElement;
  }
}
