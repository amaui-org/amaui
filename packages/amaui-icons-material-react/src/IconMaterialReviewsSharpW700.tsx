import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReviewsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsSharpW700'
      short_name='Reviews'

      {...props}
    >
      <path d="M12 15 13.55 11.55 17 10 13.55 8.45 12 5 10.45 8.45 7 10 10.45 11.55ZM1.15 22.85V1.15H22.85V18.85H5.15ZM4.3 15.975 4.575 15.7H19.7V4.3H4.3ZM4.3 15.975V4.3V15.7Z"/>
    </Icon>
  )
});

export default IconMaterialReviewsSharpW700;
