import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9W100'

      short_name='Filter9'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.35h3.7v-8.7H11v4.7h4v3.3h-3Zm3-4.7h-3.3v-3.3H15ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter9W100.displayName = 'AmauiIconMaterialFilter9W100';

export default IconMaterialFilter9W100;
