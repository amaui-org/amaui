import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxSharpW100Filled'
      short_name='Outbox'

      {...props}
    >
      <path d="M11.65 13.1V8.25L9.4 10.5L8.9 10L12 6.9L15.1 10L14.6 10.5L12.35 8.25V13.1ZM4.3 19.7V4.3H19.7V19.7ZM12 16.8Q12.95 16.8 13.725 16.25Q14.5 15.7 14.8 14.8H19V5H5V14.8H9.2Q9.5 15.7 10.275 16.25Q11.05 16.8 12 16.8Z"/>
    </Icon>
  );
});

IconMaterialOutboxSharpW100Filled.displayName = 'AmauiIconMaterialOutboxSharpW100Filled';

export default IconMaterialOutboxSharpW100Filled;
