import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrushFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushFilled'

      short_name='Brush'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-1.125 0-2.225-.55T2 19q.65 0 1.325-.512Q4 17.975 4 17q0-1.25.875-2.125T7 14q1.25 0 2.125.875T10 17q0 1.65-1.175 2.825Q7.65 21 6 21Zm5.75-6L9 12.25l8.95-8.95q.275-.275.688-.288.412-.012.712.288l1.35 1.35q.3.3.3.7 0 .4-.3.7Z"/>
    </Icon>
  );
});

IconMaterialBrushFilled.displayName = 'AmauiIconMaterialBrushFilled';

export default IconMaterialBrushFilled;
