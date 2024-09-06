import { DataFetcher, backupDataImages } from './modules/FetchModule.js';
import { ProjectRender } from './modules/ProjectsModule.js'
import { ProjectDetailRender } from './modules/ProjectDetailModule.js'
import { ScrollAnimations } from './modules/AnimationsModule.js'



document.addEventListener('DOMContentLoaded', async () => {   

    ScrollAnimations.init();

    DataFetcher.getData();
    const url = 'https://tomasgarrido-portfolio-dashboard.onrender.com';  
    const data = await DataFetcher.getData(url);    
    // Renderizar la lista de proyectos
    ProjectRender.renderProjectsList(data);  
    // Inicializar el renderizador de detalles del proyecto
    ProjectDetailRender.init(data, backupDataImages);
    
  });

