import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyFrancFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyFrancFilled'

      short_name='CurrencyFranc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21q-.425 0-.713-.288Q7 20.425 7 20v-2H6q-.425 0-.713-.288Q5 17.425 5 17t.287-.712Q5.575 16 6 16h1V4q0-.425.287-.713Q7.575 3 8 3h9q.425 0 .712.287Q18 3.575 18 4t-.288.712Q17.425 5 17 5H9v6h7q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 13 16 13H9v3h3q.425 0 .713.288.287.287.287.712t-.287.712Q12.425 18 12 18H9v2q0 .425-.287.712Q8.425 21 8 21Z"/>
    </Icon>
  );
});

IconMaterialCurrencyFrancFilled.displayName = 'AmauiIconMaterialCurrencyFrancFilled';

export default IconMaterialCurrencyFrancFilled;
