import './App.css';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar } from '@syncfusion/ej2-react-filemanager';

function App() {

  const hostUrl: string = "https://ej2-aspcore-service.azurewebsites.net/";

  return (
    <div className="App">
      <FileManagerComponent ajaxSettings={{
        url: hostUrl + "api/FileManager/FileOperations",
        getImageUrl: hostUrl + "api/FileManager/GetImage",
        uploadUrl: hostUrl + 'api/FileManager/Upload',
        downloadUrl: hostUrl + 'api/FileManager/Download'
        
      }}
        toolbarSettings={{ items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details'] }}
        contextMenuSettings={{
          layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll']}}
          view={"Details"}>
      <Inject services={[ NavigationPane, DetailsView, Toolbar]} /></FileManagerComponent>
    </div>
  );
}

export default App;
