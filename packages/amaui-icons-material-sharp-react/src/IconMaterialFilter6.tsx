import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter6 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6'

      short_name='Filter6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 9V7h3V5h-5v10h6V9Zm0 2h2v2h-2Zm-7 7V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter6.displayName = 'AmauiIconMaterialFilter6';

export default IconMaterialFilter6;
