import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPharmacySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPharmacySharp'
      short_name='LocalPharmacy'

      {...props}
    >
      <path d="M3 21V19L5 13L3 7V5H15.7L17.15 1L19.5 1.85L18.35 5H21V7L19 13L21 19V21ZM11 17H13V14H16V12H13V9H11V12H8V14H11ZM5.1 19H18.9L16.9 13L18.9 7H5.1L7.1 13ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialLocalPharmacySharp.displayName = 'AmauiIconMaterialLocalPharmacySharp';

export default IconMaterialLocalPharmacySharp;
