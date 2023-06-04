import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPayments = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Payments'

      short_name='Payments'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M17 6H3v8h14V6zm-7 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" opacity=".3"/><g><path d="M17 4H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 14V6h14v8H3z"/><path d="M10 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></g><path d="M23 7v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"/></g>
    </Icon>
  );
});

IconMaterialPayments.displayName = 'AmauiIconMaterialPayments';

export default IconMaterialPayments;
