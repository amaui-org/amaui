import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial15mpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='15mpW100Filled'

      short_name='15mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 11.1h.7V5.9H7.4v.7h1.5Zm3.5 0h3.7V8.15h-3V6.6h3v-.7h-3.7v2.95h3v1.55h-3Zm-8.1 8.6V4.3h15.4v15.4Zm2.1-1.6h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3Z"/>
    </Icon>
  );
});

IconMaterial15mpW100Filled.displayName = 'AmauiIconMaterial15mpW100Filled';

export default IconMaterial15mpW100Filled;
