import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermCameraMicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicFilled'

      short_name='PermCameraMic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15l1.2-1.35q.275-.3.675-.475T9.85 3h4.25q.425 0 .787.162.363.163.663.463L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21h-7v-3.1q1.9-.3 3.25-1.65 1.35-1.35 1.65-3.15.05-.425-.25-.763-.3-.337-.75-.337-.35 0-.612.25-.263.25-.363.6-.375 1.4-1.45 2.275T12 16q-1.4 0-2.475-.875Q8.45 14.25 8.1 12.85q-.1-.35-.375-.6T7.1 12q-.475 0-.775.337-.3.338-.225.788.3 1.775 1.65 3.125Q9.1 17.6 11 17.9V21Zm8-7q.825 0 1.413-.588Q14 12.825 14 12V8q0-.825-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8v4q0 .825.588 1.412Q11.175 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicFilled.displayName = 'AmauiIconMaterialPermCameraMicFilled';

export default IconMaterialPermCameraMicFilled;
