import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial16mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='16mpW100'

      short_name='16mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.9 11.1h.7V5.9H7.4v.7h1.5Zm4.2 0h2.3q.3 0 .5-.2t.2-.5V8.85q0-.3-.2-.5t-.5-.2h-2.3V6.6h3v-.7h-3q-.3 0-.5.2t-.2.5v3.8q0 .3.2.5t.5.2Zm0-.7V8.85h2.3v1.55Zm-8.8 9.3V4.3h15.4v15.4ZM5 19h14V5H5Zm1.4-.9h.7v-4.5h1.8v3h.7v-3h1.8v4.5h.7v-5.2H6.4Zm7.5 0h.7v-1.5h3v-3.7h-3.7Zm.7-4.5h2.3v2.3h-2.3ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterial16mpW100.displayName = 'AmauiIconMaterial16mpW100';

export default IconMaterial16mpW100;
