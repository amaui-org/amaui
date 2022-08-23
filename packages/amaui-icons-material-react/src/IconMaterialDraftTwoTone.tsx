import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftTwoTone'
      short_name='Draft'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V9H14Q13.575 9 13.288 8.712Q13 8.425 13 8V4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20ZM6 20Q6 20 6 20Q6 20 6 20V9V4Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialDraftTwoTone.displayName = 'AmauiIconMaterialDraftTwoTone';

export default IconMaterialDraftTwoTone;
