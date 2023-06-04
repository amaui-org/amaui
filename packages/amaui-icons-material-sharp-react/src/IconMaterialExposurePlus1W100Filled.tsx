import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposurePlus1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1W100Filled'

      short_name='ExposurePlus1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.2v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm9.85 1.45V7.3l-2.6 1.8-.4-.55 3.15-2.2h.55v11.3Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1W100Filled.displayName = 'AmauiIconMaterialExposurePlus1W100Filled';

export default IconMaterialExposurePlus1W100Filled;
