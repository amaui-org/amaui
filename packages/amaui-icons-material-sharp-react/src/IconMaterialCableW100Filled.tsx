import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableW100Filled'

      short_name='Cable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 20.35v-1.5h-1v-3.7h2V7q0-1.4.975-2.375Q7.6 3.65 9 3.65t2.375.975Q12.35 5.6 12.35 7v10q0 1.125.763 1.887.762.763 1.887.763t1.888-.763q.762-.762.762-1.887V8.85h-2v-3.7h1v-1.5h2.7v1.5h1v3.7h-2V17q0 1.4-.975 2.375-.975.975-2.375.975t-2.375-.975Q11.65 18.4 11.65 17V7q0-1.125-.763-1.888Q10.125 4.35 9 4.35t-1.887.762Q6.35 5.875 6.35 7v8.15h2v3.7h-1v1.5Z"/>
    </Icon>
  );
});

IconMaterialCableW100Filled.displayName = 'AmauiIconMaterialCableW100Filled';

export default IconMaterialCableW100Filled;
