// Arquivo: app.js (ou index.js, main.js, dependendo da convenção do seu projeto)

// Importa o CMS e qualquer outro módulo necessário
import CMS from 'decap-cms-app';
import MyTemplate from './caminho/do/seu/MyTemplate';

// Inicializa o CMS
CMS.init();

// Registra o modelo de visualização
CMS.registerPreviewTemplate('my-template', MyTemplate);

// Outras configurações ou inicializações podem seguir
// ...

// Se a sua aplicação precisar de mais lógica, continue com o código aqui
