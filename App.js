import React from 'react';
import { WebView } from 'react-native-webview';

const HTMLViewer = () => {
  return (
    <WebView
      source={{ html: '<html><body><h1>Meu Arquivo HTML</h1></body></html>' }}
      // Substitua a string acima pelo conteúdo HTML que você deseja exibir.
    />
  );
};

export default HTMLViewer;
