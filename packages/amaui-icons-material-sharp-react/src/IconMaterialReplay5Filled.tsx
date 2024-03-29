import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReplay5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Replay5Filled'

      short_name='Replay5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 16v-1.5h3v-1h-3V10H14v1.5h-3v1h3V16Zm2.5 6q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13h2q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplay5Filled.displayName = 'AmauiIconMaterialReplay5Filled';

export default IconMaterialReplay5Filled;
