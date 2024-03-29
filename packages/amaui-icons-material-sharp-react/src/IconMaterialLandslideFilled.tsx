import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandslideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandslideFilled'

      short_name='Landslide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-4.25l4 1.3 11.025-3.675L22 22Zm4-5.05L2 15.6v-1.85l4 1.3 6.9-2.3 2.55 1.025ZM18.5 14l4.5-2V8l-4.5-1L16 9v3ZM6 12.95 2 11.6V8h6l2.575 3.425ZM12 8l5-2V1l-5-1-3 2v4Z"/>
    </Icon>
  );
});

IconMaterialLandslideFilled.displayName = 'AmauiIconMaterialLandslideFilled';

export default IconMaterialLandslideFilled;
