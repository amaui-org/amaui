import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBacklightLowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightLowW100Filled'

      short_name='BacklightLow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M112 670v-28h88v28h-88Zm160-202-62-63 19-19 62 63-19 19Zm34 296v-68h348v68H306Zm160-388v-88h28v88h-28Zm220 91-19-20 63-61 19 20-63 61Zm74 203v-28h88v28h-88Z"/>
    </Icon>
  );
});

IconMaterialBacklightLowW100Filled.displayName = 'AmauiIconMaterialBacklightLowW100Filled';

export default IconMaterialBacklightLowW100Filled;
