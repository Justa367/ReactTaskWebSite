import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    backgroundColor: '#F8FAFC',
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 10,
  },
  cardsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: '32%',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1E293B',
  },
  cardValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  blueValue: {
    color: '#2563EB',
  },
  greenValue: {
    color: '#16A34A',
  },
  purpleValue: {
    color: '#9333EA',
  },
  cardDesc: {
    fontSize: 10,
    color: '#64748B',
  },
  dataTable: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    borderTopStyle: 'solid',
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
  },
  dataTableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    borderBottomStyle: 'solid',
    backgroundColor: '#F1F5F9',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  dataTableTitle: {
    marginBottom: 4,
    paddingVertical: 8,
  },
  dataTableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    borderBottomStyle: 'solid',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  dataTableRowAlt: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    borderBottomStyle: 'solid',
    backgroundColor: '#F8FAFC',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  dataTableCell: {
    fontSize: 10,
    flex: 1,
    paddingHorizontal: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dataTableData: {
    fontSize: 10,
    flex: 1,
    paddingHorizontal: 4,
    textAlign: 'center',
  },

  boldCell: {
    fontWeight: 'bold',
  },
  forecastWrapper: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderColor: '#E2E8F0',
    borderWidth: 1,
  },
  forecastDayCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    borderBottomStyle: 'solid',
  },
  forecastDayCardLast: {
    borderBottomWidth: 0,
  },
  forecastIcon: {
    fontSize: 12,
    marginRight: 8,
  },
  forecastTempText: {
    fontSize: 10,
    color: '#DC2626',
    flex: 1,
    textAlign: 'center',
  },
  forecastNightTempText: {
    fontSize: 10,
    color: '#2563EB',
    flex: 1,
    textAlign: 'center',
  },
  forecastHumidityText: {
    fontSize: 10,
    color: '#0F172A',
    flex: 1,
    textAlign: 'center',
  },

  seasonalTempText: {
    fontSize: 10,
    color: '#ca5b5bff',
    flex: 1,
    textAlign: 'center',
  },
  seasonalRainText: {
    fontSize: 10,
    color: '#2c5abdff',
    flex: 1,
    textAlign: 'center',
  },
  seasonalIdkText: {
    fontSize: 10,
    color: '#b8932fff',
    flex: 1,
    textAlign: 'center',
  },
  tablesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
  halfWidth: {
    width: '48%',
  },
  alertWrapper: {
    marginTop: 20,
    padding: 14,
    backgroundColor: '#FFF7ED',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#5416e6ff',
  },

  alertTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#B91C1C',
  },

  alertSubTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#B91C1C',
  },

  alertTextBold: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#9F2D00',
  },

  alertText: {
    fontSize: 10,
    color: '#B45309',
    marginBottom: 6,
  },
  container: {
    marginVertical: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pdfImage: {
    width: '100%',
    height: 240,
    resizeMode: 'contain',
  },
  noImageText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});
