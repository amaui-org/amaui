import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoupeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeW100'

      short_name='Loupe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q.15 0 .25-.1t.1-.25v-3.65H16q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.65V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.65H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h3.65V16q0 .15.1.25t.25.1Zm0 4.35q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12v7.2q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialLoupeW100.displayName = 'AmauiIconMaterialLoupeW100';

export default IconMaterialLoupeW100;
