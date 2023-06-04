import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardTravelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelW100Filled'

      short_name='CardTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V7.3h5v-3h7.4v3h5v12.4ZM9 7.3h6V5H9Zm-5 9.15h16v-1.9H4Z"/>
    </Icon>
  );
});

IconMaterialCardTravelW100Filled.displayName = 'AmauiIconMaterialCardTravelW100Filled';

export default IconMaterialCardTravelW100Filled;
