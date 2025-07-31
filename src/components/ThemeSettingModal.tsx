import React, { forwardRef } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { useThemeContext } from '../theme/ThemeProvider';

type ThemeOption = {
  key: 'system' | 'light' | 'dark';
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const themeOptions: ThemeOption[] = [
  { key: 'system', label: 'System Default', icon: 'phone-portrait-outline' },
  { key: 'light', label: 'Light Mode', icon: 'sunny-outline' },
  { key: 'dark', label: 'Dark Mode', icon: 'moon-outline' },
];

const ThemeSettingModal = forwardRef<BottomSheetModal>((props, ref) => {
  const { colors, theme, setTheme } = useThemeContext();
  const styles = getStyles(colors);

  const handleSelect = (selectedTheme: ThemeOption['key']) => {
    setTheme(selectedTheme);
  };

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: colors.card }}
      handleIndicatorStyle={{ backgroundColor: colors.mutedText }}
      backdropComponent={({ animatedIndex, animatedPosition }) => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          animatedIndex={animatedIndex}
          animatedPosition={animatedPosition}
          pressBehavior="close"
        />
      )}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
            <Text style={styles.title}>Select App Theme</Text>

            {themeOptions.map((option) => {
              const isSelected = theme === option.key;

              return (
                <TouchableOpacity
                  key={option.key}
                  style={[
                    styles.optionContainer,
                    {
                      borderColor: isSelected
                        ? colors.primary
                        : colors.border,
                    },
                  ]}
                  onPress={() => handleSelect(option.key)}
                >
                  <Ionicons
                    name={option.icon}
                    size={24}
                    color={isSelected ? colors.primary : colors.text}
                    style={styles.icon}
                  />
                  <Text
                    style={[
                      styles.label,
                      { color: isSelected ? colors.primary : colors.text },
                    ]}
                  >
                    {option.label}
                  </Text>
                  <Ionicons
                    name={
                      isSelected
                        ? 'radio-button-on-outline'
                        : 'radio-button-off-outline'
                    }
                    size={22}
                    color={isSelected ? colors.primary : colors.text}
                    style={{ marginLeft: 'auto' }}
                  />
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default ThemeSettingModal;

const getStyles = (colors: Colors) =>
  StyleSheet.create({
    contentContainer: {
      padding: 24,
    },
    selectionCard: {
      backgroundColor: colors.card,
      borderRadius: 12,
      paddingHorizontal: 20,
      paddingVertical: 40,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 30,
      alignSelf: 'center',
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      marginLeft: 12,
    },
    icon: {
      width: 24,
    },
  });
