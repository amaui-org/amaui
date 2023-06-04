import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataFilled'

      short_name='EMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17V7h8v2h-6v2h6v2h-6v2h6v2Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataFilled.displayName = 'AmauiIconMaterialEMobiledataFilled';

export default IconMaterialEMobiledataFilled;
