import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboxSharp'
      short_name='Outbox'

      {...props}
    >
      <path d="M11 14V9.85L9.4 11.45L8 10L12 6L16 10L14.6 11.45L13 9.85V14ZM3 21V3H21V21ZM5 19H19V16H16Q15.25 16.95 14.213 17.475Q13.175 18 12 18Q10.825 18 9.788 17.475Q8.75 16.95 8 16H5ZM12 16Q12.95 16 13.725 15.45Q14.5 14.9 14.8 14H19V5H5V14H9.2Q9.5 14.9 10.275 15.45Q11.05 16 12 16ZM5 19H8Q8.75 19 9.788 19Q10.825 19 12 19Q13.175 19 14.213 19Q15.25 19 16 19H19Z"/>
    </Icon>
  );
});

IconMaterialOutboxSharp.displayName = 'AmauiIconMaterialOutboxSharp';

export default IconMaterialOutboxSharp;
