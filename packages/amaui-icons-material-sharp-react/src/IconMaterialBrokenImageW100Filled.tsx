import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrokenImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageW100Filled'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 13.5-1.7-1.7V4.3h15.4v6.9L18 9.5l-4 4-4-4Zm-1.7 6.2v-6.9L6 14.5l4-4 4 4 4-4 1.7 1.7v7.5Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageW100Filled.displayName = 'AmauiIconMaterialBrokenImageW100Filled';

export default IconMaterialBrokenImageW100Filled;
