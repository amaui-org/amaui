import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWakeOnApproachFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnApproachFilled'

      short_name='NestWakeOnApproach'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.5 12q-.625 0-1.062-.438Q19 11.125 19 10.5v-6q0-.625.438-1.062Q19.875 3 20.5 3t1.062.438Q22 3.875 22 4.5v6q0 .625-.438 1.062Q21.125 12 20.5 12ZM10 12q-1.65 0-2.825-1.175Q6 9.65 6 8q0-1.65 1.175-2.825Q8.35 4 10 4q1.65 0 2.825 1.175Q14 6.35 14 8q0 1.65-1.175 2.825Q11.65 12 10 12Zm-8 8v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q8.35 13 10 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q18 16.35 18 17.2V20Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnApproachFilled.displayName = 'AmauiIconMaterialNestWakeOnApproachFilled';

export default IconMaterialNestWakeOnApproachFilled;
