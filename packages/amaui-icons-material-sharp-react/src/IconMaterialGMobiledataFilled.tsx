import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataFilled'

      short_name='GMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17V7h9v2H9v6h5v-2h-2v-2h4v6Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataFilled.displayName = 'AmauiIconMaterialGMobiledataFilled';

export default IconMaterialGMobiledataFilled;
