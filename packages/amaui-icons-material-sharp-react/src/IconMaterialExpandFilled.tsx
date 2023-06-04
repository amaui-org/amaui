import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandFilled'

      short_name='Expand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22v-2h16v2Zm8-3-4-4 1.4-1.4 1.6 1.55v-6.3L9.4 10.4 8 9l4-4 4 4-1.4 1.4L13 8.85v6.3l1.6-1.55L16 15ZM4 4V2h16v2Z"/>
    </Icon>
  );
});

IconMaterialExpandFilled.displayName = 'AmauiIconMaterialExpandFilled';

export default IconMaterialExpandFilled;
