import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageRoundedFilled'
      short_name='ContactPage'

      {...props}
    >
      <path d="M12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM8 18H16V17.425Q16 16.825 15.675 16.325Q15.35 15.825 14.775 15.575Q14.125 15.3 13.438 15.15Q12.75 15 12 15Q11.25 15 10.562 15.15Q9.875 15.3 9.225 15.575Q8.65 15.825 8.325 16.325Q8 16.825 8 17.425ZM18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialContactPageRoundedFilled.displayName = 'AmauiIconMaterialContactPageRoundedFilled';

export default IconMaterialContactPageRoundedFilled;
