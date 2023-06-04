import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYen'

      short_name='CurrencyYen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.425 0-.712-.288Q11 20.425 11 20v-3H7q-.425 0-.713-.288Q6 16.425 6 16t.287-.713Q6.575 15 7 15h4v-2H7q-.425 0-.713-.288Q6 12.425 6 12t.287-.713Q6.575 11 7 11h3.075l-4.1-6.475q-.325-.5-.037-1.013Q6.225 3 6.825 3q.275 0 .5.125.225.125.35.35L12 10.3l4.325-6.825q.125-.225.35-.35.225-.125.5-.125.6 0 .887.525.288.525-.037 1.025l-4.1 6.45H17q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 13 17 13h-4v2h4q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 17 17 17h-4v3q0 .425-.287.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYen.displayName = 'AmauiIconMaterialCurrencyYen';

export default IconMaterialCurrencyYen;
