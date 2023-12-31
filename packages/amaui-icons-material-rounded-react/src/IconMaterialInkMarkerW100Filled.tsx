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
      <path d="m274-176-32-32-30 30q-7 7-16 7t-16-7q-7-7-7-16t7-16l30-30-32-32 492-492q9-9 20-9t20 9l56 56q9 9 9 20t-9 20L274-176Zm170-322L218-272l56 56 226-226-56-56Z"/>
    </Icon>
  );
});

IconMaterialInkMarkerW100Filled.displayName = 'AmauiIconMaterialInkMarkerW100Filled';

export default IconMaterialInkMarkerW100Filled;
