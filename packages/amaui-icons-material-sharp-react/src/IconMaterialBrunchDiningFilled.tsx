import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrunchDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningFilled'

      short_name='BrunchDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-2h14v2Zm0-4v-2h5v-2h4v2h5v2Zm16 4v-6.1q-.9-1.025-1.45-2.025-.55-1-.55-2.425V2h6v9.45q0 1.425-.538 2.437Q20.925 14.9 20 15.9V20h2v2Zm0-14h2V4h-2Z"/>
    </Icon>
  );
});

IconMaterialBrunchDiningFilled.displayName = 'AmauiIconMaterialBrunchDiningFilled';

export default IconMaterialBrunchDiningFilled;
