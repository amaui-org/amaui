import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickreplyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyFilled'

      short_name='Quickreply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 23v-5h-2v-6h5l-1.7 4h2.2ZM2 22V2h20v8h-7v8H6Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyFilled.displayName = 'AmauiIconMaterialQuickreplyFilled';

export default IconMaterialQuickreplyFilled;
