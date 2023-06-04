import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriorityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityFilled'

      short_name='Priority'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-2.5 0-4.25-1.75T3 15V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v6q0 2.5-1.75 4.25T15 21Zm2-5 6-6-1.4-1.4-4.6 4.6L8.8 11l-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialPriorityFilled.displayName = 'AmauiIconMaterialPriorityFilled';

export default IconMaterialPriorityFilled;
