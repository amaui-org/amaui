import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTransgenderSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransgenderSharpFilled'
      short_name='Transgender'

      {...props}
    >
      <path d="M12 15Q13.45 15 14.475 13.975Q15.5 12.95 15.5 11.5Q15.5 10.05 14.475 9.025Q13.45 8 12 8Q10.55 8 9.525 9.025Q8.5 10.05 8.5 11.5Q8.5 12.95 9.525 13.975Q10.55 15 12 15ZM11 23V21H9V19H11V16.9Q9.075 16.55 7.788 15.037Q6.5 13.525 6.5 11.5Q6.5 10.625 6.75 9.837Q7 9.05 7.45 8.4L6.8 7.75L5.4 9.15L4 7.75L5.4 6.325L3.5 4.425V7H1.5V1H7.5V3H4.925L6.825 4.9L8.25 3.5L9.65 4.9L8.25 6.325L8.9 6.975Q9.55 6.5 10.338 6.25Q11.125 6 12 6Q12.875 6 13.663 6.25Q14.45 6.5 15.1 6.975L19.075 3H16.5V1H22.5V7H20.5V4.425L16.525 8.375Q17 9.05 17.25 9.837Q17.5 10.625 17.5 11.5Q17.5 13.525 16.212 15.037Q14.925 16.55 13 16.9V19H15V21H13V23Z"/>
    </Icon>
  );
});

IconMaterialTransgenderSharpFilled.displayName = 'AmauiIconMaterialTransgenderSharpFilled';

export default IconMaterialTransgenderSharpFilled;
