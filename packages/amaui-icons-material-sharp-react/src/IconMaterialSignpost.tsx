import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignpost = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Signpost'

      short_name='Signpost'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-4H6l-3-3 3-3h5v-2H4V4h7V2h2v2h5l3 3-3 3h-5v2h7v6h-7v4ZM6 8h11.175l1-1-1-1H6Zm.825 8H18v-2H6.825l-1 1ZM6 8V6v2Zm12 8v-2 2Z"/>
    </Icon>
  );
});

IconMaterialSignpost.displayName = 'AmauiIconMaterialSignpost';

export default IconMaterialSignpost;
