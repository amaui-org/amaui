import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsW100Filled'

      short_name='Curtains'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7ZM6.775 12q2.075.775 3.2 2.825Q11.1 16.875 11.3 19h1.4q.2-2.125 1.325-4.175t3.2-2.825q-2.1-.775-3.225-2.825Q12.875 7.125 12.675 5H11.3q-.2 2.125-1.325 4.175T6.775 12Z"/>
    </Icon>
  );
});

IconMaterialCurtainsW100Filled.displayName = 'AmauiIconMaterialCurtainsW100Filled';

export default IconMaterialCurtainsW100Filled;
