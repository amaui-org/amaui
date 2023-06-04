import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCookieOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOffW100Filled'

      short_name='CookieOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M853 587q-4 52-20 99t-42 89L277 261q50-32 108-48t121-11q11 1 19.5 10t9.5 21q7 72 51.5 114.5T707 399q11 2 18.5 10t8.5 20q3 42 30 75t63 47q12 5 19.5 15t6.5 21Zm-513 99q21 0 35.5-15t14.5-35q0-21-14.5-35.5T340 586q-20 0-35 14.5T290 636q0 20 15 35t35 15Zm502 292L705 841q-46 39-103 61t-122 22q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-65 22-122t61-103L100 236q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialCookieOffW100Filled.displayName = 'AmauiIconMaterialCookieOffW100Filled';

export default IconMaterialCookieOffW100Filled;
