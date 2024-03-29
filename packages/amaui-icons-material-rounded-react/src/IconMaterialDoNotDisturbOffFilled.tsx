import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffFilled'

      short_name='DoNotDisturbOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.35 17.5-4.5-4.5H16q.425 0 .712-.288Q17 12.425 17 12t-.275-.713q-.275-.287-.7-.287H13.85L6.5 3.65q1.225-.8 2.613-1.225Q10.5 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.5-.425 2.887-.425 1.388-1.225 2.613ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.5.425-2.888Q2.85 7.725 3.65 6.5L2.075 4.925q-.3-.3-.287-.713.012-.412.287-.687.3-.3.725-.3t.7.3l17 16.975q.3.3.288.712-.013.413-.288.688-.3.3-.725.3t-.7-.3L17.5 20.35q-1.225.8-2.612 1.225Q13.5 22 12 22Zm-1.85-9-2-2H8q-.425 0-.713.287Q7 11.575 7 12t.275.712q.275.288.7.288Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffFilled.displayName = 'AmauiIconMaterialDoNotDisturbOffFilled';

export default IconMaterialDoNotDisturbOffFilled;
