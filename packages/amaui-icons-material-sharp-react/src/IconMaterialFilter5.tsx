import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5'

      short_name='Filter5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h6V9h-4V7h4V5h-6v6h4v2h-4Zm-5 3V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter5.displayName = 'AmauiIconMaterialFilter5';

export default IconMaterialFilter5;
