import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4W100Filled'

      short_name='Brightness4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.5-2.8-2.8H5.3v-3.9L2.5 12l2.8-2.8V5.3h3.9L12 2.5l2.8 2.8h3.9v3.9l2.8 2.8-2.8 2.8v3.9h-3.9Zm-.025-3.5q2.5 0 4.263-1.75Q18 14.5 18 12t-1.762-4.25Q14.475 6 11.975 6q-.65 0-1.262.15-.613.15-1.213.4 1.625.725 2.562 2.212Q13 10.25 13 12t-.938 3.238q-.937 1.487-2.562 2.212.6.25 1.213.4.612.15 1.262.15Z"/>
    </Icon>
  );
});

IconMaterialBrightness4W100Filled.displayName = 'AmauiIconMaterialBrightness4W100Filled';

export default IconMaterialBrightness4W100Filled;
