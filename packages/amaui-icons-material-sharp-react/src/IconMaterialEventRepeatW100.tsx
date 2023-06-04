import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventRepeatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventRepeatW100'

      short_name='EventRepeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V5.3h3.5V3h.7v2.3h7V3h.7v2.3h3.5v7.1H19v-1.6H5V20h7.375v.7ZM5 10.1h14V6H5Zm14 13.5q-1.525 0-2.725-.912-1.2-.913-1.65-2.288h.75q.425 1.125 1.388 1.812.962.688 2.237.688 1.625 0 2.763-1.138Q22.9 20.625 22.9 19t-1.137-2.762Q20.625 15.1 19 15.1q-.975 0-1.875.5t-1.55 1.3H17.6v.7h-3.2v-3.2h.7v1.975q.725-.875 1.75-1.425T19 14.4q1.9 0 3.25 1.35T23.6 19q0 1.9-1.35 3.25T19 23.6ZM5 10.1V6v4.1Z"/>
    </Icon>
  );
});

IconMaterialEventRepeatW100.displayName = 'AmauiIconMaterialEventRepeatW100';

export default IconMaterialEventRepeatW100;
