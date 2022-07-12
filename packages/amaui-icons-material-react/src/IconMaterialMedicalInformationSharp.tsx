import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMedicalInformationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MedicalInformationSharp'
      short_name='MedicalInformation'

      {...props}
    >
      <path d="M7 18H9V16H11V14H9V12H7V14H5V16H7ZM13 14.5H19V13H13ZM13 17.5H17V16H13ZM15 7H22V22H2V7H9V2H15ZM11 9H13V4H11ZM12 14.5ZM9 9H4V20H20V9H15V11H9Z"/>
    </Icon>
  )
});

export default IconMaterialMedicalInformationSharp;
