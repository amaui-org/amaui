import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldPersonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldPersonW100Filled'

      short_name='ShieldPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-466q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm0 302q52-17 95-50t74-78q-39-20-81.5-31T480-334q-45 0-87.5 11T311-292q31 45 74 78t95 50Zm0 25q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialShieldPersonW100Filled.displayName = 'AmauiIconMaterialShieldPersonW100Filled';

export default IconMaterialShieldPersonW100Filled;
