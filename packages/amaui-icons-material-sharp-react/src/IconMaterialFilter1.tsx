import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter1 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1'

      short_name='Filter1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 15h2V5h-4v2h2Zm-8 3V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter1.displayName = 'AmauiIconMaterialFilter1';

export default IconMaterialFilter1;
