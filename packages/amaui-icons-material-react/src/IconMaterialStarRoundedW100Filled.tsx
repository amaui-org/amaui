import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRoundedW100Filled'
      short_name='Star'

      {...props}
    >
      <path d="M10.075 17.15Q9.65 17.5 9.213 17.188Q8.775 16.875 8.925 16.35L9.65 13.9L7.925 12.65Q7.475 12.325 7.65 11.812Q7.825 11.3 8.375 11.3H10.55L11.275 8.875Q11.35 8.6 11.562 8.475Q11.775 8.35 12 8.35Q12.225 8.35 12.438 8.475Q12.65 8.6 12.725 8.875L13.45 11.3H15.625Q16.175 11.3 16.35 11.812Q16.525 12.325 16.075 12.65L14.35 13.9L15.075 16.35Q15.225 16.875 14.788 17.188Q14.35 17.5 13.925 17.15L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialStarRoundedW100Filled.displayName = 'AmauiIconMaterialStarRoundedW100Filled';

export default IconMaterialStarRoundedW100Filled;
