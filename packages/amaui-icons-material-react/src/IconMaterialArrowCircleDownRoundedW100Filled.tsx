import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleDownRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleDownRoundedW100Filled'
      short_name='ArrowCircleDown'

      {...props}
    >
      <path d="M12 14.9Q12.15 14.9 12.288 14.85Q12.425 14.8 12.55 14.675L14.85 12.375Q14.95 12.275 14.95 12.137Q14.95 12 14.85 11.9Q14.75 11.8 14.613 11.8Q14.475 11.8 14.375 11.9L12.375 13.925V9.15Q12.375 9 12.262 8.887Q12.15 8.775 12 8.775Q11.85 8.775 11.738 8.887Q11.625 9 11.625 9.15V13.925L9.625 11.9Q9.525 11.8 9.387 11.8Q9.25 11.8 9.15 11.9Q9.05 12 9.05 12.137Q9.05 12.275 9.15 12.375L11.475 14.675Q11.6 14.8 11.725 14.85Q11.85 14.9 12 14.9ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleDownRoundedW100Filled.displayName = 'AmauiIconMaterialArrowCircleDownRoundedW100Filled';

export default IconMaterialArrowCircleDownRoundedW100Filled;
