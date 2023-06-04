import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBungalowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowW100Filled'

      short_name='Bungalow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 19.7v-6.975l-1.225 1.95-.6-.35L12 5.45l5.5 8.875-.6.35-1.2-1.925v6.95h-3v-3.4h-1.4v3.4Zm3-5.7h1.4v-1.4h-1.4Z"/>
    </Icon>
  );
});

IconMaterialBungalowW100Filled.displayName = 'AmauiIconMaterialBungalowW100Filled';

export default IconMaterialBungalowW100Filled;
