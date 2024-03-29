import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdOff'

      short_name='AdOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856V329l-37-37q-11-11-11-27.5T84 236q11-11 28-11t28 11l680 680q12 12 11.5 28T819 972q-12 11-28 11.5T763 972l-36-36H200Zm0-80h447L200 409v447Zm640-33-80-80V416H433L233 216h527q33 0 56.5 23.5T840 296v527Z"/>
    </Icon>
  );
});

IconMaterialAdOff.displayName = 'AmauiIconMaterialAdOff';

export default IconMaterialAdOff;
