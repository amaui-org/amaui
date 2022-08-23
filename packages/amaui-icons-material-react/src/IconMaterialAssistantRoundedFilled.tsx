import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantRoundedFilled'
      short_name='Assistant'

      {...props}
    >
      <path d="M11.3 22.3 9 20H5Q4.175 20 3.587 19.413Q3 18.825 3 18V4Q3 3.175 3.587 2.587Q4.175 2 5 2H19Q19.825 2 20.413 2.587Q21 3.175 21 4V18Q21 18.825 20.413 19.413Q19.825 20 19 20H15L12.7 22.3Q12.425 22.575 12 22.575Q11.575 22.575 11.3 22.3ZM13.55 12.55 15.975 11.45Q16.275 11.325 16.275 11Q16.275 10.675 15.975 10.55L13.55 9.45L12.45 7.025Q12.325 6.725 12 6.725Q11.675 6.725 11.55 7.025L10.45 9.45L8.025 10.55Q7.725 10.675 7.725 11Q7.725 11.325 8.025 11.45L10.45 12.55L11.55 14.975Q11.675 15.275 12 15.275Q12.325 15.275 12.45 14.975Z"/>
    </Icon>
  );
});

IconMaterialAssistantRoundedFilled.displayName = 'AmauiIconMaterialAssistantRoundedFilled';

export default IconMaterialAssistantRoundedFilled;
