import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalAtmSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmSharpW100'
      short_name='LocalAtm'

      {...props}
    >
      <path d="M11.65 16.35H12.35V15.35H14.35V11.65H10.35V9.35H14.35V8.65H12.35V7.65H11.65V8.65H9.65V12.35H13.65V14.65H9.65V15.35H11.65ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialLocalAtmSharpW100.displayName = 'AmauiIconMaterialLocalAtmSharpW100';

export default IconMaterialLocalAtmSharpW100;
