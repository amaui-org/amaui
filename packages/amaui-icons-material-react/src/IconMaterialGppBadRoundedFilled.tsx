import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGppBadRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBadRoundedFilled'
      short_name='GppBad'

      {...props}
    >
      <path d="M12 13.4 13.4 14.8Q13.675 15.075 14.1 15.075Q14.525 15.075 14.8 14.8Q15.075 14.525 15.075 14.1Q15.075 13.675 14.8 13.4L13.4 12L14.8 10.6Q15.075 10.325 15.075 9.9Q15.075 9.475 14.8 9.2Q14.525 8.925 14.1 8.925Q13.675 8.925 13.4 9.2L12 10.6L10.6 9.2Q10.325 8.925 9.9 8.925Q9.475 8.925 9.2 9.2Q8.925 9.475 8.925 9.9Q8.925 10.325 9.2 10.6L10.6 12L9.2 13.4Q8.925 13.675 8.925 14.1Q8.925 14.525 9.2 14.8Q9.475 15.075 9.9 15.075Q10.325 15.075 10.6 14.8ZM12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925Z"/>
    </Icon>
  );
});

IconMaterialGppBadRoundedFilled.displayName = 'AmauiIconMaterialGppBadRoundedFilled';

export default IconMaterialGppBadRoundedFilled;
