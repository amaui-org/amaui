import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWatchRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchRoundedFilled'
      short_name='Watch'

      {...props}
    >
      <path d="M10.5 22Q9.825 22 9.3 21.613Q8.775 21.225 8.575 20.575L7.65 17.45Q6.45 16.5 5.725 15.075Q5 13.65 5 12Q5 10.35 5.725 8.925Q6.45 7.5 7.65 6.55L8.575 3.425Q8.775 2.775 9.3 2.387Q9.825 2 10.5 2H13.5Q14.175 2 14.7 2.387Q15.225 2.775 15.425 3.425L16.35 6.55Q17.55 7.5 18.275 8.925Q19 10.35 19 12Q19 13.65 18.275 15.075Q17.55 16.5 16.35 17.45L15.425 20.575Q15.225 21.225 14.7 21.613Q14.175 22 13.5 22ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialWatchRoundedFilled.displayName = 'AmauiIconMaterialWatchRoundedFilled';

export default IconMaterialWatchRoundedFilled;
