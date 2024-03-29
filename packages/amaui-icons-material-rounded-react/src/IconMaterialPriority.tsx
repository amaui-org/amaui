import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriority = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Priority'

      short_name='Priority'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-2.5 0-4.25-1.75T3 15V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v6q0 2.5-1.75 4.25T15 21Zm2-5 6-6-1.4-1.4-4.6 4.6L8.8 11l-1.4 1.4Zm-2 3h6q1.65 0 2.825-1.175Q19 16.65 19 15V9q0-1.65-1.175-2.825Q16.65 5 15 5H9Q7.35 5 6.175 6.175 5 7.35 5 9v6q0 1.65 1.175 2.825Q7.35 19 9 19Zm3-7Z"/>
    </Icon>
  );
});

IconMaterialPriority.displayName = 'AmauiIconMaterialPriority';

export default IconMaterialPriority;
