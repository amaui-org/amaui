import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChromecast2TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chromecast2TwoTone'
      short_name='Chromecast2'

      {...props}
    >
      <path d="M9 21Q6.075 21 4.037 18.962Q2 16.925 2 14Q2 11.35 3.713 9.4Q5.425 7.45 8 7.075V5.7Q8 4.15 9.075 3.075Q10.15 2 11.7 2Q12.55 2 13.312 2.375Q14.075 2.75 14.6 3.4L19.75 9.9L20.325 9.425L23.1 12.9L20.35 15.075L17.6 11.6L18.175 11.125L13.025 4.625Q12.775 4.325 12.438 4.162Q12.1 4 11.7 4Q10.975 4 10.488 4.487Q10 4.975 10 5.7V7.075Q12.575 7.45 14.288 9.4Q16 11.35 16 14Q16 16.925 13.963 18.962Q11.925 21 9 21ZM9 19Q11.075 19 12.538 17.538Q14 16.075 14 14Q14 11.925 12.538 10.462Q11.075 9 9 9Q6.925 9 5.463 10.462Q4 11.925 4 14Q4 16.075 5.463 17.538Q6.925 19 9 19Z"/>
    </Icon>
  );
});

IconMaterialChromecast2TwoTone.displayName = 'AmauiIconMaterialChromecast2TwoTone';

export default IconMaterialChromecast2TwoTone;
