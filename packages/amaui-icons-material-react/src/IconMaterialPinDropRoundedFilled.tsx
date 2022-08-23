import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinDropRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropRoundedFilled'
      short_name='PinDrop'

      {...props}
    >
      <path d="M12 18.65Q11.775 18.65 11.575 18.587Q11.375 18.525 11.2 18.4Q8.075 15.975 6.538 13.675Q5 11.375 5 9.15Q5 7.375 5.638 6.037Q6.275 4.7 7.275 3.8Q8.275 2.9 9.525 2.45Q10.775 2 12 2Q13.225 2 14.475 2.45Q15.725 2.9 16.725 3.8Q17.725 4.7 18.363 6.037Q19 7.375 19 9.15Q19 11.375 17.462 13.675Q15.925 15.975 12.8 18.4Q12.65 18.525 12.438 18.587Q12.225 18.65 12 18.65ZM12 11Q12.825 11 13.413 10.412Q14 9.825 14 9Q14 8.175 13.413 7.587Q12.825 7 12 7Q11.175 7 10.588 7.587Q10 8.175 10 9Q10 9.825 10.588 10.412Q11.175 11 12 11ZM6 22Q5.575 22 5.287 21.712Q5 21.425 5 21Q5 20.575 5.287 20.288Q5.575 20 6 20H18Q18.425 20 18.712 20.288Q19 20.575 19 21Q19 21.425 18.712 21.712Q18.425 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialPinDropRoundedFilled.displayName = 'AmauiIconMaterialPinDropRoundedFilled';

export default IconMaterialPinDropRoundedFilled;
