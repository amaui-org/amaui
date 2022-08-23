import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestorePageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageRoundedFilled'
      short_name='RestorePage'

      {...props}
    >
      <path d="M18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM12 17.75Q13.95 17.75 15.35 16.35Q16.75 14.95 16.75 13Q16.75 11.05 15.35 9.65Q13.95 8.25 12 8.25Q11.05 8.25 10.225 8.6Q9.4 8.95 8.75 9.55V8.75Q8.75 8.425 8.538 8.212Q8.325 8 8 8Q7.675 8 7.463 8.212Q7.25 8.425 7.25 8.75V11.25Q7.25 11.675 7.537 11.962Q7.825 12.25 8.25 12.25H10.75Q11.075 12.25 11.288 12.037Q11.5 11.825 11.5 11.5Q11.5 11.175 11.288 10.962Q11.075 10.75 10.75 10.75H9.7Q10.125 10.3 10.725 10.025Q11.325 9.75 12 9.75Q13.35 9.75 14.3 10.7Q15.25 11.65 15.25 13Q15.25 14.35 14.3 15.3Q13.35 16.25 12 16.25Q11.025 16.25 10.262 15.738Q9.5 15.225 9.075 14.4Q9 14.225 8.825 14.113Q8.65 14 8.45 14Q7.975 14 7.738 14.325Q7.5 14.65 7.7 15.05Q8.275 16.25 9.425 17Q10.575 17.75 12 17.75Z"/>
    </Icon>
  );
});

IconMaterialRestorePageRoundedFilled.displayName = 'AmauiIconMaterialRestorePageRoundedFilled';

export default IconMaterialRestorePageRoundedFilled;
