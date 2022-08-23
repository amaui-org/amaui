import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRequestQuoteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestQuoteRoundedFilled'
      short_name='RequestQuote'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM12 19Q12.425 19 12.713 18.712Q13 18.425 13 18H14Q14.425 18 14.713 17.712Q15 17.425 15 17V14Q15 13.575 14.713 13.287Q14.425 13 14 13H11V12H14Q14.425 12 14.713 11.712Q15 11.425 15 11Q15 10.575 14.713 10.287Q14.425 10 14 10H13Q13 9.575 12.713 9.287Q12.425 9 12 9Q11.575 9 11.288 9.287Q11 9.575 11 10H10Q9.575 10 9.288 10.287Q9 10.575 9 11V14Q9 14.425 9.288 14.712Q9.575 15 10 15H13V16H10Q9.575 16 9.288 16.288Q9 16.575 9 17Q9 17.425 9.288 17.712Q9.575 18 10 18H11Q11 18.425 11.288 18.712Q11.575 19 12 19ZM14 8H17.5L13 3.5V7Q13 7.425 13.288 7.713Q13.575 8 14 8Z"/>
    </Icon>
  );
});

IconMaterialRequestQuoteRoundedFilled.displayName = 'AmauiIconMaterialRequestQuoteRoundedFilled';

export default IconMaterialRequestQuoteRoundedFilled;
