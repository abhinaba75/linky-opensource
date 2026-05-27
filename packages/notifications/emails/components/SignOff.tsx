import { Text } from '@react-email/components';
import React from 'react';

export function SignOff({ label = 'Thanks' }: { label?: string }) {
  return <Text style={styles}>— {label}</Text>;
}

const styles = {
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '1.5',
  color: '#979da7',
  margin: '24px 0',
};
