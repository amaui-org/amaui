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
      <path d="M3 19V5h18v14ZM5 9h2V7H5Zm4 0h10V7H9Zm0 4h10v-2H9Zm0 4h10v-2H9Zm-4 0h2v-2H5Zm0-4h2v-2H5Z"/>
    </Icon>
  );
});

IconMaterialViewList.displayName = 'AmauiIconMaterialViewList';

export default IconMaterialViewList;
