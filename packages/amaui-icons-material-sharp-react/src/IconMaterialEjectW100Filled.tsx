import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEjectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectW100Filled'

      short_name='Eject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.6 14.55 12 6.5l5.4 8.05Zm-.1 3.6v-.6h11v.6Z"/>
    </Icon>
  );
});

IconMaterialEjectW100Filled.displayName = 'AmauiIconMaterialEjectW100Filled';

export default IconMaterialEjectW100Filled;
