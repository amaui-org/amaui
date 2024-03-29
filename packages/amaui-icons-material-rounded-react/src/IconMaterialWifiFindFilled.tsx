import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiFindFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFindFilled'

      short_name='WifiFind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.9 19.3-1.875-1.85q-.45.275-.95.413Q17.575 18 17 18q-1.7 0-2.85-1.15Q13 15.7 13 14q0-1.7 1.15-2.85Q15.3 10 17 10q1.7 0 2.85 1.15Q21 12.3 21 14q0 .575-.137 1.075-.138.5-.413.95L22.3 17.9q.275.275.288.687.012.413-.288.713-.275.275-.7.275-.425 0-.7-.275ZM17 16q.85 0 1.425-.575Q19 14.85 19 14q0-.85-.575-1.425Q17.85 12 17 12q-.85 0-1.425.575Q15 13.15 15 14q0 .85.575 1.425Q16.15 16 17 16Zm-5.025 4.125q-.425 0-.762-.125-.338-.125-.638-.425l-9.2-9.225q-.3-.3-.437-.65Q.8 9.35.825 8.975.85 8.6 1 8.262q.15-.337.45-.587 2.2-1.725 4.862-2.7Q8.975 4 12 4t5.688.975q2.662.975 4.862 2.7.3.25.45.587.15.338.175.713.025.375-.125.737-.15.363-.425.663l-.5.5Q21.375 9.6 20.062 8.8 18.75 8 17 8q-2.5 0-4.25 1.75T11 14q0 1.725.812 3.062.813 1.338 2.038 2.063l-.45.45q-.325.325-.662.437-.338.113-.763.113Z"/>
    </Icon>
  );
});

IconMaterialWifiFindFilled.displayName = 'AmauiIconMaterialWifiFindFilled';

export default IconMaterialWifiFindFilled;
