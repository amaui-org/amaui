import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightShelterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelterFilled'

      short_name='NightShelter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12Zm3-3h1v-1.5h8V18h1v-4q0-.825-.587-1.413Q15.825 12 15 12h-3.5v3.5H8V11H7Zm2.75-3q.525 0 .887-.363.363-.362.363-.887t-.363-.887q-.362-.363-.887-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Z"/>
    </Icon>
  );
});

IconMaterialNightShelterFilled.displayName = 'AmauiIconMaterialNightShelterFilled';

export default IconMaterialNightShelterFilled;
