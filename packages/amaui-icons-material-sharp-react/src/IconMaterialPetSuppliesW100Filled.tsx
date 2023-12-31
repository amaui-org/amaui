import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPetSuppliesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PetSuppliesW100Filled'

      short_name='PetSupplies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-132q-38 0-63-25t-25-63q0-21-3-35.5T278-278q-8-8-22.5-12t-35.5-4q-38 0-63-24t-25-62q0-38 25-63t63-25q14 0 27 3.5t21 10.5q14 11 32.5 11t31.5-13l168-168q13-13 15-33t-9-35q-6-9-10-21.5t-4-26.5q0-38 25-63t63-25q38 0 63 25t25 63q0 21 3 35.5t11 22.5q8 8 22.5 11t35.5 3q38 0 63 25t25 63q0 38-25 63t-63 25q-14 0-26.5-4T692-506q-15-10-34-8.5T626-500L460-334q-13 13-15 30.5t7 33.5q5 9 10.5 22.5T468-220q0 38-25 63t-63 25Z"/>
    </Icon>
  );
});

IconMaterialPetSuppliesW100Filled.displayName = 'AmauiIconMaterialPetSuppliesW100Filled';

export default IconMaterialPetSuppliesW100Filled;
