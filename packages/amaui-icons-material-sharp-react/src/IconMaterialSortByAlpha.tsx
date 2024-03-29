import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSortByAlpha = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlpha'

      short_name='SortByAlpha'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17 5.75 7H7.9l3.75 10H9.6l-.85-2.4H4.9L4.1 17Zm3.5-4.1h2.6L6.9 9.15h-.15Zm8.2 4.1v-1.9l5.05-6.3H13.9V7h7.05v1.9l-5 6.3H21V17ZM9 5l3-3 3 3Zm3 17-3-3h6Z"/>
    </Icon>
  );
});

IconMaterialSortByAlpha.displayName = 'AmauiIconMaterialSortByAlpha';

export default IconMaterialSortByAlpha;
