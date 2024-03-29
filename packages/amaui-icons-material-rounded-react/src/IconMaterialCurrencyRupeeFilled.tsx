import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyRupeeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyRupeeFilled'

      short_name='CurrencyRupee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.15 21q-.2 0-.387-.075-.188-.075-.338-.225L7.4 14.425q-.175-.175-.287-.475Q7 13.65 7 13.4q0-.575.412-.988Q7.825 12 8.4 12h2.1q1.325 0 2.288-.863.962-.862 1.162-2.137H7q-.425 0-.713-.288Q6 8.425 6 8t.287-.713Q6.575 7 7 7h6.65q-.425-.875-1.262-1.438Q11.55 5 10.5 5H7q-.425 0-.713-.288Q6 4.425 6 4t.287-.713Q6.575 3 7 3h10q.425 0 .712.287Q18 3.575 18 4t-.288.712Q17.425 5 17 5h-2.25q.35.425.625.925T15.8 7H17q.425 0 .712.287Q18 7.575 18 8t-.288.712Q17.425 9 17 9h-1.025q-.2 2.125-1.75 3.562Q12.675 14 10.5 14h-.725l5.1 5.3q.45.475.187 1.087Q14.8 21 14.15 21Z"/>
    </Icon>
  );
});

IconMaterialCurrencyRupeeFilled.displayName = 'AmauiIconMaterialCurrencyRupeeFilled';

export default IconMaterialCurrencyRupeeFilled;
