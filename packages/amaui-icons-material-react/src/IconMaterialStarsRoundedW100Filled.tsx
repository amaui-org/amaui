import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarsRoundedW100Filled'
      short_name='Stars'

      {...props}
    >
      <path d="M12 14.5 14.375 16.3Q14.6 16.5 14.838 16.325Q15.075 16.15 15 15.875L14.1 12.9L16.4 11.275Q16.65 11.1 16.55 10.825Q16.45 10.55 16.175 10.55H13.35L12.375 7.425Q12.3 7.15 12 7.15Q11.7 7.15 11.625 7.425L10.65 10.55H7.825Q7.55 10.55 7.45 10.825Q7.35 11.1 7.6 11.275L9.9 12.9L9 15.875Q8.925 16.15 9.163 16.325Q9.4 16.5 9.625 16.3ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialStarsRoundedW100Filled.displayName = 'AmauiIconMaterialStarsRoundedW100Filled';

export default IconMaterialStarsRoundedW100Filled;
