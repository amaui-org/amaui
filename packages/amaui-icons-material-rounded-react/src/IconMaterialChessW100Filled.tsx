import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessW100Filled'

      short_name='Chess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M241.659-172Q229-172 220.5-180.625 212-189.25 212-202v-43q0-24.75 17.625-42.375T272-305h40l29-201h-75q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h428q5.95 0 9.975 4.035 4.025 4.035 4.025 10T703.975-510q-4.025 4-9.975 4h-75l29 201h39.765Q713-305 730.5-287.375T748-245v43q0 12.75-8.563 21.375T718.215-172H241.659ZM334-562l-50-226q27 16 48.562 22.5Q354.125-759 380-759q31 0 56-8t44-22q19 14 44.047 22 25.046 8 54.953 8 23 0 43.5-6t54.5-23l-51 226H334Z"/>
    </Icon>
  );
});

IconMaterialChessW100Filled.displayName = 'AmauiIconMaterialChessW100Filled';

export default IconMaterialChessW100Filled;
