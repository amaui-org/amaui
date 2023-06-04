import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBungalowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowW100'

      short_name='Bungalow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 19.7v-6.975l-1.225 1.95-.6-.35L12 5.45l5.5 8.875-.6.35-1.2-1.925v6.95ZM9 19h2.3v-2.7h1.4V19H15v-7.375L12 6.8l-3 4.8Zm2.3-5v-1.4h1.4V14ZM9 19h6-6Z"/>
    </Icon>
  );
});

IconMaterialBungalowW100.displayName = 'AmauiIconMaterialBungalowW100';

export default IconMaterialBungalowW100;
