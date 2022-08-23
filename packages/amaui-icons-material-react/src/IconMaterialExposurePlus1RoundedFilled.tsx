import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposurePlus1RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus1RoundedFilled'
      short_name='ExposurePlus1'

      {...props}
    >
      <path d="M7 17Q6.575 17 6.287 16.712Q6 16.425 6 16V14H4Q3.575 14 3.288 13.712Q3 13.425 3 13Q3 12.575 3.288 12.287Q3.575 12 4 12H6V10Q6 9.575 6.287 9.287Q6.575 9 7 9Q7.425 9 7.713 9.287Q8 9.575 8 10V12H10Q10.425 12 10.713 12.287Q11 12.575 11 13Q11 13.425 10.713 13.712Q10.425 14 10 14H8V16Q8 16.425 7.713 16.712Q7.425 17 7 17ZM16.875 19Q16.4 19 16.075 18.675Q15.75 18.35 15.75 17.875V8.05L14.3 9.1Q13.95 9.375 13.538 9.287Q13.125 9.2 12.875 8.825Q12.625 8.475 12.713 8.037Q12.8 7.6 13.15 7.35L15.6 5.575Q15.95 5.325 16.438 5.312Q16.925 5.3 17.275 5.5Q17.575 5.675 17.788 6.05Q18 6.425 18 6.775V17.875Q18 18.35 17.675 18.675Q17.35 19 16.875 19Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus1RoundedFilled.displayName = 'AmauiIconMaterialExposurePlus1RoundedFilled';

export default IconMaterialExposurePlus1RoundedFilled;
