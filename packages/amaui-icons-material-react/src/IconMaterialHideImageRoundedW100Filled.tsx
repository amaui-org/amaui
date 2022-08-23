import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageRoundedW100Filled'
      short_name='HideImage'

      {...props}
    >
      <path d="M19.7 16.85 7.15 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8ZM20.45 21.45 18.7 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.3L2.55 3.55Q2.45 3.45 2.438 3.312Q2.425 3.175 2.55 3.05Q2.675 2.925 2.8 2.925Q2.925 2.925 3.05 3.05L20.95 20.95Q21.05 21.05 21.062 21.188Q21.075 21.325 20.95 21.45Q20.825 21.575 20.7 21.575Q20.575 21.575 20.45 21.45ZM8.75 16.35H15.35L12.925 13.925L11.2 16.05L9.925 14.575Q9.8 14.425 9.613 14.438Q9.425 14.45 9.3 14.6L8.45 15.7Q8.3 15.9 8.4 16.125Q8.5 16.35 8.75 16.35Z"/>
    </Icon>
  );
});

IconMaterialHideImageRoundedW100Filled.displayName = 'AmauiIconMaterialHideImageRoundedW100Filled';

export default IconMaterialHideImageRoundedW100Filled;
