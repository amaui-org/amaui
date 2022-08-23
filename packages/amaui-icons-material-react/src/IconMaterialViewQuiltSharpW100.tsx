import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewQuiltSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltSharpW100'
      short_name='ViewQuilt'

      {...props}
    >
      <path d="M4.8 6.3H19.2V17.7H4.8ZM10 7V11.65H18.5V7ZM18.5 12.35H14.6V17H18.5ZM10 12.35V17H13.9V12.35ZM5.5 17H9.3V7H5.5Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltSharpW100.displayName = 'AmauiIconMaterialViewQuiltSharpW100';

export default IconMaterialViewQuiltSharpW100;
