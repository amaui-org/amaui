import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedroomParentSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParentSharp'
      short_name='BedroomParent'

      {...props}
    >
      <path d="M5 17H6.5V15.5H17.5V17H19V12L18.25 11.35V7H13Q12.725 7 12.475 7.075Q12.225 7.15 12 7.3Q11.775 7.15 11.525 7.075Q11.275 7 11 7H5.75V11.35L5 12ZM12.75 10.5V8.5H16.75V10.5ZM7.25 10.5V8.5H11.25V10.5ZM6.5 14V12H17.5V14ZM2 22V2H22V22ZM4 20H20V4H4ZM4 20V4V20Z"/>
    </Icon>
  );
});

IconMaterialBedroomParentSharp.displayName = 'AmauiIconMaterialBedroomParentSharp';

export default IconMaterialBedroomParentSharp;
