import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsSharpW700'
      short_name='Mms'

      {...props}
    >
      <path d="M5.375 14.225H18.625L14.25 8.425L11.25 12.425L9 9.425ZM1.15 22.85V1.15H22.85V18.85H5.15ZM4.3 15.975 4.575 15.7H19.7V4.3H4.3ZM4.3 15.975V4.3V15.7Z"/>
    </Icon>
  )
});

export default IconMaterialMmsSharpW700;
