import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightShelter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelter'

      short_name='NightShelter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12Zm2-2h12v-9l-6-4.5L6 10Zm1-1h1v-1.5h8V18h1v-4q0-.825-.587-1.413Q15.825 12 15 12h-3.5v3.5H8V11H7Zm2.75-3q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363ZM6 19h12H6Z"/>
    </Icon>
  );
});

IconMaterialNightShelter.displayName = 'AmauiIconMaterialNightShelter';

export default IconMaterialNightShelter;
