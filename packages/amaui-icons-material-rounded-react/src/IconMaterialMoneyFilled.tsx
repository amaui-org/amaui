import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoneyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyFilled'

      short_name='Money'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 16h3q.425 0 .712-.288Q19 15.425 19 15V9q0-.425-.288-.713Q18.425 8 18 8h-3q-.425 0-.712.287Q14 8.575 14 9v6q0 .425.288.712.287.288.712.288Zm1-2v-4h1v4Zm-7 2h3q.425 0 .713-.288Q13 15.425 13 15V9q0-.425-.287-.713Q12.425 8 12 8H9q-.425 0-.712.287Q8 8.575 8 9v6q0 .425.288.712Q8.575 16 9 16Zm1-2v-4h1v4Zm-4 2q.425 0 .713-.288Q7 15.425 7 15V9q0-.425-.287-.713Q6.425 8 6 8t-.713.287Q5 8.575 5 9v6q0 .425.287.712Q5.575 16 6 16Zm-2 4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialMoneyFilled.displayName = 'AmauiIconMaterialMoneyFilled';

export default IconMaterialMoneyFilled;
