import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenstrualHealth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenstrualHealth'

      short_name='MenstrualHealth'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 171q49 59 88 109.5t70 96.5l242-181v380q0 83-31.5 156T763 859q-54 54-127 85.5T480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576V196l242 181q31-45 70-96t88-110ZM160 356v220q0 44 11.5 84.5T203 736q-2-10-2.5-19.5T200 696q0-57 18.5-117.5T279 446l-119-90Zm320-60Q370 430 325 530t-45 166q0 83 58.5 141.5T480 896q83 0 141.5-58.5T680 696q0-66-45-167T480 296Zm320 60-119 89q42 72 60.5 132.5T760 696q0 11-.5 20.5T757 736q20-35 31.5-75.5T800 576V356Z"/>
    </Icon>
  );
});

IconMaterialMenstrualHealth.displayName = 'AmauiIconMaterialMenstrualHealth';

export default IconMaterialMenstrualHealth;
