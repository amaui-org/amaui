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
      <path d="M480-40q-149 0-254.5-42.5T120-200q0-32 20-57.5t56-45.5l65 58q-24 8-42.5 20.5T200-200q0 26 81 53t199 27q118 0 199-27t81-53q0-12-18.5-24.5T699-245l65-58q36 20 56 45.5t20 57.5q0 75-105.5 117.5T480-40Zm0-160q-22 0-42.5-7.5T400-230L148-453q-13-11-20.5-27t-7.5-33v-80q0-17 6.5-33t19.5-27l252-235q17-16 38-24t44-8q23 0 44 8t38 24l252 235q13 11 19.5 27t6.5 33v80q0 17-7.5 33T812-453L560-230q-17 15-37.5 22.5T480-200Zm-4-188q14 0 26.5-4.5T526-407l222-197-240-226q-7-5-14-7.5t-15-2.5q-8 0-15 2.5t-12 7.5L208-600l218 193q11 10 23.5 14.5T476-388ZM360-550q21 0 35.5-14.5T410-600q0-21-14.5-35.5T360-650q-21 0-35.5 14.5T310-600q0 21 14.5 35.5T360-550Zm50 54q43 21 90.5 13.5T584-522q34-29 44.5-73T618-678L410-496Zm70-174q21 0 35.5-14.5T530-720q0-21-14.5-35.5T480-770q-21 0-35.5 14.5T430-720q0 21 14.5 35.5T480-670Zm-2 56Z"/>
    </Icon>
  );
});

IconMaterialArStickers.displayName = 'AmauiIconMaterialArStickers';

export default IconMaterialArStickers;
