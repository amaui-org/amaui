import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapVertRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVertRoundedFilled'
      short_name='SwapVert'

      {...props}
    >
      <path d="M14 18.175V12Q14 11.575 14.288 11.287Q14.575 11 15 11Q15.425 11 15.713 11.287Q16 11.575 16 12V18.175L17.875 16.3Q18.15 16.025 18.562 16.012Q18.975 16 19.275 16.3Q19.575 16.575 19.588 16.987Q19.6 17.4 19.3 17.7L15.7 21.3Q15.55 21.45 15.375 21.512Q15.2 21.575 15 21.575Q14.8 21.575 14.625 21.512Q14.45 21.45 14.3 21.3L10.7 17.7Q10.425 17.425 10.425 17.013Q10.425 16.6 10.725 16.3Q11.025 16.025 11.425 16.012Q11.825 16 12.125 16.3ZM8 5.825 6.125 7.7Q5.8 8.025 5.4 8Q5 7.975 4.725 7.7Q4.425 7.4 4.425 6.987Q4.425 6.575 4.7 6.3L8.3 2.7Q8.45 2.55 8.625 2.487Q8.8 2.425 9 2.425Q9.2 2.425 9.375 2.487Q9.55 2.55 9.7 2.7L13.3 6.3Q13.575 6.575 13.575 7Q13.575 7.425 13.3 7.7Q13 8 12.588 8Q12.175 8 11.875 7.7L10 5.825V12Q10 12.425 9.713 12.712Q9.425 13 9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Z"/>
    </Icon>
  );
});

IconMaterialSwapVertRoundedFilled.displayName = 'AmauiIconMaterialSwapVertRoundedFilled';

export default IconMaterialSwapVertRoundedFilled;
