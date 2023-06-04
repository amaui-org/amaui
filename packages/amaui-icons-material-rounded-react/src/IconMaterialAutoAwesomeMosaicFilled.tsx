import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicFilled'

      short_name='AutoAwesomeMosaic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h6Zm2-10V3h6q.825 0 1.413.587Q21 4.175 21 5v6Zm0 10v-8h8v6q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicFilled.displayName = 'AmauiIconMaterialAutoAwesomeMosaicFilled';

export default IconMaterialAutoAwesomeMosaicFilled;
