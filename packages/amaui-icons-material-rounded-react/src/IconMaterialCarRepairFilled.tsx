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
      <path d="M12 22q-.425 0-.712-.288Q11 21.425 11 21v-2H5q-.425 0-.713-.288Q4 18.425 4 18t.287-.712Q4.575 17 5 17h14q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19h-6v2q0 .425-.287.712Q12.425 22 12 22ZM9 11.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.425 9.5 9 9.5t-.712.287Q8 10.075 8 10.5t.288.712q.287.288.712.288Zm6 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.425 9.5 15 9.5t-.712.287Q14 10.075 14 10.5t.288.712q.287.288.712.288ZM6 16q-.425 0-.713-.288Q5 15.425 5 15V8.6l1.65-4.8q.125-.35.412-.575Q7.35 3 7.7 3h8.6q.35 0 .638.225.287.225.412.575L19 8.6V15q0 .425-.288.712Q18.425 16 18 16t-.712-.288Q17 15.425 17 15v-1H7v1q0 .425-.287.712Q6.425 16 6 16Zm1.65-9h8.7l-.7-2h-7.3Z"/>
    </Icon>
  );
});

IconMaterialCarRepairFilled.displayName = 'AmauiIconMaterialCarRepairFilled';

export default IconMaterialCarRepairFilled;
