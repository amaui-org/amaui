import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarRepairFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRepairFilled'

      short_name='CarRepair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-3H4v-2h16v2h-7v3ZM9 11.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.425 9.5 9 9.5t-.712.287Q8 10.075 8 10.5t.288.712q.287.288.712.288Zm6 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.425 9.5 15 9.5t-.712.287Q14 10.075 14 10.5t.288.712q.287.288.712.288ZM5 16V8.6L6.925 3h10.15L19 8.6V16h-2v-2H7v2Zm2.65-9h8.7l-.7-2h-7.3Z"/>
    </Icon>
  );
});

IconMaterialCarRepairFilled.displayName = 'AmauiIconMaterialCarRepairFilled';

export default IconMaterialCarRepairFilled;
