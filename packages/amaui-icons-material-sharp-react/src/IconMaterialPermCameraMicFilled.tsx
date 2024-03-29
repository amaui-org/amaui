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
      <path d="M2 21V5h5.15l1.8-2h6l1.9 2H22v16h-9v-3.1q2.15-.35 3.575-2.013Q18 14.225 18 12h-2q0 1.65-1.175 2.825Q13.65 16 12 16q-1.65 0-2.825-1.175Q8 13.65 8 12H6q0 2.225 1.425 3.887Q8.85 17.55 11 17.9V21Zm10-7q.825 0 1.413-.588Q14 12.825 14 12V8q0-.825-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8v4q0 .825.588 1.412Q11.175 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMicFilled.displayName = 'AmauiIconMaterialPermCameraMicFilled';

export default IconMaterialPermCameraMicFilled;
