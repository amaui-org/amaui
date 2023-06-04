import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWineBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WineBarW100Filled'

      short_name='WineBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.25 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.4v-4.65q-2.15-.325-3.325-1.838Q7.15 11 7.15 9V5.05q0-.325.213-.538.212-.212.537-.212h8.2q.325 0 .538.212.212.213.212.538V9q0 2-1.175 3.512-1.175 1.513-3.325 1.838V19h2.4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM7.85 8.65h8.3V5h-8.3Z"/>
    </Icon>
  );
});

IconMaterialWineBarW100Filled.displayName = 'AmauiIconMaterialWineBarW100Filled';

export default IconMaterialWineBarW100Filled;
