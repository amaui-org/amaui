import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtmSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmSharpFilled'
      short_name='Atm'

      {...props}
    >
      <path d="M10.375 15V10.5H8.125V9H14.125V10.5H11.875V15ZM2 15V9H7V15H5.5V13.5H3.5V15ZM3.5 12H5.5V10.5H3.5ZM15.5 15V9H22V15H20.5V10.5H19.5V14H18V10.5H17V15Z"/>
    </Icon>
  );
});

IconMaterialAtmSharpFilled.displayName = 'AmauiIconMaterialAtmSharpFilled';

export default IconMaterialAtmSharpFilled;
