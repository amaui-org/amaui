import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArStickersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArStickersW100Filled'

      short_name='ArStickers'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-110q-128 0-218-28.5T172-218q0-26 26.5-47.5T269-299l23 21q-39 11-65.5 26.5T200-218q0 32 78 56t202 24q124 0 202-24t78-56q0-18-26.5-33.5T668-278l23-21q44 12 70.5 33.5T788-218q0 51-90 79.5T480-110Zm0-132q-13 0-24.5-5T434-260L182-482q-5-5-7.5-10.5T172-504v-78q0-7 1.5-13t6.5-11l254-236q9-9 21-13.5t25-4.5q13 0 25 4.5t21 13.5l254 236q5 5 6.5 11t1.5 13v78q0 6-2.5 11.5T778-482L526-260q-10 8-21.5 13t-24.5 5ZM360-550q17 0 28.5-11.5T400-590q0-17-11.5-28.5T360-630q-17 0-28.5 11.5T320-590q0 17 11.5 28.5T360-550Zm68 60q38 14 78 6t71-35q28-25 38-61t-1-72L428-490Zm52-180q17 0 28.5-11.5T520-710q0-17-11.5-28.5T480-750q-17 0-28.5 11.5T440-710q0 17 11.5 28.5T480-670Z"/>
    </Icon>
  );
});

IconMaterialArStickersW100Filled.displayName = 'AmauiIconMaterialArStickersW100Filled';

export default IconMaterialArStickersW100Filled;
