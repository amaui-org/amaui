import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdSharpFilled'
      short_name='Sd'

      {...props}
    >
      <path d="M6 15H11V11.5H7.5V10.5H9.5V11H11V9H6V12.5H9.5V13.5H7.5V13H6ZM13 15H17Q17.425 15 17.712 14.712Q18 14.425 18 14V10Q18 9.575 17.712 9.287Q17.425 9 17 9H13ZM14.5 13.5V10.5H16.5Q16.5 10.5 16.5 10.5Q16.5 10.5 16.5 10.5V13.5Q16.5 13.5 16.5 13.5Q16.5 13.5 16.5 13.5ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialSdSharpFilled.displayName = 'AmauiIconMaterialSdSharpFilled';

export default IconMaterialSdSharpFilled;
