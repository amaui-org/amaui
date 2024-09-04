import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouseOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseOffFilled'

      short_name='TouchpadMouseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h81l236 236q-18 32-27.5 68.5T360-420v120q0 36 8.5 72t25.5 68H80Zm195-640h605v176q-43-47-99.5-71.5T660-720q-63 0-118 24.5T446-629L275-800Zm425 360v-197q75 13 126 67.5T880-440H700Zm-80-197v182L500-575q24-24 54.5-40t65.5-22Zm242 424L715-360h165v60q0 23-5 45t-13 42ZM660-80q-92 0-156-64t-64-156v-60h47L27-820l57-57L876-85l-57 57-70-70q-20 9-42.5 13.5T660-80Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseOffFilled.displayName = 'AmauiIconMaterialTouchpadMouseOffFilled';

export default IconMaterialTouchpadMouseOffFilled;
