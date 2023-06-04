import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter3'

      short_name='Filter3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h6V5h-6v2h4v2h-2v2h2v2h-4Zm-5 3V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter3.displayName = 'AmauiIconMaterialFilter3';

export default IconMaterialFilter3;
