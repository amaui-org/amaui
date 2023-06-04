import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailW100Filled'

      short_name='ContactMail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 19.2V4.8h21.4v14.4ZM9 14.3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q9.975 9.6 9 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm5.25-3.05h6.5v-4.5h-6.5ZM3.55 18.5h10.9Q13.4 17.3 12 16.55q-1.4-.75-3-.75t-3 .75q-1.4.75-2.45 1.95Zm13.95-8.35-2.45-1.7V7.6l2.45 1.7 2.45-1.7v.85Z"/>
    </Icon>
  );
});

IconMaterialContactMailW100Filled.displayName = 'AmauiIconMaterialContactMailW100Filled';

export default IconMaterialContactMailW100Filled;
