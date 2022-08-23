import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAndroidRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidRoundedW100Filled'
      short_name='Android'

      {...props}
    >
      <path d="M3.2 16.725Q3.4 14.575 4.525 12.775Q5.65 10.975 7.525 9.925L6.05 7.375Q5.925 7.175 5.988 6.988Q6.05 6.8 6.25 6.675Q6.45 6.575 6.625 6.637Q6.8 6.7 6.925 6.875L8.4 9.45Q10.125 8.725 12 8.725Q13.875 8.725 15.6 9.45L17.075 6.875Q17.2 6.7 17.375 6.637Q17.55 6.575 17.75 6.675Q17.95 6.8 18.012 6.988Q18.075 7.175 17.95 7.375L16.475 9.925Q18.35 10.975 19.475 12.775Q20.6 14.575 20.8 16.725ZM8 14.525Q8.425 14.525 8.713 14.238Q9 13.95 9 13.525Q9 13.1 8.713 12.812Q8.425 12.525 8 12.525Q7.575 12.525 7.287 12.812Q7 13.1 7 13.525Q7 13.95 7.287 14.238Q7.575 14.525 8 14.525ZM16 14.525Q16.425 14.525 16.712 14.238Q17 13.95 17 13.525Q17 13.1 16.712 12.812Q16.425 12.525 16 12.525Q15.575 12.525 15.288 12.812Q15 13.1 15 13.525Q15 13.95 15.288 14.238Q15.575 14.525 16 14.525Z"/>
    </Icon>
  );
});

IconMaterialAndroidRoundedW100Filled.displayName = 'AmauiIconMaterialAndroidRoundedW100Filled';

export default IconMaterialAndroidRoundedW100Filled;
