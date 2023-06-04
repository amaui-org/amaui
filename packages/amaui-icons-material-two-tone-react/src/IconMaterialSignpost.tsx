import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignpost = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Signpost'

      short_name='Signpost'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M6,6h11.17l1,1l-1,1H6V6z M18,16H6.83l-1-1l1-1H18V16z" opacity=".3"/><path d="M13,10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3,3l3,3h5v4h2v-4h7v-6h-7V10z M6,6h11.17l1,1l-1,1H6V6z M18,16H6.83l-1-1l1-1H18 V16z"/></g>
    </Icon>
  );
});

IconMaterialSignpost.displayName = 'AmauiIconMaterialSignpost';

export default IconMaterialSignpost;
