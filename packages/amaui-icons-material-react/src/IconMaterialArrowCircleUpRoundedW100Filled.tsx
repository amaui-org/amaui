import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleUpRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleUpRoundedW100Filled'
      short_name='ArrowCircleUp'

      {...props}
    >
      <path d="M12 15.2Q12.15 15.2 12.262 15.1Q12.375 15 12.375 14.85V10.075L14.375 12.1Q14.475 12.2 14.613 12.2Q14.75 12.2 14.85 12.1Q14.95 12 14.95 11.863Q14.95 11.725 14.85 11.625L12.55 9.325Q12.425 9.2 12.288 9.15Q12.15 9.1 12 9.1Q11.85 9.1 11.725 9.15Q11.6 9.2 11.475 9.325L9.15 11.625Q9.05 11.725 9.05 11.863Q9.05 12 9.15 12.1Q9.25 12.2 9.387 12.2Q9.525 12.2 9.625 12.1L11.65 10.075V14.85Q11.65 15 11.75 15.1Q11.85 15.2 12 15.2ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleUpRoundedW100Filled.displayName = 'AmauiIconMaterialArrowCircleUpRoundedW100Filled';

export default IconMaterialArrowCircleUpRoundedW100Filled;
