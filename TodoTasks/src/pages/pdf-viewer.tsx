import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../pdf/pdf-document';

export const PdfView = () => {
  return (
    <PDFViewer style={{ width: '100%', height: '90vh' }}>
      <MyDocument />
    </PDFViewer>
  );
};
