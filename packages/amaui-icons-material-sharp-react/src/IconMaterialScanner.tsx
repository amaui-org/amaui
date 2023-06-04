import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanner = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Scanner'

      short_name='Scanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-8h14.6L3.5 6.9 4.2 5 21 11.15V20Zm2-2h14v-4H5Zm5-1h8v-2h-8Zm-4 0h2v-2H6Zm-1 1v-4 4Z"/>
    </Icon>
  );
});

IconMaterialScanner.displayName = 'AmauiIconMaterialScanner';

export default IconMaterialScanner;
