import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataW100Filled'

      short_name='HPlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 17V7h.7v4.65h7.3V7h.7v10h-.7v-4.65H5.5V17Zm13.7-2.65v-2h-2v-.7h2v-2h.7v2h2v.7h-2v2Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataW100Filled.displayName = 'AmauiIconMaterialHPlusMobiledataW100Filled';

export default IconMaterialHPlusMobiledataW100Filled;
