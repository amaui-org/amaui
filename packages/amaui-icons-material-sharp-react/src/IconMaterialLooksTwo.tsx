import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksTwo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwo'

      short_name='LooksTwo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h6v-2h-4v-2h4V7H9v2h4v2H9Zm-6 4V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialLooksTwo.displayName = 'AmauiIconMaterialLooksTwo';

export default IconMaterialLooksTwo;
