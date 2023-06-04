import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFirstPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageFilled'

      short_name='FirstPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V6h2v12Zm11 0-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialFirstPageFilled.displayName = 'AmauiIconMaterialFirstPageFilled';

export default IconMaterialFirstPageFilled;
