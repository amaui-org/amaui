import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInPhone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInPhone'

      short_name='OpenInPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-40q-33 0-56.5-23.5T200-120v-240h80v120h400v-480H280v120h-80v-240q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm126-280H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h286l-35-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L428-348q-11 11-27.5 11.5T372-348q-11-11-11.5-27.5T371-404l35-36ZM280-800h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
});

IconMaterialOpenInPhone.displayName = 'AmauiIconMaterialOpenInPhone';

export default IconMaterialOpenInPhone;
