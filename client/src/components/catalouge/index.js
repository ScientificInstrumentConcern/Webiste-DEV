import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';
import FileViewer from 'react-file-viewer';

const docs = [
    // { uri: "https://firebasestorage.googleapis.com/v0/b/tutorial-8017f.appspot.com/o/Final%20Catalogue%20SINCON-compressed.pdf?alt=media&token=1dd52908-bea5-4783-bdd0-4c58a8d52533" },
    { uri: require('../../assets/doc.pdf') },
];

const file =
    'https://firebasestorage.googleapis.com/v0/b/tutorial-8017f.appspot.com/o/Final%20Catalogue%20SINCON-compressed.pdf?alt=media&token=1dd52908-bea5-4783-bdd0-4c58a8d52533';
const type = 'pdf';

function Catalouge() {
    return (
        <>
            <FileViewer fileType={type} filePath={file} />
        </>
    );
}

export default Catalouge;
