import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIron = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Iron'

      short_name='Iron'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18v-3q0-1.65 1.175-2.825Q4.35 11 6 11h9V9H9v1H7V7h10v7h1V6h4v2h-2v8h-3v2Zm2-2h11v-3H6q-.825 0-1.412.587Q4 14.175 4 15Zm11 0v-3 3Z"/>
    </Icon>
  );
});

IconMaterialIron.displayName = 'AmauiIconMaterialIron';

export default IconMaterialIron;
