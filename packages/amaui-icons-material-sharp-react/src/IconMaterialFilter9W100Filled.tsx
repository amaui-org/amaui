import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9W100Filled'

      short_name='Filter9'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.35h3.7v-8.7H11v4.7h4v3.3h-3Zm3-4.7h-3.3v-3.3H15ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialFilter9W100Filled.displayName = 'AmauiIconMaterialFilter9W100Filled';

export default IconMaterialFilter9W100Filled;
