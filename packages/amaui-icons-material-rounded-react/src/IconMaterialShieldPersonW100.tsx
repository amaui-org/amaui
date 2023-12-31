import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldPersonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldPersonW100'

      short_name='ShieldPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-466q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Zm0-28q36 0 61-25t25-61q0-36-25-61t-61-25q-36 0-61 25t-25 61q0 36 25 61t61 25Zm0 355q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Zm0-340Zm0-315-240 89v189q0 62 18.5 119T311-292q38-20 79.5-31t89.5-11q48 0 89.5 11t79.5 31q34-48 52.5-105T720-516v-189l-240-89Zm0 488q-43 0-81.5 9T327-271q31 38 69.5 65.5T480-164q45-14 83-41.5t69-65.5q-33-17-71-26t-81-9Z"/>
    </Icon>
  );
});

IconMaterialShieldPersonW100.displayName = 'AmauiIconMaterialShieldPersonW100';

export default IconMaterialShieldPersonW100;
