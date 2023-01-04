const telegram = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => telegram.close();
  const onToggleButton = () => {
    if (telegram.MainButton.isVisible) {
      telegram.MainButton.hide();
    }

    return telegram.MainButton.show();
  };

  return {
    onClose,
    telegram,
    user: telegram.initDataUnsafe?.user,
    onToggleButton,
  };
};
