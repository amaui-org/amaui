import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewQuiltTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltTwoTone'
      short_name='ViewQuilt'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M8.33,17H5V7h3.33V17z M13.67,17h-3.33v-4h3.33V17z M19,17h-3.33v-4H19V17z M19,11h-8.67V7H19V11z" opacity=".3"/><path d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33v-4h3.33V17z M19,17h-3.33v-4H19V17z M19,11h-8.67V7H19V11z"/>
    </Icon>
  );
});

IconMaterialViewQuiltTwoTone.displayName = 'AmauiIconMaterialViewQuiltTwoTone';

export default IconMaterialViewQuiltTwoTone;
