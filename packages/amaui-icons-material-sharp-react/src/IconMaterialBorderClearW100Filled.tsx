import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderClearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderClearW100Filled'

      short_name='BorderClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 16v-1h1v1Zm0-8v-1h1v1Zm0-8v-1h1v1Zm4 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 16v-1h1v1Zm0-8v-1h1v1Zm0-8v-1h1v1Zm4 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderClearW100Filled.displayName = 'AmauiIconMaterialBorderClearW100Filled';

export default IconMaterialBorderClearW100Filled;
