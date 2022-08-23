import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartButtonRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonRounded'
      short_name='SmartButton'

      {...props}
    >
      <path d="M4 17Q3.175 17 2.588 16.413Q2 15.825 2 15V9Q2 8.175 2.588 7.587Q3.175 7 4 7H20Q20.825 7 21.413 7.587Q22 8.175 22 9V15Q22 15.825 21.413 16.413Q20.825 17 20 17H19V15H20Q20 15 20 15Q20 15 20 15V9Q20 9 20 9Q20 9 20 9H4Q4 9 4 9Q4 9 4 9V15Q4 15 4 15Q4 15 4 15H10V17ZM14.075 18.1 13.4 16.6 11.9 15.925Q11.575 15.775 11.575 15.5Q11.575 15.225 11.9 15.075L13.4 14.4L14.075 12.9Q14.225 12.575 14.5 12.575Q14.775 12.575 14.925 12.9L15.6 14.4L17.1 15.075Q17.4 15.2 17.4 15.5Q17.4 15.8 17.1 15.925L15.6 16.6L14.925 18.1Q14.8 18.4 14.5 18.4Q14.2 18.4 14.075 18.1ZM16.7 13.325 16.375 12.625 15.675 12.3Q15.4 12.175 15.4 12Q15.4 11.825 15.675 11.7L16.375 11.375L16.7 10.675Q16.825 10.4 17 10.4Q17.175 10.4 17.3 10.675L17.625 11.375L18.325 11.7Q18.6 11.825 18.6 12Q18.6 12.175 18.325 12.3L17.625 12.625L17.3 13.325Q17.175 13.6 17 13.6Q16.825 13.6 16.7 13.325Z"/>
    </Icon>
  );
});

IconMaterialSmartButtonRounded.displayName = 'AmauiIconMaterialSmartButtonRounded';

export default IconMaterialSmartButtonRounded;
