export const useNavigation = () => {
  const lessons = [
    { path: "/Lessons/setupVue", title: "Setup Vue" },
    { path: "/Lessons/textInterpolation", title: "Text Interpolation" },
    { path: "/Lessons/syntaxVue", title: "Syntaxe Vue" },
    { path: "/Lessons/introduction", title: "Introduction" },
    { path: "/Lessons/attributeBinding", title: "Attribute Binding" },
    { path: "/Lessons/eventBinding", title: "Event Binding" },
    { path: "/Lessons/dynamicStyling", title: "Dynamic Styling" },
    { path: "/Lessons/twoWayBinding", title: "Two Way Binding" },
    { path: "/Lessons/conditionalRendering", title: "Conditional Rendering" },
    { path: "/Lessons/listRendering", title: "List Rendering" },
    { path: "/Lessons/lifeCycle", title: "Life Cycle" },
    { path: "/Lessons/computedProperties", title: "Computed Properties" },
    { path: "/Lessons/watchers", title: "Watchers" },
    { path: "/Lessons/props", title: "Props" },
    { path: "/Lessons/emit", title: "Emit" }
  ];

  const exercices = [
    { path: "/Exercices/textInterpolation", title: "Text Interpolation" },
    { path: "/Exercices/eventBinding", title: "Event Binding" },
    { path: "/Exercices/dynamicStyling", title: "Dynamic Styling" },
    { path: "/Exercices/vIf", title: "V-If" },
    { path: "/Exercices/lifeCycle", title: "Life Cycle + API" },
    { path: "/Exercices/crachTest", title: "CrachTest" },
    { path: "/Exercices/props", title: "Props" },
  ];

  const tps = [
    { path: "/Tps/dataBinding", title: "Data Binding" },
    { path: "/Tps/reactivite", title: "Reactivite" },
  ];

  const cheatSheets = [
    { path: "/CheatSheets/dataBinding", title: "Data Binding" },
    { path: "/CheatSheets/directives", title: "Directives" },
    { path: "/CheatSheets/reactivity", title: "Réactivité" },
    { path: "/CheatSheets/components", title: "Composants" },
    { path: "/CheatSheets/nuxtRouting", title: "Nuxt & Routing" },
  ];

  return { lessons, exercices, tps, cheatSheets };
};
