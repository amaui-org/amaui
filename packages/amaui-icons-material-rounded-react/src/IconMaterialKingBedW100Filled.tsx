import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKingBedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedW100Filled'

      short_name='KingBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 15.7v-2.9q0-.625.437-1.063.438-.437 1.063-.437h.5V9.1q0-.625.438-1.063Q6.175 7.6 6.8 7.6h10.4q.625 0 1.062.437.438.438.438 1.063v2.2h.5q.625 0 1.063.437.437.438.437 1.063v2.9H20l-.275 1.825q-.025.075-.087.125-.063.05-.138.05-.075 0-.137-.05-.063-.05-.088-.125L19 15.7H5l-.275 1.825q-.025.075-.087.125-.063.05-.138.05-.075 0-.138-.05-.062-.05-.087-.125L4 15.7Zm9.05-4.4H18V9.1q0-.35-.225-.575Q17.55 8.3 17.2 8.3h-4.85ZM6 11.3h5.65v-3H6.8q-.35 0-.575.225Q6 8.75 6 9.1Z"/>
    </Icon>
  );
});

IconMaterialKingBedW100Filled.displayName = 'AmauiIconMaterialKingBedW100Filled';

export default IconMaterialKingBedW100Filled;
