import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWorkFilled'

      short_name='AddHomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M23 1v10.125Q22 10.1 20.712 9.55 19.425 9 18 9q-.275 0-.512.012-.238.013-.488.063V8l-7-5.05V1Zm-6 6h2V5h-2Zm1 14q-2.075 0-3.537-1.462Q13 18.075 13 16q0-2.075 1.463-3.538Q15.925 11 18 11t3.538 1.462Q23 13.925 23 16q0 2.075-1.462 3.538Q20.075 21 18 21Zm-.5-2h1v-2.5H21v-1h-2.5V13h-1v2.5H15v1h2.5ZM1 19V9l7-5 7 5v.675q-1.825.875-2.912 2.587Q11 13.975 11 16q0 .775.163 1.538.162.762.512 1.462H10v-6H6v6Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWorkFilled.displayName = 'AmauiIconMaterialAddHomeWorkFilled';

export default IconMaterialAddHomeWorkFilled;
