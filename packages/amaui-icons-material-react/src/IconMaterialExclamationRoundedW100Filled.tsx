import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExclamationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExclamationRoundedW100Filled'
      short_name='Exclamation'

      {...props}
    >
      <path d="M11.65 14.1V6.4H12.35V14.1ZM11.65 17.6V16.9H12.35V17.6Z"/>
    </Icon>
  );
});

IconMaterialExclamationRoundedW100Filled.displayName = 'AmauiIconMaterialExclamationRoundedW100Filled';

export default IconMaterialExclamationRoundedW100Filled;
