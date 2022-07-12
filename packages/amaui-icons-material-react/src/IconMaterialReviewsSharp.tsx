import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReviewsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsSharp'
      short_name='Reviews'

      {...props}
    >
      <path d="M12 15 13.55 11.55 17 10 13.55 8.45 12 5 10.45 8.45 7 10 10.45 11.55ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialReviewsSharp;
