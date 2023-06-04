import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4W100'

      short_name='Brightness4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.5-2.8-2.8H5.3v-3.9L2.5 12l2.8-2.8V5.3h3.9L12 2.5l2.8 2.8h3.9v3.9l2.8 2.8-2.8 2.8v3.9h-3.9Zm0-9.5Zm0 8.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Zm-.025-2.5q2.5 0 4.263-1.75Q18 14.5 18 12t-1.762-4.25Q14.475 6 11.975 6q-.65 0-1.262.15-.613.15-1.213.4 1.625.725 2.562 2.212Q13 10.25 13 12t-.938 3.238q-.937 1.487-2.562 2.212.6.25 1.213.4.612.15 1.262.15Z"/>
    </Icon>
  );
});

IconMaterialBrightness4W100.displayName = 'AmauiIconMaterialBrightness4W100';

export default IconMaterialBrightness4W100;
