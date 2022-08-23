import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleLeftRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleLeftRoundedW100Filled'
      short_name='ArrowCircleLeft'

      {...props}
    >
      <path d="M11.775 14.85Q11.875 14.95 12 14.95Q12.125 14.95 12.25 14.825Q12.35 14.725 12.35 14.6Q12.35 14.475 12.25 14.35L10.225 12.35H15.025Q15.15 12.35 15.25 12.25Q15.35 12.15 15.35 12Q15.35 11.85 15.25 11.75Q15.15 11.65 15 11.65H10.225L12.25 9.625Q12.35 9.525 12.35 9.4Q12.35 9.275 12.225 9.15Q12.125 9.05 12 9.05Q11.875 9.05 11.75 9.15L9.45 11.475Q9.225 11.7 9.225 12Q9.225 12.3 9.45 12.525ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleLeftRoundedW100Filled.displayName = 'AmauiIconMaterialArrowCircleLeftRoundedW100Filled';

export default IconMaterialArrowCircleLeftRoundedW100Filled;
