import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWatchSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchSharpW100Filled'
      short_name='Watch'

      {...props}
    >
      <path d="M9.95 19.65 9.2 16.95Q7.925 16.275 7.113 14.95Q6.3 13.625 6.3 12Q6.3 10.375 7.113 9.05Q7.925 7.725 9.2 7.05L9.95 4.35H14.05L14.8 7.05Q16.075 7.725 16.887 9.05Q17.7 10.375 17.7 12Q17.7 13.625 16.887 14.95Q16.075 16.275 14.8 16.95L14.05 19.65ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialWatchSharpW100Filled.displayName = 'AmauiIconMaterialWatchSharpW100Filled';

export default IconMaterialWatchSharpW100Filled;
