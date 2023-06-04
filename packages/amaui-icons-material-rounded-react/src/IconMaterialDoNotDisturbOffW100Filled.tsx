import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffW100Filled'

      short_name='DoNotDisturbOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.4 16.6-4.25-4.25H16q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.225-.1H14.45L7.4 4.6q1.025-.625 2.175-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.425-.338 1.15-.963 2.175ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575l-2-2q-.1-.1-.087-.238Q3.3 4 3.4 3.9q.125-.125.25-.125t.25.125l16.225 16.225q.1.1.088.238-.013.137-.113.237-.125.125-.25.125t-.25-.125l-1.975-1.975q-1.15.975-2.575 1.525-1.425.55-3.05.55Zm-.65-8.35-.7-.7H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.225.1Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffW100Filled.displayName = 'AmauiIconMaterialDoNotDisturbOffW100Filled';

export default IconMaterialDoNotDisturbOffW100Filled;
