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
      <path d="M6.775 12q2.075.775 3.2 2.825Q11.1 16.875 11.3 19h1.4q.2-2.125 1.325-4.175t3.2-2.825q-2.1-.775-3.225-2.825Q12.875 7.125 12.675 5H11.3q-.2 2.125-1.325 4.175T6.775 12ZM3.65 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCurtainsW100Filled.displayName = 'AmauiIconMaterialCurtainsW100Filled';

export default IconMaterialCurtainsW100Filled;
