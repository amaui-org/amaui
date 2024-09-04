import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOrbitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrbitW100Filled'

      short_name='Orbit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M257-150q-45 0-76-31t-31-76q0-45 31-76t76-31q45 0 76 31t31 76q0 20-7 38t-20 32v-7q33 17 69 25.5t74 8.5q134 0 227-93t93-227h28q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132q-42 0-82-9.5T320-171q-14 11-30 16t-33 5Zm223-223q-45 0-76-31t-31-76q0-45 31-76t76-31q45 0 76 31t31 76q0 45-31 76t-76 31ZM132-480q0-72 27.5-135.5T234-726q47-47 110.5-74.5T480-828q42 0 82 9.5t78 29.5q14-10 30-15t33-5q45 0 75.5 30.5T809-703q0 45-30.5 76T703-596q-45 0-76-31t-31-76q0-20 7-38t20-32v7q-33-17-69-25.5t-74-8.5q-134 0-227 93t-93 227h-28Z"/>
    </Icon>
  );
});

IconMaterialOrbitW100Filled.displayName = 'AmauiIconMaterialOrbitW100Filled';

export default IconMaterialOrbitW100Filled;
