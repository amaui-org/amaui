import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WardFilled'

      short_name='Ward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 4H2V2h4v20H4Zm3 18V2h13v20Zm2-11.475q.45-.275.95-.4Q10.45 10 11 10h5q.55 0 1.05.125t.95.4V4H9ZM13.5 9q-.825 0-1.412-.588Q11.5 7.825 11.5 7t.588-1.412Q12.675 5 13.5 5t1.413.588Q15.5 6.175 15.5 7t-.587 1.412Q14.325 9 13.5 9Zm-1 10h2v-2h2v-2h-2v-2h-2v2h-2v2h2Z"/>
    </Icon>
  );
});

IconMaterialWardFilled.displayName = 'AmauiIconMaterialWardFilled';

export default IconMaterialWardFilled;
