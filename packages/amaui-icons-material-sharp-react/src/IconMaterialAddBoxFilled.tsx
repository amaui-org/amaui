import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxFilled'

      short_name='AddBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4Zm-8 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialAddBoxFilled.displayName = 'AmauiIconMaterialAddBoxFilled';

export default IconMaterialAddBoxFilled;
