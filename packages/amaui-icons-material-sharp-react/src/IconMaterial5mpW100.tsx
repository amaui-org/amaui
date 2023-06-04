import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5mpW100'

      short_name='5mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 11.1h3.7V8.15h-3V6.6h3v-.7h-3.7v2.95h3v1.55h-3ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm1.4-.9h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial5mpW100.displayName = 'AmauiIconMaterial5mpW100';

export default IconMaterial5mpW100;
