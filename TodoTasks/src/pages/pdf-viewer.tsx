import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../pdf/pdf-document';
import { useChartImage } from '../chat-img-context/chat-img-context';

export const PdfView = () => {
  const { image } = useChartImage();
  console.log(image);
  return (
    <PDFViewer style={{ width: '100%', height: '90vh' }}>
      <MyDocument image={image} />
    </PDFViewer>
  );
};
