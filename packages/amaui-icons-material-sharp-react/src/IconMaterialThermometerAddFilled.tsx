import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerAddFilled'

      short_name='ThermometerAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-520v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120Zm-40-440h80v-160q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v160Z"/>
    </Icon>
  );
});

IconMaterialThermometerAddFilled.displayName = 'AmauiIconMaterialThermometerAddFilled';

export default IconMaterialThermometerAddFilled;
