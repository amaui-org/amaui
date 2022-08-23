import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFiberSmartRecordRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberSmartRecordRounded'
      short_name='FiberSmartRecord'

      {...props}
    >
      <path d="M9 19Q6.075 19 4.037 16.962Q2 14.925 2 12Q2 9.075 4.037 7.037Q6.075 5 9 5Q11.925 5 13.963 7.037Q16 9.075 16 12Q16 14.925 13.963 16.962Q11.925 19 9 19ZM9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12Q9 12 9 12ZM17.5 18.525Q16.925 18.725 16.462 18.488Q16 18.25 16 17.6Q16 17.325 16.188 17.075Q16.375 16.825 16.65 16.725Q18.15 16.225 19.075 14.925Q20 13.625 20 12Q20 10.375 19.075 9.075Q18.15 7.775 16.65 7.275Q16.375 7.175 16.188 6.925Q16 6.675 16 6.4Q16 5.775 16.45 5.525Q16.9 5.275 17.475 5.475Q19.5 6.2 20.75 7.987Q22 9.775 22 12Q22 14.225 20.75 16Q19.5 17.775 17.5 18.525ZM9 17Q11.075 17 12.538 15.537Q14 14.075 14 12Q14 9.925 12.538 8.462Q11.075 7 9 7Q6.925 7 5.463 8.462Q4 9.925 4 12Q4 14.075 5.463 15.537Q6.925 17 9 17Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecordRounded.displayName = 'AmauiIconMaterialFiberSmartRecordRounded';

export default IconMaterialFiberSmartRecordRounded;
