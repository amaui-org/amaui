import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataFilled'

      short_name='HPlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17V7h2v4h6V7h2v10h-2v-4H6v4Zm14-2v-2h-2v-2h2V9h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataFilled.displayName = 'AmauiIconMaterialHPlusMobiledataFilled';

export default IconMaterialHPlusMobiledataFilled;
