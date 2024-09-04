import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflinePinOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinOffW100'

      short_name='OfflinePinOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-306v-28h280l28 28H346Zm448 180-89-89q-48 41-105.5 62T480-132q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-62 21-119.5T215-705l-89-89 20-20 668 668-20 20Zm-18-170-21-21q23-37 34-78.33T800-480q0-134-93-227t-227-93q-43 0-84.5 11T317-755l-21-21q42-26 88.5-39 46.51-13 95.5-13 72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480q0 48.99-13 95.5-13 46.5-39 88.5Zm-91 61L235-685q-36 43-55.5 95.5T160-480q0 134 93 227t227 93q57 0 109.5-19.5T685-235ZM559-559ZM423-423Zm94-132 91-91 20 20-91 91-20-20Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinOffW100.displayName = 'AmauiIconMaterialOfflinePinOffW100';

export default IconMaterialOfflinePinOffW100;
