import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicalServicesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalServicesSharp'
      short_name='MedicalServices'

      {...props}
    >
      <path d="M11 18H13V15H16V13H13V10H11V13H8V15H11ZM2 22V6H8V2H16V6H22V22ZM10 6H14V4H10ZM4 20H20V8H4ZM4 20V8Z"/>
    </Icon>
  );
});

export default IconMaterialMedicalServicesSharp;
