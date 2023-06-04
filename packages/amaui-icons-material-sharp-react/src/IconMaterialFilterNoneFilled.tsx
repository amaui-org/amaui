import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterNoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneFilled'

      short_name='FilterNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialFilterNoneFilled.displayName = 'AmauiIconMaterialFilterNoneFilled';

export default IconMaterialFilterNoneFilled;
