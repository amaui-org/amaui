import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardW100Filled'

      short_name='AddCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 10.95h16v-1.9H4Zm15.65 10.4v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3ZM3.3 18.7V5.3h17.4v7.35h-1.05q-2.075 0-3.537 1.462-1.463 1.463-1.463 3.538v1.05Z"/>
    </Icon>
  );
});

IconMaterialAddCardW100Filled.displayName = 'AmauiIconMaterialAddCardW100Filled';

export default IconMaterialAddCardW100Filled;
