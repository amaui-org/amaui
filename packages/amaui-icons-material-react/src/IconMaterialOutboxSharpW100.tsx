import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxSharpW100'
      short_name='Outbox'

      {...props}
    >
      <path d="M11.65 13.1V8.25L9.4 10.5L8.9 10L12 6.9L15.1 10L14.6 10.5L12.35 8.25V13.1ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V15.5H15.25Q14.75 16.45 13.887 16.975Q13.025 17.5 12 17.5Q10.975 17.5 10.113 16.975Q9.25 16.45 8.75 15.5H5ZM12 16.8Q12.95 16.8 13.725 16.25Q14.5 15.7 14.8 14.8H19V5H5V14.8H9.2Q9.5 15.7 10.275 16.25Q11.05 16.8 12 16.8ZM5 19H8.75Q9.25 19 10.113 19Q10.975 19 12 19Q13.025 19 13.887 19Q14.75 19 15.25 19H19Z"/>
    </Icon>
  );
});

IconMaterialOutboxSharpW100.displayName = 'AmauiIconMaterialOutboxSharpW100';

export default IconMaterialOutboxSharpW100;
