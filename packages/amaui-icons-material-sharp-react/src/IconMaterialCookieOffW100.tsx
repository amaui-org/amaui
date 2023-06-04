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
      <path d="m791 775-21-21q23-38 37.5-81.5T825 581q-54-21-84-60t-34-96q-84-6-139.5-57T509 230q-58-5-111.5 9T298 282l-21-21q55-36 120.5-51.5T534 205q-1 45 12.5 80.5t39.5 61q26 25.5 63.5 39T735 401q-8 59 30 104t89 54q0 60-16.5 114.5T791 775Zm-451-89q-20 0-35-15t-15-35q0-21 15-35.5t35-14.5q21 0 35.5 14.5T390 636q0 20-14.5 35T340 686Zm512 302L705 841q-46 39-103 61t-122 22q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-65 22-122t61-103L90 226l20-20 762 762-20 20Zm-372-92q59 0 111-20t94-55L235 371q-35 42-55 94t-20 111q0 133 93.5 226.5T480 896Zm-20-300Zm74-78Z"/>
    </Icon>
  );
});

IconMaterialCookieOffW100.displayName = 'AmauiIconMaterialCookieOffW100';

export default IconMaterialCookieOffW100;
