import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWatchRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchRoundedW100Filled'
      short_name='Watch'

      {...props}
    >
      <path d="M11.1 19.65Q10.6 19.65 10.188 19.35Q9.775 19.05 9.65 18.55L9.2 16.95Q7.925 16.275 7.113 14.95Q6.3 13.625 6.3 12Q6.3 10.375 7.113 9.05Q7.925 7.725 9.2 7.05L9.65 5.45Q9.775 4.95 10.188 4.65Q10.6 4.35 11.1 4.35H12.9Q13.4 4.35 13.812 4.65Q14.225 4.95 14.35 5.45L14.8 7.05Q16.075 7.725 16.887 9.05Q17.7 10.375 17.7 12Q17.7 13.625 16.887 14.95Q16.075 16.275 14.8 16.95L14.35 18.55Q14.225 19.05 13.812 19.35Q13.4 19.65 12.9 19.65ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialWatchRoundedW100Filled.displayName = 'AmauiIconMaterialWatchRoundedW100Filled';

export default IconMaterialWatchRoundedW100Filled;
