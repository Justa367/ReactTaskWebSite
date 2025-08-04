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
});
