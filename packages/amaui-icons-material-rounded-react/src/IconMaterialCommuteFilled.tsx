import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommuteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommuteFilled'

      short_name='Commute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20q-.425 0-.712-.288Q10 19.425 10 19v-5.225q0-.05.05-.25L11.4 9.65q.125-.275.362-.462Q12 9 12.35 9h7.3q.35 0 .588.188.237.187.362.462l1.35 3.875.05.25V19q0 .425-.288.712Q21.425 20 21 20t-.712-.288Q20 19.425 20 19v-.5h-8v.5q0 .425-.287.712Q11.425 20 11 20Zm1-7.5h8l-.7-2h-6.6Zm1 4q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q13.425 14.5 13 14.5t-.712.287Q12 15.075 12 15.5t.288.712q.287.288.712.288Zm6 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q19.425 14.5 19 14.5t-.712.287Q18 15.075 18 15.5t.288.712q.287.288.712.288ZM4 19.4q0-.15.075-.35.075-.2.2-.325L5 18q-1.25 0-2.125-.875T2 15V7q0-1.65 1.475-2.325Q4.95 4 8.5 4q3.7 0 5.1.65Q15 5.3 15 7v1h-2V7H4v6h5v7H4.6q-.25 0-.425-.175T4 19.4ZM5 16q.425 0 .713-.288Q6 15.425 6 15t-.287-.713Q5.425 14 5 14t-.713.287Q4 14.575 4 15t.287.712Q4.575 16 5 16Z"/>
    </Icon>
  );
});

IconMaterialCommuteFilled.displayName = 'AmauiIconMaterialCommuteFilled';

export default IconMaterialCommuteFilled;
