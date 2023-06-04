import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreFilled'

      short_name='Store'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 6V4h16v2Zm0 14v-6H3v-2l1-5h16l1 5v2h-1v6h-2v-6h-4v6Zm2-2h6v-4H6Z"/>
    </Icon>
  );
});

IconMaterialStoreFilled.displayName = 'AmauiIconMaterialStoreFilled';

export default IconMaterialStoreFilled;
