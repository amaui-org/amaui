import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyYuan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyYuan'

      short_name='CurrencyYuan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.425 0-.712-.288Q11 20.425 11 20v-6H7q-.425 0-.713-.288Q6 13.425 6 13t.287-.713Q6.575 12 7 12h3.725l-4.75-7.45q-.325-.5-.037-1.025Q6.225 3 6.825 3q.275 0 .5.125.225.125.35.35L12 10.3l4.325-6.825q.125-.225.35-.35.225-.125.5-.125.6 0 .887.525.288.525-.037 1.025L13.275 12H17q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 14 17 14h-4v6q0 .425-.287.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialCurrencyYuan.displayName = 'AmauiIconMaterialCurrencyYuan';

export default IconMaterialCurrencyYuan;
