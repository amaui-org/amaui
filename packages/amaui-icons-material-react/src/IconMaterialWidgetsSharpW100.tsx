import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWidgetsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsSharpW100'
      short_name='Widgets'

      {...props}
    >
      <path d="M16.2 11.65 12.4 7.85 16.2 4.05 20 7.85ZM5.1 10.5V5.1H10.5V10.5ZM13.5 18.9V13.5H18.9V18.9ZM5.1 18.9V13.5H10.5V18.9ZM5.8 9.8H9.8V5.8H5.8ZM16.225 10.7 19.05 7.875 16.225 5.05 13.4 7.875ZM14.2 18.2H18.2V14.2H14.2ZM5.8 18.2H9.8V14.2H5.8ZM9.8 9.8ZM13.4 7.875ZM9.8 14.2ZM14.2 14.2Z"/>
    </Icon>
  );
});

IconMaterialWidgetsSharpW100.displayName = 'AmauiIconMaterialWidgetsSharpW100';

export default IconMaterialWidgetsSharpW100;
