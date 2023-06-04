import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPages = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pages'

      short_name='Pages'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 17 1.55-3.45L17 12l-3.45-1.55L12 7l-1.55 3.45L7 12l3.45 1.55Zm-9 4V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialPages.displayName = 'AmauiIconMaterialPages';

export default IconMaterialPages;
