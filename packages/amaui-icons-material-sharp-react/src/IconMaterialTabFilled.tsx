import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabFilled'

      short_name='Tab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm11-10h7V6h-7Z"/>
    </Icon>
  );
});

IconMaterialTabFilled.displayName = 'AmauiIconMaterialTabFilled';

export default IconMaterialTabFilled;
