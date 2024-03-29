import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriceChange = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceChange'

      short_name='PriceChange'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16h1q0 .425.288.712Q8.575 17 9 17t.713-.288Q10 16.425 10 16h1q.425 0 .713-.288Q12 15.425 12 15v-3q0-.425-.287-.713Q11.425 11 11 11H8v-1h3.025q.425 0 .7-.288Q12 9.425 12 9t-.287-.713Q11.425 8 11 8h-1q0-.425-.287-.713Q9.425 7 9 7t-.712.287Q8 7.575 8 8H7q-.425 0-.713.287Q6 8.575 6 9v3q0 .425.287.712Q6.575 13 7 13h3v1H6.975q-.425 0-.7.287Q6 14.575 6 15t.287.712Q6.575 16 7 16Zm8.65-.1q.15.15.35.15.2 0 .35-.15L18 14.25h-4ZM14 10h4l-1.65-1.65Q16.2 8.2 16 8.2q-.2 0-.35.15ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialPriceChange.displayName = 'AmauiIconMaterialPriceChange';

export default IconMaterialPriceChange;
