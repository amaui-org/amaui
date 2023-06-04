import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialApi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Api'

      short_name='Api'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 14-2-2 2-2 2 2ZM9.875 8.125l-2.5-2.5L12 1l4.625 4.625-2.5 2.5L12 6Zm-4.25 8.5L1 12l4.625-4.625 2.5 2.5L6 12l2.125 2.125Zm12.75 0-2.5-2.5L18 12l-2.125-2.125 2.5-2.5L23 12ZM12 23l-4.625-4.625 2.5-2.5L12 18l2.125-2.125 2.5 2.5Z"/>
    </Icon>
  );
});

IconMaterialApi.displayName = 'AmauiIconMaterialApi';

export default IconMaterialApi;
