import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewListTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListTwoTone'
      short_name='ViewList'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z" opacity=".3"/><path d="M3,5v14h18V5H3z M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z"/>
    </Icon>
  );
});

IconMaterialViewListTwoTone.displayName = 'AmauiIconMaterialViewListTwoTone';

export default IconMaterialViewListTwoTone;
