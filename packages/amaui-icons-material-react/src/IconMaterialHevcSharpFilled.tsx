import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHevcSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HevcSharpFilled'
      short_name='Hevc'

      {...props}
    >
      <path d="M3 15V9H4.5V11H5.5V9H7V15H5.5V12.5H4.5V15ZM17 15V9H21V11H19.5V10.5H18.5V13.5H19.5V13H21V15ZM13 15 12 9H13.5L14.25 13.5L15 9H16.5L15.5 15ZM8 15V9H11.5V10.5H9.5V11H11.5V12.5H9.5V13.5H11.5V15Z"/>
    </Icon>
  );
});

IconMaterialHevcSharpFilled.displayName = 'AmauiIconMaterialHevcSharpFilled';

export default IconMaterialHevcSharpFilled;
