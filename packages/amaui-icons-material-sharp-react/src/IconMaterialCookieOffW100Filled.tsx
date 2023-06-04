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
      <path d="M791 775 277 261q55-36 120.5-51.5T534 205q-1 45 12.5 80.5t39.5 61q26 25.5 63.5 39T735 401q-8 59 30 104t89 54q0 60-16.5 114.5T791 775Zm-451-89q21 0 35.5-15t14.5-35q0-21-14.5-35.5T340 586q-20 0-35 14.5T290 636q0 20 15 35t35 15Zm512 302L705 841q-46 39-103 61t-122 22q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-65 22-122t61-103L90 226l20-20 762 762-20 20Z"/>
    </Icon>
  );
});

IconMaterialCookieOffW100Filled.displayName = 'AmauiIconMaterialCookieOffW100Filled';

export default IconMaterialCookieOffW100Filled;
