import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Park'

      short_name='Park'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="13.26,10 15.16,10 12.01,5.5 8.88,10 10.69,10 6.79,16 17.26,16"/><path d="M17,12h2L12,2L5.05,12H7l-3.9,6h6.92v4h3.95v-4H21L17,12z M6.79,16l3.9-6H8.88l3.13-4.5l3.15,4.5h-1.9l4,6H6.79z"/></g></g>
    </Icon>
  );
});

IconMaterialPark.displayName = 'AmauiIconMaterialPark';

export default IconMaterialPark;
