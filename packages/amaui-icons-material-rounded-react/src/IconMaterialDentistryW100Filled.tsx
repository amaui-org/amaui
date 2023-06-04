import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDentistryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DentistryW100Filled'

      short_name='Dentistry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.75 3.425q1.125.025 1.913.8.787.775.787 1.9 0 .225-.025.637-.025.413-.1.988l-1.4 10.075q-.05.475-.412.75-.363.275-.838.275-.35 0-.6-.212-.25-.213-.45-.488l-3.05-4.075q-.125-.15-.263-.25-.137-.1-.337-.1t-.6.4L8.4 18.075q-.225.275-.5.525t-.625.25q-.475 0-.825-.288-.35-.287-.4-.762L4.675 7.75q-.075-.575-.1-.988-.025-.412-.025-.637 0-1.125.788-1.913.787-.787 1.912-.787.675 0 1.188.237.512.238 1.012.513t1.1.513q.6.237 1.45.237.875 0 1.488-.237.612-.238 1.112-.513.5-.275 1-.513.5-.237 1.15-.237Z"/>
    </Icon>
  );
});

IconMaterialDentistryW100Filled.displayName = 'AmauiIconMaterialDentistryW100Filled';

export default IconMaterialDentistryW100Filled;
