import { Document, Page, View, Text, Image as PdfImage } from '@react-pdf/renderer';
import { styles } from './pdf-style';
import { weatherPdfData } from './pdf-data';

type MyDocumentProps = {
  image: string | null;
};

export const MyDocument = ({ image }: MyDocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Japan Weather Report</Text>
          <Text style={styles.subtitle}>
            Comprehensive meteorological data for major Japanese cities
          </Text>
          <Text style={styles.subtitle}>Early Winter December 1, 2024</Text>
        </View>

        <View style={styles.cardsWrapper}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Temperature Range</Text>
            <Text style={[styles.cardValue, { color: '#2563EB' }]}>-2°C to 16°C</Text>
            <Text style={styles.cardDesc}>Across all regions</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Average Humidity</Text>
            <Text style={[styles.cardValue, { color: '#16A34A' }]}>71%</Text>
            <Text style={styles.cardDesc}>National average</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Wind Conditions</Text>
            <Text style={[styles.cardValue, { color: '#9333EA' }]}>8 km/h</Text>
            <Text style={styles.cardDesc}>Average wind speed</Text>
          </View>
        </View>
        <View style={styles.dataTable}>
          <View style={styles.dataTableTitle}>
            <Text style={styles.cardTitle}>Current Weather by City</Text>
            <Text style={styles.cardDesc}>Real-time conditions across major Japanese cities</Text>
          </View>

          <View style={styles.dataTableHeader}>
            <Text style={styles.dataTableCell}>City</Text>
            <Text style={styles.dataTableCell}>Region</Text>
            <Text style={styles.dataTableCell}>Temp</Text>
            <Text style={styles.dataTableCell}>Humidity</Text>
            <Text style={styles.dataTableCell}>Condition</Text>
            <Text style={styles.dataTableCell}>Wind</Text>
          </View>

          {weatherPdfData.map((data, index) => (
            <View
              key={index}
              style={index % 2 === 0 ? styles.dataTableRow : styles.dataTableRowAlt}
            >
              <Text style={styles.dataTableData}>{data.city}</Text>
              <Text style={styles.dataTableData}>{data.region}</Text>
              <Text style={styles.dataTableData}>{data.temperature} °C</Text>

              <Text style={styles.dataTableData}>{data.humidity} %</Text>

              <Text style={styles.dataTableData}>{data.condition}</Text>

              <Text style={styles.dataTableData}>{data.wind} km/h</Text>
            </View>
          ))}
        </View>
        {image ? (
          <View>
            <Text>Chart Image:</Text>
            <PdfImage src={image} style={{ width: 300, height: 200 }} />
          </View>
        ) : (
          <Text>No image available</Text>
        )}
      </Page>
    </Document>
  );
};
