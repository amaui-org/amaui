import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderClearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderClearW100'

      short_name='BorderClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 16v-1h1v1Zm0-8v-1h1v1Zm0-8v-1h1v1Zm4 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 16v-1h1v1Zm0-8v-1h1v1Zm0-8v-1h1v1Zm4 16v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderClearW100.displayName = 'AmauiIconMaterialBorderClearW100';

export default IconMaterialBorderClearW100;
