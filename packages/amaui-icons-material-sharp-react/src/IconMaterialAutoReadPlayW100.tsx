import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayW100'

      short_name='AutoReadPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 12.8 4.2-2.8L10 7.2Zm-6.7 6.7V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayW100.displayName = 'AmauiIconMaterialAutoReadPlayW100';

export default IconMaterialAutoReadPlayW100;
