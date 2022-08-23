import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageRounded'
      short_name='HideImage'

      {...props}
    >
      <path d="M21 18.15 19 16.15V5Q19 5 19 5Q19 5 19 5H7.85L5.85 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5ZM19.1 21.9 18.2 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.8L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM11.25 16 12.075 14.9 5 7.825V19Q5 19 5 19Q5 19 5 19H16.175L14.175 17H7Q6.7 17 6.55 16.725Q6.4 16.45 6.6 16.2L8.6 13.525Q8.75 13.325 9 13.325Q9.25 13.325 9.4 13.525ZM12 12Q12 12 12 12Q12 12 12 12ZM10.6 13.4Q10.6 13.4 10.6 13.4Q10.6 13.4 10.6 13.4Z"/>
    </Icon>
  );
});

IconMaterialHideImageRounded.displayName = 'AmauiIconMaterialHideImageRounded';

export default IconMaterialHideImageRounded;
