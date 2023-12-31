import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkMarkerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkMarkerW100Filled'

      short_name='InkMarker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m274-176-32-32-46 46-32-32 46-46-32-32 512-512 96 96-512 512Zm170-322L218-272l56 56 226-226-56-56Z"/>
    </Icon>
  );
});

IconMaterialInkMarkerW100Filled.displayName = 'AmauiIconMaterialInkMarkerW100Filled';

export default IconMaterialInkMarkerW100Filled;
