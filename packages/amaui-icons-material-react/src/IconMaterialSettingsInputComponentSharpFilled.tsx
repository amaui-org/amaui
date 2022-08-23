import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsInputComponentSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponentSharpFilled'
      short_name='SettingsInputComponent'

      {...props}
    >
      <path d="M19 23V18.8H17V14H23V18.8H21V23ZM11 23V18.8H9V14H15V18.8H13V23ZM3 23V18.8H1V14H7V18.8H5V23ZM1 12V6H3V2Q3 1.575 3.288 1.287Q3.575 1 4 1Q4.425 1 4.713 1.287Q5 1.575 5 2V6H7V12ZM9 12V6H11V2Q11 1.575 11.288 1.287Q11.575 1 12 1Q12.425 1 12.713 1.287Q13 1.575 13 2V6H15V12ZM17 12V6H19V2Q19 1.575 19.288 1.287Q19.575 1 20 1Q20.425 1 20.712 1.287Q21 1.575 21 2V6H23V12Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponentSharpFilled.displayName = 'AmauiIconMaterialSettingsInputComponentSharpFilled';

export default IconMaterialSettingsInputComponentSharpFilled;
