import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../theme/ThemeProvider';
import ThemeSettingModal from '../components/ThemeSettingModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const SettingsScreen = () => {
  const { colors } = useThemeContext();
  const styles = getStyles(colors);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [selectedOption, setSelectedOption] = useState('');

  const openBottomSheet = useCallback((title: string) => {
    setSelectedOption(title);
    bottomSheetRef.current?.present();
  }, []);

  const settings = [
    { title: 'Dark Theme', icon: 'moon', action: () => openBottomSheet('Dark Theme') },
    { title: 'Check for Updates', icon: 'cloud-download-outline', action: () => openBottomSheet('Check for Updates') },
    { title: 'About App', icon: 'information-circle-outline', action: () => openBottomSheet('About App') },
  ];

  return (
    <View style={styles.container}>
      {settings.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={item.action}>
          <View style={styles.row}>
            <Ionicons name={item.icon as any} size={22} color={colors.mutedText} style={styles.leftIcon} />
            <Text style={styles.settingText}>{item.title}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.mutedText} />
        </TouchableOpacity>
      ))}

      {/* Modal */}
      <ThemeSettingModal ref={bottomSheetRef} />
    </View>
  );
};

export default SettingsScreen;
const getStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      elevation: 4,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingText: {
      fontSize: 16,
      color: colors.text,
    },
    leftIcon: {
      marginRight: 16,
    },
  });
