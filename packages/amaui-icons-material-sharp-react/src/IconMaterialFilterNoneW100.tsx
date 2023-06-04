import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterNoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneW100'

      short_name='FilterNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7ZM7.35 4v12Z"/>
    </Icon>
  );
});

IconMaterialFilterNoneW100.displayName = 'AmauiIconMaterialFilterNoneW100';

export default IconMaterialFilterNoneW100;
