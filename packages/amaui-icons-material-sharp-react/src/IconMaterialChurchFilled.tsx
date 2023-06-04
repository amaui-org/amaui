import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChurchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchFilled'

      short_name='Church'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-8l4-1.775V9l5-2.5V5H9V3h2V1h2v2h2v2h-2v1.5L18 9v3.225L22 14v8h-8v-5h-4v5Zm10-8.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 10.5 12 10.5t-1.062.438Q10.5 11.375 10.5 12t.438 1.062q.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialChurchFilled.displayName = 'AmauiIconMaterialChurchFilled';

export default IconMaterialChurchFilled;
