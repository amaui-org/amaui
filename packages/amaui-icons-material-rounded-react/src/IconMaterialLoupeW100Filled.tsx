import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoupeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeW100Filled'

      short_name='Loupe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q.15 0 .25-.1t.1-.25v-3.65H16q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.65V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.65H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h3.65V16q0 .15.1.25t.25.1Zm0 4.35q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12v7.2q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialLoupeW100Filled.displayName = 'AmauiIconMaterialLoupeW100Filled';

export default IconMaterialLoupeW100Filled;
