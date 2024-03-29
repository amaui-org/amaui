import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStormFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StormFilled'

      short_name='Storm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.575 22q-.575 0-.863-.387-.287-.388-.112-.963.35-1.275.5-2.55.15-1.275.05-2.55-.95 2.05-2.9 3.25Q14.3 20 12 20q-2.1 0-3.8-.988-1.7-.987-2.9-2.637t-1.85-3.788Q2.8 10.45 2.8 8.15q0-1.425.163-2.813.162-1.387.587-2.737.075-.25.325-.425T4.4 2q.575 0 .875.4.3.4.125.975-.35 1.25-.5 2.512-.15 1.263-.05 2.563.975-2.075 2.913-3.262Q9.7 4 12 4q2.1 0 3.8.987 1.7.988 2.9 2.625 1.2 1.638 1.85 3.775.65 2.138.65 4.463 0 1.4-.162 2.787-.163 1.388-.588 2.738-.075.275-.325.45t-.55.175ZM12 16q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0-2q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialStormFilled.displayName = 'AmauiIconMaterialStormFilled';

export default IconMaterialStormFilled;
