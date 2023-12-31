import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRainyLightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RainyLightW100Filled'

      short_name='RainyLight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M174-501 61-726l25-13 113 225-25 13Zm140 280-93-185 25-13 93 185-25 13Zm81-200L243-726l25-13 153 305-26 13Zm87-200-52-105 25-13 52 105-25 13Zm24 400-53-105 25-13 53 104-25 14Zm186 0L539-526l25-13 153 304-25 14Zm62-240L621-726l25-13 133 265-25 13Zm120 240-73-145 25-13 73 145-25 13Z"/>
    </Icon>
  );
});

IconMaterialRainyLightW100Filled.displayName = 'AmauiIconMaterialRainyLightW100Filled';

export default IconMaterialRainyLightW100Filled;
