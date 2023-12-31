import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPetSuppliesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PetSuppliesW100'

      short_name='PetSupplies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-132q-38 0-63-25t-25-63q0-21-3-35.5T278-278q-8-8-22.5-12t-35.5-4q-38 0-63-24t-25-62q0-38 25-63t63-25q14 0 27 3.5t21 10.5q14 11 32.5 11t31.5-13l168-168q13-13 15-33t-9-35q-6-9-10-21.5t-4-26.5q0-38 25-63t63-25q38 0 63 25t25 63q0 21 3 35.5t11 22.5q8 8 22.5 11t35.5 3q38 0 63 25t25 63q0 38-25 63t-63 25q-14 0-26.5-4T692-506q-15-10-34-8.5T626-500L460-334q-13 13-15 30.5t7 33.5q5 9 10.5 22.5T468-220q0 38-25 63t-63 25Zm0-28q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-15-23-13-51t23-49l166-166q21-21 49-22.5t51 12.5q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-27 0-46.5-5T662-662q-12-12-17-31.5t-5-46.5q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 9 2.5 17.5T530-706q15 23 13 51t-23 49L354-440q-21 21-49 22.5T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 42t43 16q27 0 46.5 6t31.5 18q12 12 17 32.5t5 47.5q0 26 17 42t43 16Zm100-320Z"/>
    </Icon>
  );
});

IconMaterialPetSuppliesW100.displayName = 'AmauiIconMaterialPetSuppliesW100';

export default IconMaterialPetSuppliesW100;
