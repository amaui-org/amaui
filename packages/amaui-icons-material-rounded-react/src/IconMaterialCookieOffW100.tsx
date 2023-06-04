import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCookieOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookieOffW100'

      short_name='CookieOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M853 587q-4 52-20 99t-42 89l-21-21q23-38 37.5-81.5T825 581q-54-21-84-60t-34-96q-84-6-139.5-57T509 230q-58-5-111.5 9T298 282l-21-21q50-32 108-48t121-11q11 1 19.5 10t9.5 21q7 72 51.5 114.5T707 399q11 2 18.5 10t8.5 20q3 42 30 75t63 47q12 5 19.5 15t6.5 21Zm-513 99q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T390 636q0 20-14.5 35T340 686Zm502 292L705 841q-46 39-103 61t-122 22q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-65 22-122t61-103L100 236q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5Zm-362-82q59 0 111-20t94-55L235 371q-35 42-55 94t-20 111q0 133 93.5 226.5T480 896Zm-20-300Zm74-78Z"/>
    </Icon>
  );
});

IconMaterialCookieOffW100.displayName = 'AmauiIconMaterialCookieOffW100';

export default IconMaterialCookieOffW100;
