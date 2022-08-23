import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCancelPresentationRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationRounded'
      short_name='CancelPresentation'

      {...props}
    >
      <path d="M8.7 15.3Q8.975 15.575 9.4 15.575Q9.825 15.575 10.1 15.3L12 13.4L13.925 15.325Q14.2 15.6 14.6 15.6Q15 15.6 15.3 15.3Q15.575 15.025 15.575 14.6Q15.575 14.175 15.3 13.9L13.4 12L15.325 10.075Q15.6 9.8 15.6 9.4Q15.6 9 15.3 8.7Q15.025 8.425 14.6 8.425Q14.175 8.425 13.9 8.7L12 10.6L10.075 8.675Q9.8 8.4 9.4 8.4Q9 8.4 8.7 8.7Q8.425 8.975 8.425 9.4Q8.425 9.825 8.7 10.1L10.6 12L8.675 13.925Q8.4 14.2 8.4 14.6Q8.4 15 8.7 15.3ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationRounded.displayName = 'AmauiIconMaterialCancelPresentationRounded';

export default IconMaterialCancelPresentationRounded;
