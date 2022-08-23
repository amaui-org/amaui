import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllOutSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutSharpW100'
      short_name='AllOut'

      {...props}
    >
      <path d="M4.3 19.7V16.65H5V19H7.35V19.7ZM16.65 19.7V19H19V16.65H19.7V19.7ZM12 17.7Q9.625 17.7 7.963 16.038Q6.3 14.375 6.3 12Q6.3 9.625 7.963 7.963Q9.625 6.3 12 6.3Q14.375 6.3 16.038 7.963Q17.7 9.625 17.7 12Q17.7 14.375 16.038 16.038Q14.375 17.7 12 17.7ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17ZM4.3 7.35V4.3H7.35V5H5V7.35ZM19 7.35V5H16.65V4.3H19.7V7.35ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialAllOutSharpW100.displayName = 'AmauiIconMaterialAllOutSharpW100';

export default IconMaterialAllOutSharpW100;
