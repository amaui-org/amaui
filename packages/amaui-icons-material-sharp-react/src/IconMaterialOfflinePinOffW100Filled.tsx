import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflinePinOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinOffW100Filled'

      short_name='OfflinePinOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m794-126-89-89q-48 41-105.5 62T480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-62 21-119.5T215-705l-89-89 20-20 668 668-20 20ZM346-306h268l-28-28H346v28Zm430 10L537-535l91-91-20-20-91 91-221-221q42-26 88.5-39t95.5-13q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 49-13 95.5T776-296Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinOffW100Filled.displayName = 'AmauiIconMaterialOfflinePinOffW100Filled';

export default IconMaterialOfflinePinOffW100Filled;
