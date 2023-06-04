import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSortByAlphaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlphaW100'

      short_name='SortByAlpha'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m2.8 16.45 3.7-8.9h.7l3.65 8.9H10l-.9-2.35H4.55l-1 2.35Zm2-3h4L6.85 8.6h-.1Zm9.45 3v-.65l5.25-7.6h-5.05v-.65h5.95v.65l-5.25 7.6h5.3v.65ZM9.6 4.75l2.4-2.4 2.4 2.4Zm2.4 16.9-2.4-2.4h4.8Z"/>
    </Icon>
  );
});

IconMaterialSortByAlphaW100.displayName = 'AmauiIconMaterialSortByAlphaW100';

export default IconMaterialSortByAlphaW100;
