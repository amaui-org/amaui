import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageRoundedW100Filled'
      short_name='Image'

      {...props}
    >
      <path d="M8.75 16.35H15.45Q15.725 16.35 15.825 16.125Q15.925 15.9 15.775 15.7L14 13.35Q13.875 13.2 13.688 13.2Q13.5 13.2 13.375 13.35L11.2 16.05L9.925 14.575Q9.8 14.425 9.613 14.438Q9.425 14.45 9.3 14.6L8.45 15.7Q8.3 15.9 8.4 16.125Q8.5 16.35 8.75 16.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialImageRoundedW100Filled.displayName = 'AmauiIconMaterialImageRoundedW100Filled';

export default IconMaterialImageRoundedW100Filled;
