import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCompactAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAltW100'

      short_name='ViewCompactAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.475 11.175h2.7v-2.7h-2.7Zm4.35 0h2.7v-2.7h-2.7Zm-4.35 4.35h2.7v-2.7h-2.7Zm4.35 0h2.7v-2.7h-2.7ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAltW100.displayName = 'AmauiIconMaterialViewCompactAltW100';

export default IconMaterialViewCompactAltW100;
