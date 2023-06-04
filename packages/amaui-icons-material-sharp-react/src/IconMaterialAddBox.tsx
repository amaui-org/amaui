import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBox'

      short_name='AddBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4Zm-8 4V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialAddBox.displayName = 'AmauiIconMaterialAddBox';

export default IconMaterialAddBox;
