import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksOne = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOne'

      short_name='LooksOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17h2V7h-4v2h2Zm9 4H3V3h18ZM5 19h14V5H5ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialLooksOne.displayName = 'AmauiIconMaterialLooksOne';

export default IconMaterialLooksOne;
