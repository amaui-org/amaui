import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureNeg1RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1RoundedFilled'
      short_name='ExposureNeg1'

      {...props}
    >
      <path d="M4 14Q3.575 14 3.288 13.712Q3 13.425 3 13Q3 12.575 3.288 12.287Q3.575 12 4 12H9Q9.425 12 9.713 12.287Q10 12.575 10 13Q10 13.425 9.713 13.712Q9.425 14 9 14ZM16.875 19Q16.4 19 16.075 18.675Q15.75 18.35 15.75 17.875V8.05L14.3 9.1Q13.95 9.375 13.538 9.287Q13.125 9.2 12.875 8.825Q12.625 8.475 12.713 8.037Q12.8 7.6 13.15 7.35L15.6 5.575Q15.95 5.325 16.438 5.312Q16.925 5.3 17.275 5.5Q17.575 5.675 17.788 6.05Q18 6.425 18 6.775V17.875Q18 18.35 17.675 18.675Q17.35 19 16.875 19Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1RoundedFilled.displayName = 'AmauiIconMaterialExposureNeg1RoundedFilled';

export default IconMaterialExposureNeg1RoundedFilled;
