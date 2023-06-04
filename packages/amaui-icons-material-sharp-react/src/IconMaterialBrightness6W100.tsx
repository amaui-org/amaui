import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness6W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness6W100'

      short_name='Brightness6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.5-2.8-2.8H5.3v-3.9L2.5 12l2.8-2.8V5.3h3.9L12 2.5l2.8 2.8h3.9v3.9l2.8 2.8-2.8 2.8v3.9h-3.9Zm0-3.5q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Zm0 2.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Zm0-8.5Z"/>
    </Icon>
  );
});

IconMaterialBrightness6W100.displayName = 'AmauiIconMaterialBrightness6W100';

export default IconMaterialBrightness6W100;
