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
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #E2E8F0',
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
  cardDesc: {
    fontSize: 10,
    color: '#64748B',
  },
});
