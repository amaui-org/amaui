import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReviewsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsFilled'

      short_name='Reviews'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15 1.55-3.45L17 10l-3.45-1.55L12 5l-1.55 3.45L7 10l3.45 1.55ZM2 22V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialReviewsFilled.displayName = 'AmauiIconMaterialReviewsFilled';

export default IconMaterialReviewsFilled;
