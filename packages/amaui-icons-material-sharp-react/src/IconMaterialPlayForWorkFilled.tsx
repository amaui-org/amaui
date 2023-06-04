import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayForWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkFilled'

      short_name='PlayForWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-2.5 0-4.25-1.75T6 14h2q0 1.65 1.175 2.825Q10.35 18 12 18q1.65 0 2.825-1.175Q16 15.65 16 14h2q0 2.5-1.75 4.25T12 20Zm0-5.025-4-4L9.4 9.55l1.6 1.6V5h2v6.15l1.6-1.6 1.4 1.425Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkFilled.displayName = 'AmauiIconMaterialPlayForWorkFilled';

export default IconMaterialPlayForWorkFilled;
