import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHighQualitySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualitySharpW100'
      short_name='HighQuality'

      {...props}
    >
      <path d="M6.8 14.6H7.5V12.6H10.3V14.6H11V9.4H10.3V11.9H7.5V9.4H6.8ZM14.75 16.1H15.45V14.6H17.2V9.4H13V14.6H14.75ZM13.7 13.9V10.1H16.5V13.9ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialHighQualitySharpW100.displayName = 'AmauiIconMaterialHighQualitySharpW100';

export default IconMaterialHighQualitySharpW100;
