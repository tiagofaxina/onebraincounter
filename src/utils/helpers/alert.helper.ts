import DropdownAlert from 'react-native-dropdownalert';
import { DropdownAlertType } from 'react-native-dropdownalert';

type ShowConfig = {
  type: DropdownAlertType;
  title: string;
  message?: string;
  interval?: number;
};

export class AlertHelper {
  static dropDown: DropdownAlert;
  static onClose: () => void;

  static setDropDown(dropDown: DropdownAlert) {
    this.dropDown = dropDown;
  }

  static show({ type, title, message = '', interval = 5 }: ShowConfig) {
    if (this.dropDown) {
      this.dropDown.alertWithType(
        type,
        title,
        message,
        undefined,
        interval * 500,
      );
    }
  }

  static setOnClose(onClose: () => void) {
    this.onClose = onClose;
  }

  static invokeOnClose() {
    if (typeof this.onClose === 'function') {
      this.onClose();
    }
  }
}
