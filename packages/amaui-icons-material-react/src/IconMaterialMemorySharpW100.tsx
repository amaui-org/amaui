import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMemorySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemorySharpW100'
      short_name='Memory'

      {...props}
    >
      <path d="M9.65 19.1V17.7H6.3V14.35H4.9V13.65H6.3V10.35H4.9V9.65H6.3V6.3H9.65V4.9H10.35V6.3H13.65V4.9H14.35V6.3H17.7V9.65H19.1V10.35H17.7V13.65H19.1V14.35H17.7V17.7H14.35V19.1H13.65V17.7H10.35V19.1ZM7 17H17V7H7ZM10.3 13.7V10.3H13.7V13.7ZM11 13H13V11H11ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialMemorySharpW100.displayName = 'AmauiIconMaterialMemorySharpW100';

export default IconMaterialMemorySharpW100;
