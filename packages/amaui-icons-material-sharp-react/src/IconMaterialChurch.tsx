import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChurch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Church'

      short_name='Church'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-8l4-1.775V9l5-2.5V5H9V3h2V1h2v2h2v2h-2v1.5L18 9v3.225L22 14v8h-9v-5h-2v5Zm2-2h5v-5.1h6V20h5v-4.8l-4-1.8v-3.35L12 8l-4 2.05v3.35l-4 1.8Zm8-6.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 10.5 12 10.5t-1.062.438Q10.5 11.375 10.5 12t.438 1.062q.437.438 1.062.438Zm0 .5Z"/>
    </Icon>
  );
});

IconMaterialChurch.displayName = 'AmauiIconMaterialChurch';

export default IconMaterialChurch;
