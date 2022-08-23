import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsInputComponentSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponentSharp'
      short_name='SettingsInputComponent'

      {...props}
    >
      <path d="M3 23V18.8H1V6H3V2Q3 1.575 3.288 1.287Q3.575 1 4 1Q4.425 1 4.713 1.287Q5 1.575 5 2V6H7V18.8H5V23ZM11 23V18.8H9V6H11V2Q11 1.575 11.288 1.287Q11.575 1 12 1Q12.425 1 12.713 1.287Q13 1.575 13 2V6H15V18.8H13V23ZM19 23V18.8H17V6H19V2Q19 1.575 19.288 1.287Q19.575 1 20 1Q20.425 1 20.712 1.287Q21 1.575 21 2V6H23V18.8H21V23ZM3 8V12H5V8ZM11 8V12H13V8ZM19 8V12H21V8ZM3 17H5V14H3ZM11 17H13V14H11ZM19 17H21V14H19ZM4 13ZM12 13ZM20 13ZM3 12H5H3ZM11 12H13H11ZM19 12H21H19ZM3 14H5ZM11 14H13ZM19 14H21Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponentSharp.displayName = 'AmauiIconMaterialSettingsInputComponentSharp';

export default IconMaterialSettingsInputComponentSharp;
