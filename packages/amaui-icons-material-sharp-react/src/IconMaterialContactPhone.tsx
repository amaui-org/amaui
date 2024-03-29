import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPhone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhone'

      short_name='ContactPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 21V3h24v18Zm2-2h.1q1.05-1.875 2.9-2.938Q6.85 15 9 15t4 1.062q1.85 1.063 2.9 2.938H22V5H2Zm7-5q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm10 4 2-2-1.5-2h-1.65q-.15-.45-.25-.963-.1-.512-.1-1.037 0-.525.1-1.012.1-.488.25-.988h1.65L21 8l-2-2q-1.35 1.05-2.175 2.662Q16 10.275 16 12t.825 3.337Q17.65 16.95 19 18ZM4.55 19h8.9q-.85-.95-2.012-1.475Q10.275 17 9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.712-.288Q8 11.425 8 11t.288-.713Q8.575 10 9 10t.713.287Q10 10.575 10 11t-.287.712Q9.425 12 9 12Zm3 0Z"/>
    </Icon>
  );
});

IconMaterialContactPhone.displayName = 'AmauiIconMaterialContactPhone';

export default IconMaterialContactPhone;
