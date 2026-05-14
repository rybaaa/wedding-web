export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};