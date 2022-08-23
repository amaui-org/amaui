import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageRoundedFilled'
      short_name='HideImage'

      {...props}
    >
      <path d="M21 18.15 5.85 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5ZM19.1 21.9 18.2 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.8L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM7 17H14.175L12.075 14.9L11.25 16L9.4 13.525Q9.25 13.325 9 13.325Q8.75 13.325 8.6 13.525L6.6 16.2Q6.4 16.45 6.55 16.725Q6.7 17 7 17Z"/>
    </Icon>
  );
});

IconMaterialHideImageRoundedFilled.displayName = 'AmauiIconMaterialHideImageRoundedFilled';

export default IconMaterialHideImageRoundedFilled;
