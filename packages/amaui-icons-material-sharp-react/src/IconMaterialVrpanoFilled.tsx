import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVrpanoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoFilled'

      short_name='Vrpano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 15.4q1.5-.2 3.113-.3Q10.225 15 12 15q1.725 0 3.363.1 1.637.1 3.137.3L14 10l-2.85 3.4-2-2.4Zm-3.475 5.1V3.475q1.875.875 4.5 1.45t5.5.575q2.875 0 5.5-.575t4.5-1.45V20.5q-1.875-.875-4.5-1.438-2.625-.562-5.5-.562t-5.5.562q-2.625.563-4.5 1.438Z"/>
    </Icon>
  );
});

IconMaterialVrpanoFilled.displayName = 'AmauiIconMaterialVrpanoFilled';

export default IconMaterialVrpanoFilled;
