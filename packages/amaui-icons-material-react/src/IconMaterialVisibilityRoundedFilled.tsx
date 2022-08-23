import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVisibilityRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityRoundedFilled'
      short_name='Visibility'

      {...props}
    >
      <path d="M12 16Q13.875 16 15.188 14.688Q16.5 13.375 16.5 11.5Q16.5 9.625 15.188 8.312Q13.875 7 12 7Q10.125 7 8.812 8.312Q7.5 9.625 7.5 11.5Q7.5 13.375 8.812 14.688Q10.125 16 12 16ZM12 14.2Q10.875 14.2 10.088 13.412Q9.3 12.625 9.3 11.5Q9.3 10.375 10.088 9.587Q10.875 8.8 12 8.8Q13.125 8.8 13.913 9.587Q14.7 10.375 14.7 11.5Q14.7 12.625 13.913 13.412Q13.125 14.2 12 14.2ZM12 19Q8.525 19 5.65 17.163Q2.775 15.325 1.3 12.2Q1.225 12.075 1.2 11.887Q1.175 11.7 1.175 11.5Q1.175 11.3 1.2 11.112Q1.225 10.925 1.3 10.8Q2.775 7.675 5.65 5.838Q8.525 4 12 4Q15.475 4 18.35 5.838Q21.225 7.675 22.7 10.8Q22.775 10.925 22.8 11.112Q22.825 11.3 22.825 11.5Q22.825 11.7 22.8 11.887Q22.775 12.075 22.7 12.2Q21.225 15.325 18.35 17.163Q15.475 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialVisibilityRoundedFilled.displayName = 'AmauiIconMaterialVisibilityRoundedFilled';

export default IconMaterialVisibilityRoundedFilled;
