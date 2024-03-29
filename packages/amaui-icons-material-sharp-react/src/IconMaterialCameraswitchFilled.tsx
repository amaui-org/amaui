import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraswitchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraswitchFilled'

      short_name='Cameraswitch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17V7h3l1-1h4l1 1h3v10Zm6-3q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14ZM8.55.5Q9.4.225 10.262.112 11.125 0 12 0q2.35 0 4.438.837 2.087.838 3.7 2.325 1.612 1.488 2.637 3.5Q23.8 8.675 24 11h-2q-.175-1.8-.95-3.363-.775-1.562-1.988-2.762-1.212-1.2-2.787-1.938Q14.7 2.2 12.9 2.05l1.55 1.55-1.4 1.4Zm6.9 23q-.85.275-1.712.387Q12.875 24 12 24q-2.35 0-4.438-.837-2.087-.838-3.699-2.326-1.613-1.487-2.638-3.5Q.2 15.325 0 13h2q.2 1.8.963 3.363.762 1.562 1.975 2.762 1.212 1.2 2.787 1.937 1.575.738 3.375.888L9.55 20.4l1.4-1.4Z"/>
    </Icon>
  );
});

IconMaterialCameraswitchFilled.displayName = 'AmauiIconMaterialCameraswitchFilled';

export default IconMaterialCameraswitchFilled;
