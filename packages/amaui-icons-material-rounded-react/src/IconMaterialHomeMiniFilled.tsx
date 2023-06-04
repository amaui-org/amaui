import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeMiniFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniFilled'

      short_name='HomeMini'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5q2.925 0 4.85.737 1.925.738 3.075 1.825 1.15 1.088 1.613 2.288Q22 11.05 22 12H2q0-.95.463-2.15.462-1.2 1.612-2.288 1.15-1.087 3.075-1.825Q9.075 5 12 5ZM9 19q-2.375 0-4.213-1.413Q2.95 16.175 2.3 14h19.4q-.65 2.175-2.488 3.587Q17.375 19 15 19Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniFilled.displayName = 'AmauiIconMaterialHomeMiniFilled';

export default IconMaterialHomeMiniFilled;
