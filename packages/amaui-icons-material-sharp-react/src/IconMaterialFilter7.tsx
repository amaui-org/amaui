import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter7 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7'

      short_name='Filter7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h2l4-8V5h-6v2h4Zm-5 3V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter7.displayName = 'AmauiIconMaterialFilter7';

export default IconMaterialFilter7;
