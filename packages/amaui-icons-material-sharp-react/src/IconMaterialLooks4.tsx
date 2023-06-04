import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4'

      short_name='Looks4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Zm8-2h2V7h-2v4h-2V7H9v6h4Z"/>
    </Icon>
  );
});

IconMaterialLooks4.displayName = 'AmauiIconMaterialLooks4';

export default IconMaterialLooks4;
