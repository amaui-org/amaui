import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleRightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRightRoundedW100Filled'
      short_name='ArrowCircleRight'

      {...props}
    >
      <path d="M12.25 14.825 14.55 12.525Q14.775 12.3 14.775 12Q14.775 11.7 14.55 11.475L12.225 9.15Q12.125 9.05 12 9.05Q11.875 9.05 11.775 9.15Q11.65 9.275 11.65 9.4Q11.65 9.525 11.775 9.625L13.775 11.65H8.975Q8.85 11.65 8.75 11.75Q8.65 11.85 8.65 12Q8.65 12.15 8.75 12.25Q8.85 12.35 9 12.35H13.775L11.75 14.375Q11.65 14.475 11.65 14.6Q11.65 14.725 11.775 14.825Q11.875 14.95 12 14.95Q12.125 14.95 12.25 14.825ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleRightRoundedW100Filled.displayName = 'AmauiIconMaterialArrowCircleRightRoundedW100Filled';

export default IconMaterialArrowCircleRightRoundedW100Filled;
