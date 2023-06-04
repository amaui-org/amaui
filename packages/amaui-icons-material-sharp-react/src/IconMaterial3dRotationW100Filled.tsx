import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3dRotationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3dRotationW100Filled'

      short_name='3dRotation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.85 3.4q.275-.05.575-.075.3-.025.575-.025 1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12H20q0-3.2-2.175-5.5T12.45 4l1.6 1.6-.5.5Zm2.3 17.2q-.275.05-.575.075-.3.025-.575.025-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12H4q0 3.2 2.175 5.5T11.55 20l-1.6-1.6.5-.5Zm-.25-6V9.4h2.7q.425 0 .712.288.288.287.288.712v3.2q0 .425-.288.712-.287.288-.712.288Zm.7-.7h2q.15 0 .225-.075.075-.075.075-.225v-3.2q0-.15-.075-.225-.075-.075-.225-.075h-2Zm-6.2.7v-.7h3v-1.55h-2v-.7h2V10.1h-3v-.7h3.7v5.2Z"/>
    </Icon>
  );
});

IconMaterial3dRotationW100Filled.displayName = 'AmauiIconMaterial3dRotationW100Filled';

export default IconMaterial3dRotationW100Filled;
