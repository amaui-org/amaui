import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataFilled'

      short_name='HMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17V7h2v4h6V7h2v10h-2v-4H9v4Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataFilled.displayName = 'AmauiIconMaterialHMobiledataFilled';

export default IconMaterialHMobiledataFilled;
