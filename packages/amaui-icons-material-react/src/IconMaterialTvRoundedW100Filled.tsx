import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvRoundedW100Filled'
      short_name='Tv'

      {...props}
    >
      <path d="M10.05 19.7Q9.725 19.7 9.513 19.487Q9.3 19.275 9.3 18.95V17.7H4.8Q4.175 17.7 3.737 17.262Q3.3 16.825 3.3 16.2V5.8Q3.3 5.175 3.737 4.737Q4.175 4.3 4.8 4.3H19.2Q19.825 4.3 20.263 4.737Q20.7 5.175 20.7 5.8V16.2Q20.7 16.825 20.263 17.262Q19.825 17.7 19.2 17.7H14.7V18.95Q14.7 19.275 14.488 19.487Q14.275 19.7 13.95 19.7Z"/>
    </Icon>
  );
});

IconMaterialTvRoundedW100Filled.displayName = 'AmauiIconMaterialTvRoundedW100Filled';

export default IconMaterialTvRoundedW100Filled;
