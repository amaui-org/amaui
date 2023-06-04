import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShadesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesW100Filled'

      short_name='VerticalShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.675 19h4.65V5h-4.65Zm-6.025.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesW100Filled.displayName = 'AmauiIconMaterialVerticalShadesW100Filled';

export default IconMaterialVerticalShadesW100Filled;
