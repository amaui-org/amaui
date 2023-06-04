import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocationW100'

      short_name='MoveLocation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m769 899-20-19 89-90H635v-28h203l-89-90 20-19 123 123-123 123ZM362 670q42 0 77.5-18.5T499 602q-30-20-64.301-30t-72.5-10Q324 562 289.5 572T225 602q24 31 59.5 49.5T362 670Zm0-200q23 0 38.5-15.5T416 416q0-23-15.5-38.5T362 362q-23 0-38.5 15.5T308 416q0 23 15.5 38.5T362 470Zm0 447q126-108 196-222.5T628 504q0-121-77.041-197.5t-189-76.5Q250 230 173 306.5T96 504q0 76 70 190.5T362 917Zm0 39Q213 822 140.5 707.5T68 504q0-138.11 89-220.055T362 202q116 0 205 81.945T656 504q0 89-72.5 203.5T362 956Zm0-383Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationW100.displayName = 'AmauiIconMaterialMoveLocationW100';

export default IconMaterialMoveLocationW100;
