import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChromecastDeviceRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromecastDeviceRoundedW100'
      short_name='ChromecastDevice'

      {...props}
    >
      <path d="M18.4 14v-4h2.4v4ZM7.2 16.2q-1.5 0-2.75-.9T3.2 13.2v-2.4q0-1.2 1.25-2.1 1.25-.9 2.75-.9.85 0 1.437.2.588.2 1.088.4.375.175.725.288.35.112.75.112h6.2v6.4h-6.2q-.4 0-.75.112-.35.113-.725.288-.5.2-1.088.4-.587.2-1.437.2Zm-2.8-3.7h.8q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-.8q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Z"/>
    </Icon>
  );
});

IconMaterialChromecastDeviceRoundedW100.displayName = 'AmauiIconMaterialChromecastDeviceRoundedW100';

export default IconMaterialChromecastDeviceRoundedW100;
