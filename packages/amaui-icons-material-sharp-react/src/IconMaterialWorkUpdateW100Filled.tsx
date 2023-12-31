import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkUpdateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkUpdateW100Filled'

      short_name='WorkUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m710-161 96-96-20-20-62 62v-144h-28v144l-62-62-20 20 96 96ZM400-668h160v-80H400v80Zm310 556q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-578-60v-496h240v-108h216v108h240v190q-27-14-56.848-22T710-508q-102.743 0-175.371 72.629Q462-362.743 462-260q0 22.576 4 44.788Q470-193 478-172H132Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdateW100Filled.displayName = 'AmauiIconMaterialWorkUpdateW100Filled';

export default IconMaterialWorkUpdateW100Filled;
