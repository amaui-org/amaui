import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5g = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5g'

      short_name='5g'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M16.5,13H19v2h-5V9h7c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2v-4h-4.5V13z"/><path d="M3,13h5v2H3v2h5c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H5V9h5V7H3V13z"/></g></g>
    </Icon>
  );
});

IconMaterial5g.displayName = 'AmauiIconMaterial5g';

export default IconMaterial5g;
