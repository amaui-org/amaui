import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness7W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness7W100Filled'

      short_name='Brightness7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.5-2.8-2.8H5.3v-3.9L2.5 12l2.8-2.8V5.3h3.9L12 2.5l2.8 2.8h3.9v3.9l2.8 2.8-2.8 2.8v3.9h-3.9Zm0-3.5q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Zm0-.7q-2.2 0-3.75-1.55Q6.7 14.2 6.7 12t1.55-3.75Q9.8 6.7 12 6.7t3.75 1.55Q17.3 9.8 17.3 12t-1.55 3.75Q14.2 17.3 12 17.3Z"/>
    </Icon>
  );
});

IconMaterialBrightness7W100Filled.displayName = 'AmauiIconMaterialBrightness7W100Filled';

export default IconMaterialBrightness7W100Filled;
