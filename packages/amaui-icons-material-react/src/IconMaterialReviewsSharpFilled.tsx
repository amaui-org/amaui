import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReviewsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsSharpFilled'
      short_name='Reviews'

      {...props}
    >
      <path d="M12 15 13.55 11.55 17 10 13.55 8.45 12 5 10.45 8.45 7 10 10.45 11.55ZM2 22V2H22V18H6Z"/>
    </Icon>
  );
});

IconMaterialReviewsSharpFilled.displayName = 'AmauiIconMaterialReviewsSharpFilled';

export default IconMaterialReviewsSharpFilled;
