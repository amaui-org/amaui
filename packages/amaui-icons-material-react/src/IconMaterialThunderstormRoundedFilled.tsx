import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThunderstormRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormRoundedFilled'
      short_name='Thunderstorm'

      {...props}
    >
      <path d="M13.9 21.325 13.05 20.9Q12.625 20.675 12.525 20.2Q12.425 19.725 12.75 19.35L14.5 17.35Q14.65 17.175 14.85 17.087Q15.05 17 15.25 17Q15.9 17 16.163 17.575Q16.425 18.15 16 18.65L15.1 19.675L15.95 20.1Q16.375 20.325 16.475 20.8Q16.575 21.275 16.25 21.65L14.5 23.65Q14.35 23.825 14.15 23.913Q13.95 24 13.75 24Q13.1 24 12.838 23.425Q12.575 22.85 13 22.35ZM7.9 21.325 7.05 20.9Q6.625 20.675 6.525 20.2Q6.425 19.725 6.75 19.35L8.5 17.35Q8.875 17.3 9.288 17.15Q9.7 17 9.25 17Q9.9 17 10.163 17.575Q10.425 18.15 10 18.65L9.1 19.675L9.95 20.1Q10.375 20.325 10.475 20.8Q10.575 21.275 10.25 21.65L8.5 23.65Q8.125 23.7 7.713 23.85Q7.3 24 7.75 24Q7.1 24 6.838 23.425Q6.575 22.85 7 22.35ZM7.5 16Q5.225 16 3.613 14.387Q2 12.775 2 10.5Q2 8.425 3.375 6.875Q4.75 5.325 6.775 5.05Q7.575 3.625 8.963 2.812Q10.35 2 12 2Q14.25 2 15.912 3.438Q17.575 4.875 17.925 7.025Q19.65 7.175 20.825 8.45Q22 9.725 22 11.5Q22 13.375 20.688 14.688Q19.375 16 17.5 16Z"/>
    </Icon>
  );
});

IconMaterialThunderstormRoundedFilled.displayName = 'AmauiIconMaterialThunderstormRoundedFilled';

export default IconMaterialThunderstormRoundedFilled;
