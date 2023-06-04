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
      <path d="M11.575 3.3H12q3.525 0 6.05 2.425t2.65 5.925q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25q-.125-3.1-2.275-5.275Q15.575 4.2 12.45 4l1.35 1.35q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L11.35 3.9q-.2-.2-.137-.388.062-.187.362-.212Zm.85 17.4H12q-3.525 0-6.05-2.425T3.3 12.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25q.125 3.1 2.275 5.275Q8.425 19.8 11.55 20l-1.35-1.35q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l1.95 1.95q.2.2.138.388-.063.187-.363.212Zm.475-6.1V9.4h2.7q.425 0 .712.288.288.287.288.712v3.2q0 .425-.288.712-.287.288-.712.288Zm.7-.7h2q.15 0 .225-.075.075-.075.075-.225v-3.2q0-.15-.075-.225-.075-.075-.225-.075h-2Zm-5.85.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65v-1.55H8.75q-.15 0-.25-.1T8.4 12q0-.15.1-.25t.25-.1h1.65V10.1H7.75q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.75q.25 0 .425.175T11.1 10v4q0 .25-.175.425t-.425.175Z"/>
    </Icon>
  );
});

IconMaterial3dRotationW100Filled.displayName = 'AmauiIconMaterial3dRotationW100Filled';

export default IconMaterial3dRotationW100Filled;
