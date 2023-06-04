import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2'

      short_name='Filter2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h6v-2h-4v-2h4V5h-6v2h4v2h-4Zm-5 3V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter2.displayName = 'AmauiIconMaterialFilter2';

export default IconMaterialFilter2;
