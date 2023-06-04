import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter'

      short_name='Filter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14h10l-3.45-4.5-2.3 3-1.55-2Zm-3 4V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter.displayName = 'AmauiIconMaterialFilter';

export default IconMaterialFilter;
