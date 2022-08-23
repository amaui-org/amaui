import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBuildCircleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildCircleRoundedW100Filled'
      short_name='BuildCircle'

      {...props}
    >
      <path d="M9.325 11.075 7.275 9.05Q7.15 9.325 7.075 9.637Q7 9.95 7 10.3Q7 11.6 7.925 12.525Q8.85 13.45 10.15 13.45Q10.55 13.45 10.9 13.35Q11.25 13.25 11.6 13.1L15.275 16.8Q15.5 17.025 15.812 17.025Q16.125 17.025 16.35 16.8L16.625 16.5Q16.85 16.275 16.85 15.975Q16.85 15.675 16.625 15.45L12.95 11.75Q13.125 11.45 13.213 11.087Q13.3 10.725 13.3 10.3Q13.3 9 12.375 8.088Q11.45 7.175 10.15 7.175Q9.8 7.175 9.5 7.25Q9.2 7.325 8.925 7.45L10.925 9.475ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialBuildCircleRoundedW100Filled.displayName = 'AmauiIconMaterialBuildCircleRoundedW100Filled';

export default IconMaterialBuildCircleRoundedW100Filled;
