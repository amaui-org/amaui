import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessW100'

      short_name='Chess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h480v-45q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v45Zm100-105h280l-29-201H369l-29 201Zm-98.341 133Q229-172 220.5-180.625 212-189.25 212-202v-43q0-24.75 17.625-42.375T272-305h40l29-201h-75q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h428q5.95 0 9.975 4.035 4.025 4.035 4.025 10T703.975-510q-4.025 4-9.975 4h-75l29 201h39.765Q713-305 730.5-287.375T748-245v43q0 12.75-8.563 21.375T718.215-172H241.659ZM340-534l-56-254q27 16 48.562 22.5Q354.125-759 380-759q31 0 56-8t44-22q19 14 44.047 22 25.046 8 54.953 8 23 0 43.5-6t54.5-23l-57 254h-29l47-208q-15 5-30.5 8t-32.5 3q-25.371 0-49.686-6Q501-743 480-755q-21 12-45.632 18-24.633 6-50.368 6-16 0-31-2t-30-7l46 206h-29Zm140 28Zm1-28Zm-1 334Z"/>
    </Icon>
  );
});

IconMaterialChessW100.displayName = 'AmauiIconMaterialChessW100';

export default IconMaterialChessW100;
