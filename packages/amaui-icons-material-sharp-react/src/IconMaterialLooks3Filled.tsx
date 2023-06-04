import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3Filled'

      short_name='Looks3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h6V7H9v2h4v2h-2v2h2v2H9Zm-6 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialLooks3Filled.displayName = 'AmauiIconMaterialLooks3Filled';

export default IconMaterialLooks3Filled;
