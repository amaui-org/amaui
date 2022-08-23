import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWatchSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchSharp'
      short_name='Watch'

      {...props}
    >
      <path d="M9 22 7.65 17.45Q6.45 16.5 5.725 15.075Q5 13.65 5 12Q5 10.35 5.725 8.925Q6.45 7.5 7.65 6.55L9 2H15L16.35 6.55Q17.55 7.5 18.275 8.925Q19 10.35 19 12Q19 13.65 18.275 15.075Q17.55 16.5 16.35 17.45L15 22ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17ZM10.1 5.25Q11.075 4.975 12 4.975Q12.925 4.975 13.9 5.25L13.5 4H10.5ZM10.5 20H13.5L13.9 18.75Q12.925 19.025 12 19.025Q11.075 19.025 10.1 18.75ZM10.1 4H10.5H13.5H13.9Q12.925 4 12 4Q11.075 4 10.1 4ZM10.5 20H10.1Q11.075 20 12 20Q12.925 20 13.9 20H13.5Z"/>
    </Icon>
  );
});

IconMaterialWatchSharp.displayName = 'AmauiIconMaterialWatchSharp';

export default IconMaterialWatchSharp;
