import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewList'

      short_name='ViewList'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z" opacity=".3"/><path d="M3,5v14h18V5H3z M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z"/>
    </Icon>
  );
});

IconMaterialViewList.displayName = 'AmauiIconMaterialViewList';

export default IconMaterialViewList;
