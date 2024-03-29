import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricCar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricCar'

      short_name='ElectricCar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V8l2.45-7h13.1L21 8v9h-3v-2H6v2ZM5.8 6h12.4l-1.05-3H6.85ZM5 8v5Zm2.5 4q.625 0 1.062-.438Q9 11.125 9 10.5t-.438-1.062Q8.125 9 7.5 9t-1.062.438Q6 9.875 6 10.5t.438 1.062Q6.875 12 7.5 12Zm9 0q.625 0 1.062-.438Q18 11.125 18 10.5t-.438-1.062Q17.125 9 16.5 9t-1.062.438Q15 9.875 15 10.5t.438 1.062Q15.875 12 16.5 12ZM13 23l-6-3h4v-2l6 3h-4ZM5 13h14V8H5Z"/>
    </Icon>
  );
});

IconMaterialElectricCar.displayName = 'AmauiIconMaterialElectricCar';

export default IconMaterialElectricCar;
