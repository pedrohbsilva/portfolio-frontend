function getTextReadme(textPure: string, language: string): string {
  const keyPortuguese = textPure.indexOf('[pt-BR]\n');
  const keyEnglish = textPure.indexOf('[en-US]\n');

  if (language === 'en-US') {
    const english = textPure.slice(keyEnglish + 9);
    return english;
  }

  const portuguese = textPure.slice(keyPortuguese + 9, keyEnglish);
  return portuguese;
}

export { getTextReadme };
