import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterNone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNone'

      short_name='FilterNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2ZM8 4v12Z"/>
    </Icon>
  );
});

IconMaterialFilterNone.displayName = 'AmauiIconMaterialFilterNone';

export default IconMaterialFilterNone;
