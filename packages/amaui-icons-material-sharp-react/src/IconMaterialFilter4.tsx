import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4'

      short_name='Filter4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Zm7-1h2V5h-2v4h-2V5h-2v6h4Z"/>
    </Icon>
  );
});

IconMaterialFilter4.displayName = 'AmauiIconMaterialFilter4';

export default IconMaterialFilter4;
