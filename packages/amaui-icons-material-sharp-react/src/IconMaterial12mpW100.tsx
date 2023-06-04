import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial12mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='12mpW100'

      short_name='12mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 11.1h.7V5.9H7.4v.7h1.5Zm3.5 0h3.7v-.7h-3V8.85h3V5.9h-3.7v.7h3v1.55h-3Zm-8.1 8.6V4.3h15.4v15.4ZM5 19h14V5H5Zm1.4-.9h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial12mpW100.displayName = 'AmauiIconMaterial12mpW100';

export default IconMaterial12mpW100;
