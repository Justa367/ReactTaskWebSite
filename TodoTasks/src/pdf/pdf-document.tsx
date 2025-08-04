import { Document, Page, View, Text } from '@react-pdf/renderer';
import { styles } from './pdf-style';

export const MyDocument = () => (
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
    </Page>
  </Document>
);
