import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantRoundedW100Filled'
      short_name='Assistant'

      {...props}
    >
      <path d="M11.475 20.625 9.55 18.7H5.8Q5.15 18.7 4.725 18.275Q4.3 17.85 4.3 17.2V4.8Q4.3 4.15 4.725 3.725Q5.15 3.3 5.8 3.3H18.2Q18.85 3.3 19.275 3.725Q19.7 4.15 19.7 4.8V17.2Q19.7 17.85 19.275 18.275Q18.85 18.7 18.2 18.7H14.45L12.525 20.625Q12.3 20.85 12 20.85Q11.7 20.85 11.475 20.625ZM13.075 12.075 14.625 11.375Q14.875 11.25 14.875 11Q14.875 10.75 14.625 10.625L13.075 9.925L12.375 8.375Q12.25 8.125 12 8.125Q11.75 8.125 11.625 8.375L10.925 9.925L9.375 10.625Q9.125 10.75 9.125 11Q9.125 11.25 9.375 11.375L10.925 12.075L11.625 13.625Q11.75 13.875 12 13.875Q12.25 13.875 12.375 13.625Z"/>
    </Icon>
  );
});

IconMaterialAssistantRoundedW100Filled.displayName = 'AmauiIconMaterialAssistantRoundedW100Filled';

export default IconMaterialAssistantRoundedW100Filled;
