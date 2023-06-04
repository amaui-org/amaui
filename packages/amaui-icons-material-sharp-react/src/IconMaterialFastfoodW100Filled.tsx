import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastfoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodW100Filled'

      short_name='Fastfood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.875 15.5q0-.675.413-1.338.412-.662 1.225-1.187.812-.525 2-.85Q7.7 11.8 9.225 11.8q1.55 0 2.725.325t1.988.85q.812.525 1.225 1.187.412.663.412 1.338Zm14.7 6.2v-6.2q0-2-1.563-3.488-1.562-1.487-4.112-1.987L11.425 6.8h4.5v-4h.7v4h4.5L19.6 21.7Zm-14.7-3.1v-.7h12.7v.7Zm0 3.1V21h12.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFastfoodW100Filled.displayName = 'AmauiIconMaterialFastfoodW100Filled';

export default IconMaterialFastfoodW100Filled;
