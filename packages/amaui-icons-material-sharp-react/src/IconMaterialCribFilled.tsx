import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCribFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribFilled'

      short_name='Crib'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q.5 0 1-.062.5-.063 1-.188V16h-4v3.75q.5.125 1 .188.5.062 1 .062Zm0 2q-2 0-3.825-.762-1.825-.763-3.25-2.163L6.35 17.65q.375.375.788.687.412.313.862.588V16H4V8q0-1.65 1.175-2.825Q6.35 4 8 4h4v5h8v7h-4v2.925q.45-.275.863-.588.412-.312.787-.687l1.425 1.425q-1.425 1.4-3.25 2.163Q14 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialCribFilled.displayName = 'AmauiIconMaterialCribFilled';

export default IconMaterialCribFilled;
