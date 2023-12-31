import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiNotificationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiNotificationW100'

      short_name='WifiNotification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100q-24 0-42-17t-18-43h120q0 26-17 43t-43 17ZM266-242v-306q0-79 51-138.5T446-760v-28q0-15 9.5-24.5T480-822q15 0 24.5 9.5T514-788v28q22 4 42 12t38 19q-9 3-17.5 5.5T559-717q-18-8-38-12.5t-41-4.5q-78 0-132 54t-54 132v306h466q5.95 0 9.975 4.035 4.025 4.035 4.025 10T769.975-218q-4.025 4-9.975 4H200q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h66Zm214-246Zm213-148q-48 0-91.852 16.071Q557.296-603.857 522-576q-5 4-11 4.5t-11-4.5q-5-5-4-10.5t6-9.5q39-32 87.913-50t104-18Q749-664 797.5-646t87.5 50q5 4 6 9.5t-4 10.5q-5 5-11 4.5t-11-4.5q-35.276-27.857-79.638-43.929Q741-636 693-636Zm.814 120Q670-516 648-509.5T607-490q-5 4-11 4t-10-5q-4-5-3.5-10t5.5-9q23-16 49-25t56-9q30 0 57 9t50 25q5 4 6 9t-4 10q-5 5-10.829 5-5.828 0-11.171-4-19.278-13-40.825-19.5-21.546-6.5-45.361-6.5Zm.221 138Q683-378 675.5-385.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialWifiNotificationW100.displayName = 'AmauiIconMaterialWifiNotificationW100';

export default IconMaterialWifiNotificationW100;
