import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartToyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToyW100Filled'

      short_name='SmartToy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 13.7q-.725 0-1.212-.488Q3.6 12.725 3.6 12t.488-1.213Q4.575 10.3 5.3 10.3V7q0-.275.213-.488Q5.725 6.3 6 6.3h4.3q0-.725.488-1.213Q11.275 4.6 12 4.6t1.213.487q.487.488.487 1.213H18q.275 0 .488.212.212.213.212.488v3.3q.725 0 1.213.487.487.488.487 1.213 0 .725-.487 1.212-.488.488-1.213.488V19q0 .275-.212.487-.213.213-.488.213H6q-.275 0-.487-.213Q5.3 19.275 5.3 19ZM9 12.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm6 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-6 4h6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialSmartToyW100Filled.displayName = 'AmauiIconMaterialSmartToyW100Filled';

export default IconMaterialSmartToyW100Filled;
