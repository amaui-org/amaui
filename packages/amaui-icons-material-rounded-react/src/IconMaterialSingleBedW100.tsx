import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSingleBedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedW100'

      short_name='SingleBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 15.7v-2.9q0-.625.438-1.063.437-.437 1.062-.437h.5V9.1q0-.625.438-1.063Q8.175 7.6 8.8 7.6h6.4q.625 0 1.062.437.438.438.438 1.063v2.2h.5q.625 0 1.062.437.438.438.438 1.063v2.9H18l-.275 1.825q-.025.075-.088.125-.062.05-.137.05-.075 0-.137-.05-.063-.05-.088-.125L17 15.7H7l-.275 1.825q-.025.075-.087.125-.063.05-.138.05-.075 0-.137-.05-.063-.05-.088-.125L6 15.7Zm7.05-4.4H16V9.1q0-.35-.225-.575Q15.55 8.3 15.2 8.3h-2.85ZM8 11.3h3.65v-3H8.8q-.35 0-.575.225Q8 8.75 8 9.1ZM6 15h12v-2.2q0-.35-.225-.575Q17.55 12 17.2 12H6.8q-.35 0-.575.225Q6 12.45 6 12.8Zm12 0H6h12Z"/>
    </Icon>
  );
});

IconMaterialSingleBedW100.displayName = 'AmauiIconMaterialSingleBedW100';

export default IconMaterialSingleBedW100;
