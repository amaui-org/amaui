import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardTravelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelW100'

      short_name='CardTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16.45V19h16v-2.55ZM8.3 7.3v-3h7.4v3h5v12.4H3.3V7.3ZM4 14.55h16V8h-4.3v1.5H15V8H9v1.5h-.7V8H4ZM9 7.3h6V5H9ZM4 19V8v1.5V8v1.5V8v11Z"/>
    </Icon>
  );
});

IconMaterialCardTravelW100.displayName = 'AmauiIconMaterialCardTravelW100';

export default IconMaterialCardTravelW100;
