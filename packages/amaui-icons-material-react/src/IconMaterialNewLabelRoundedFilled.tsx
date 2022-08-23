import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewLabelRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelRoundedFilled'
      short_name='NewLabel'

      {...props}
    >
      <path d="M6 20Q5.575 20 5.287 19.712Q5 19.425 5 19V17H3Q2.575 17 2.288 16.712Q2 16.425 2 16Q2 15.575 2.288 15.287Q2.575 15 3 15H5V13Q5 12.575 5.287 12.287Q5.575 12 6 12Q6.425 12 6.713 12.287Q7 12.575 7 13V15H9Q9.425 15 9.713 15.287Q10 15.575 10 16Q10 16.425 9.713 16.712Q9.425 17 9 17H7V19Q7 19.425 6.713 19.712Q6.425 20 6 20ZM12 19V15.975Q12 14.725 11.137 13.863Q10.275 13 9.025 13H9V12.975Q9 11.725 8.137 10.863Q7.275 10 6.025 10H3V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.5 5 15.938 5.225Q16.375 5.45 16.65 5.85L20.175 10.85Q20.55 11.375 20.55 12Q20.55 12.625 20.175 13.15L16.65 18.15Q16.375 18.55 15.938 18.775Q15.5 19 15 19Z"/>
    </Icon>
  );
});

IconMaterialNewLabelRoundedFilled.displayName = 'AmauiIconMaterialNewLabelRoundedFilled';

export default IconMaterialNewLabelRoundedFilled;
