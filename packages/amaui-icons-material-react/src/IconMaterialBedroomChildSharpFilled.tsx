import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedroomChildSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomChildSharpFilled'
      short_name='BedroomChild'

      {...props}
    >
      <path d="M6 17H7.5V15.5H16.5V17H18V10.65H16.5V7H7.5V10.65H6ZM9 10.5V8.5H15V10.5ZM7.5 14V12H16.5V14ZM2 22V2H22V22Z"/>
    </Icon>
  )
});

export default IconMaterialBedroomChildSharpFilled;
