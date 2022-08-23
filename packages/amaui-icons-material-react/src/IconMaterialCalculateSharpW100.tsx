import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalculateSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalculateSharpW100'
      short_name='Calculate'

      {...props}
    >
      <path d="M6.65 8.8H10.85V8.1H6.65ZM13.4 16.85H17.6V16.15H13.4ZM13.4 14.35H17.6V13.65H13.4ZM8.4 17.6H9.1V15.6H11.1V14.9H9.1V12.9H8.4V14.9H6.4V15.6H8.4ZM14.1 10.35 15.5 8.95 16.9 10.35 17.4 9.85 16 8.45 17.4 7.05 16.9 6.55 15.5 7.95 14.1 6.55 13.6 7.05 15 8.45 13.6 9.85ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialCalculateSharpW100.displayName = 'AmauiIconMaterialCalculateSharpW100';

export default IconMaterialCalculateSharpW100;
