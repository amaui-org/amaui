import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOff'

      short_name='DoNotDisturbOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.85 13-2-2H17v2Zm3.925 9.625L17.5 20.35q-1.225.8-2.612 1.225Q13.5 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.5.425-2.888Q2.85 7.725 3.65 6.5L1.375 4.225 2.8 2.8l18.4 18.4Zm.575-5.125-1.45-1.45q.55-.95.825-1.963Q20 13.075 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.075 0-2.087.275Q8.9 4.55 7.95 5.1L6.5 3.65q1.225-.8 2.613-1.225Q10.5 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.5-.425 2.887-.425 1.388-1.225 2.613Zm-4.3 1.4-5.9-5.9H7v-2h1.15L5.1 7.95q-.55.95-.825 1.962Q4 10.925 4 12q0 3.325 2.338 5.663Q8.675 20 12 20q1.075 0 2.088-.275 1.012-.275 1.962-.825Zm-2.2-7.9Zm-3.275 2.425Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOff.displayName = 'AmauiIconMaterialDoNotDisturbOff';

export default IconMaterialDoNotDisturbOff;
