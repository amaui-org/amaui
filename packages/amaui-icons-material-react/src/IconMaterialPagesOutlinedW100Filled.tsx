import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesOutlinedW100Filled'
      short_name='Pages'

      {...props}
    >
      <path d="M12 15.4 13.075 13.075 15.4 12 13.075 10.925 12 8.6 10.925 10.925 8.6 12 10.925 13.075ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialPagesOutlinedW100Filled;
