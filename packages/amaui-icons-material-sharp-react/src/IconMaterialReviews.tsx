import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReviews = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Reviews'

      short_name='Reviews'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15 1.55-3.45L17 10l-3.45-1.55L12 5l-1.55 3.45L7 10l3.45 1.55ZM2 22V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialReviews.displayName = 'AmauiIconMaterialReviews';

export default IconMaterialReviews;
