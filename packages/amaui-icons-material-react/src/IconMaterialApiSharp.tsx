import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApiSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiSharp'
      short_name='Api'

      {...props}
    >
      <path d="M12 14 10 12 12 10 14 12ZM9.875 8.125 7.375 5.625 12 1 16.625 5.625 14.125 8.125 12 6ZM5.625 16.625 1 12 5.625 7.375 8.125 9.875 6 12 8.125 14.125ZM18.375 16.625 15.875 14.125 18 12 15.875 9.875 18.375 7.375 23 12ZM12 23 7.375 18.375 9.875 15.875 12 18 14.125 15.875 16.625 18.375Z"/>
    </Icon>
  );
});

IconMaterialApiSharp.displayName = 'AmauiIconMaterialApiSharp';

export default IconMaterialApiSharp;
