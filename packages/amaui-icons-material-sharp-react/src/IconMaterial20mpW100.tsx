import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial20mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='20mpW100'

      short_name='20mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.1 10.4V6.6h2.3v3.8Zm-.7.7h3.7V5.9h-3.7Zm-6.5 0h3.7v-.7h-3V8.85h3V5.9H6.9v.7h3v1.55h-3Zm-2.6 8.6V4.3h15.4v15.4ZM5 19h14V5H5Zm1.4-.9h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial20mpW100.displayName = 'AmauiIconMaterial20mpW100';

export default IconMaterial20mpW100;
