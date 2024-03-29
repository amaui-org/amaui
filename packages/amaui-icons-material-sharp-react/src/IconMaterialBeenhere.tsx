import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeenhere = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Beenhere'

      short_name='Beenhere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 23-8-6V2h16v15Zm0-2.5 6-4.5V4H6v12ZM10.95 15l5.65-5.65-1.4-1.45-4.25 4.25-2.1-2.1-1.45 1.4ZM12 4H6h12Z"/>
    </Icon>
  );
});

IconMaterialBeenhere.displayName = 'AmauiIconMaterialBeenhere';

export default IconMaterialBeenhere;
