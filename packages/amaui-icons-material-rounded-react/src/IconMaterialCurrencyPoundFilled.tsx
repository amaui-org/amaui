import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyPoundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyPoundFilled'

      short_name='CurrencyPound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.225 21q-.5 0-.862-.363Q6 20.275 6 19.775q0-.25.162-.563.163-.312.463-.612.575-.425 1.275-1.325.7-.9.7-2.275 0-.275-.038-.525-.037-.25-.087-.475H7q-.425 0-.713-.288Q6 13.425 6 13t.287-.713Q6.575 12 7 12h.5q-.525-.825-1.012-1.738Q6 9.35 6 8q0-2.3 1.6-3.9t3.9-1.6q1.425 0 2.575.637 1.15.638 1.9 1.688.3.425.238.9-.063.475-.513.675-.35.15-.737 0-.388-.15-.663-.5-.5-.65-1.212-1.025Q12.375 4.5 11.5 4.5q-1.45 0-2.475 1.025Q8 6.55 8 8q0 1.2.6 2t1.225 2H13q.425 0 .713.287.287.288.287.713t-.287.712Q13.425 14 13 14h-2.475q.05.225.063.475.012.25.012.525 0 1.25-.437 2.25-.438 1-1.063 1.75H14q.65 0 1.113-.238.462-.237.737-.662.275-.425.65-.562.375-.138.725.062.5.25.538.675.037.425-.213.85-.525.875-1.475 1.375-.95.5-2.075.5Z"/>
    </Icon>
  );
});

IconMaterialCurrencyPoundFilled.displayName = 'AmauiIconMaterialCurrencyPoundFilled';

export default IconMaterialCurrencyPoundFilled;
