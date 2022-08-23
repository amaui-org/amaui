import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRecommendRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecommendRoundedW100Filled'
      short_name='Recommend'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM9.35 15.95H14.55Q14.75 15.95 14.887 15.875Q15.025 15.8 15.1 15.6L16.7 11.9Q16.775 11.7 16.812 11.525Q16.85 11.35 16.85 11.2V10.85Q16.85 10.7 16.775 10.625Q16.7 10.55 16.55 10.55H11.2L11.75 7.75V7.6Q11.75 7.475 11.738 7.4Q11.725 7.325 11.65 7.25L11.5 7.1L8.8 10Q8.725 10.075 8.688 10.188Q8.65 10.3 8.65 10.45V15.25Q8.65 15.55 8.85 15.75Q9.05 15.95 9.35 15.95Z"/>
    </Icon>
  );
});

IconMaterialRecommendRoundedW100Filled.displayName = 'AmauiIconMaterialRecommendRoundedW100Filled';

export default IconMaterialRecommendRoundedW100Filled;
