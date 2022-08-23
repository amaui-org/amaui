import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneOutlineRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneOutlineRoundedW100Filled'
      short_name='DoneOutline'

      {...props}
    >
      <path d="M9.525 17.075 19.175 7.425 18.675 6.925 9.525 16.075 5.3 11.85 4.8 12.35ZM9.525 17.775Q9.4 17.775 9.262 17.725Q9.125 17.675 9.025 17.575L4.3 12.85Q4.2 12.75 4.15 12.613Q4.1 12.475 4.1 12.35Q4.1 12.225 4.138 12.087Q4.175 11.95 4.3 11.85L4.8 11.35Q4.9 11.25 5.038 11.2Q5.175 11.15 5.3 11.15Q5.425 11.15 5.562 11.2Q5.7 11.25 5.8 11.35L9.525 15.075L18.2 6.4Q18.3 6.3 18.438 6.238Q18.575 6.175 18.7 6.175Q18.825 6.175 18.962 6.225Q19.1 6.275 19.2 6.375L19.7 6.9Q19.8 7 19.85 7.137Q19.9 7.275 19.9 7.4Q19.9 7.525 19.85 7.662Q19.8 7.8 19.7 7.9L10.025 17.575Q9.925 17.675 9.788 17.725Q9.65 17.775 9.525 17.775Z"/>
    </Icon>
  );
});

IconMaterialDoneOutlineRoundedW100Filled.displayName = 'AmauiIconMaterialDoneOutlineRoundedW100Filled';

export default IconMaterialDoneOutlineRoundedW100Filled;
