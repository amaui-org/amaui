import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArStickers = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArStickers'

      short_name='ArStickers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40q-149 0-254.5-42.5T120-200q0-32 20-57.5t56-45.5l65 58q-24 8-42.5 20.5T200-200q0 26 81 53t199 27q118 0 199-27t81-53q0-12-18.5-24.5T699-245l65-58q36 20 56 45.5t20 57.5q0 75-105.5 117.5T480-40Zm0-119L120-478v-151l360-335 360 335v151L480-159Zm-4-204 272-241-268-252-272 256 268 237ZM360-550q21 0 35.5-14.5T410-600q0-21-14.5-35.5T360-650q-21 0-35.5 14.5T310-600q0 21 14.5 35.5T360-550Zm50 54q43 21 90.5 13.5T584-522q34-29 44.5-73T618-678L410-496Zm70-174q21 0 35.5-14.5T530-720q0-21-14.5-35.5T480-770q-21 0-35.5 14.5T430-720q0 21 14.5 35.5T480-670Zm-2 60Z"/>
    </Icon>
  );
});

IconMaterialArStickers.displayName = 'AmauiIconMaterialArStickers';

export default IconMaterialArStickers;
