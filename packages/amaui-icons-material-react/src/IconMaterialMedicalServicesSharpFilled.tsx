import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicalServicesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesSharpFilled'
      short_name='MedicalServices'

      {...props}
    >
      <path d="M11 18H13V15H16V13H13V10H11V13H8V15H11ZM2 22V6H8V2H16V6H22V22ZM10 6H14V4H10Z"/>
    </Icon>
  );
});

IconMaterialMedicalServicesSharpFilled.displayName = 'AmauiIconMaterialMedicalServicesSharpFilled';

export default IconMaterialMedicalServicesSharpFilled;
