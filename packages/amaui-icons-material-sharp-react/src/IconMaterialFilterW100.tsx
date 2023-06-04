import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterW100'

      short_name='Filter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.2 13.6h8.3l-2.55-3.4-2.5 3.1-1.6-1.85Zm-2.55 3.1V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilterW100.displayName = 'AmauiIconMaterialFilterW100';

export default IconMaterialFilterW100;
