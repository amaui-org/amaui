import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyRubleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRubleFilled'

      short_name='CurrencyRuble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21q-.425 0-.713-.288Q7 20.425 7 20v-2H6q-.425 0-.713-.288Q5 17.425 5 17t.287-.712Q5.575 16 6 16h1v-2H6q-.425 0-.713-.288Q5 13.425 5 13t.287-.713Q5.575 12 6 12h1V4q0-.425.287-.713Q7.575 3 8 3h5.5q2.3 0 3.9 1.6T19 8.5q0 2.3-1.6 3.9T13.5 14H9v2h3q.425 0 .713.288.287.287.287.712t-.287.712Q12.425 18 12 18H9v2q0 .425-.287.712Q8.425 21 8 21Zm1-9h4.5q1.45 0 2.475-1.025Q17 9.95 17 8.5q0-1.45-1.025-2.475Q14.95 5 13.5 5H9Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRubleFilled.displayName = 'AmauiIconMaterialCurrencyRubleFilled';

export default IconMaterialCurrencyRubleFilled;
