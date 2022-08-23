import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarHalfRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfRoundedW100'
      short_name='StarHalf'

      {...props}
    >
      <path d="M14.45 16.7 13.525 13.625 15.775 12H12.925L12 8.9V14.825ZM10.075 17.15Q9.65 17.5 9.213 17.188Q8.775 16.875 8.925 16.35L9.65 13.9L7.95 12.65Q7.525 12.325 7.675 11.812Q7.825 11.3 8.375 11.3H10.55L11.275 8.875Q11.35 8.6 11.562 8.475Q11.775 8.35 12 8.35Q12.225 8.35 12.438 8.475Q12.65 8.6 12.725 8.875L13.45 11.3H15.625Q16.175 11.3 16.325 11.812Q16.475 12.325 16.05 12.65L14.35 13.9L15.075 16.35Q15.225 16.875 14.788 17.188Q14.35 17.5 13.925 17.15L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarHalfRoundedW100.displayName = 'AmauiIconMaterialStarHalfRoundedW100';

export default IconMaterialStarHalfRoundedW100;
