import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConnectedTvRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvRoundedFilled'
      short_name='ConnectedTv'

      {...props}
    >
      <path d="M5 16H7Q7 15.175 6.412 14.587Q5.825 14 5 14ZM9.275 16Q9.575 16 9.788 15.775Q10 15.55 9.95 15.275Q9.7 13.625 8.538 12.462Q7.375 11.3 5.725 11.05Q5.45 11 5.225 11.2Q5 11.4 5 11.725Q5 12 5.2 12.238Q5.4 12.475 5.725 12.525Q6.775 12.725 7.525 13.475Q8.275 14.225 8.475 15.275Q8.525 15.6 8.762 15.8Q9 16 9.275 16ZM12.275 16Q12.575 16 12.788 15.775Q13 15.55 12.975 15.275Q12.7 12.375 10.663 10.337Q8.625 8.3 5.725 8.025Q5.45 8 5.225 8.2Q5 8.4 5 8.725Q5 9 5.213 9.225Q5.425 9.45 5.725 9.5Q8.025 9.75 9.637 11.363Q11.25 12.975 11.5 15.275Q11.55 15.575 11.763 15.787Q11.975 16 12.275 16ZM9 21Q8.575 21 8.288 20.712Q8 20.425 8 20V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V20Q16 20.425 15.713 20.712Q15.425 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialConnectedTvRoundedFilled.displayName = 'AmauiIconMaterialConnectedTvRoundedFilled';

export default IconMaterialConnectedTvRoundedFilled;
