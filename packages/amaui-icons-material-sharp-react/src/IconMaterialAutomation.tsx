import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutomation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Automation'

      short_name='Automation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-66 0-113-47T80-280q0-66 47-113t113-47q22 0 42 5.5t37 15.5l105-106-109-111q-18-18-26.5-39.5T280-719q0-47 33-84t87-37h160q54 0 87 37t33 84q0 22-8.5 44T645-635L536-525l104 106q17-11 37.5-16t42.5-5q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-22 6-43t17-40L480-468 377-363q11 19 17 40t6 43q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T320-280q0-33-23.5-56.5T240-360q-33 0-56.5 23.5T160-280q0 33 23.5 56.5T240-200Zm480 0q33 0 56.5-23.5T800-280q0-33-23.5-56.5T720-360q-33 0-56.5 23.5T640-280q0 33 23.5 56.5T720-200ZM400-760q-18 0-29 12t-11 28q0 8 3 15t9 13l108 110 108-109q6-6 9-13.5t3-15.5q0-16-11-28t-29-12H400ZM240-280Zm480 0Z"/>
    </Icon>
  );
});

IconMaterialAutomation.displayName = 'AmauiIconMaterialAutomation';

export default IconMaterialAutomation;
