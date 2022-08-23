import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialYoutubeSearchedForSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeSearchedForSharpFilled'
      short_name='YoutubeSearchedFor'

      {...props}
    >
      <path d="M20.55 20.45 14.8 14.7Q14 15.35 13.025 15.675Q12.05 16 11 16Q9.95 16 9 15.688Q8.05 15.375 7.25 14.8L8.7 13.35Q9.2 13.65 9.775 13.825Q10.35 14 11 14Q12.875 14 14.188 12.688Q15.5 11.375 15.5 9.5Q15.5 7.625 14.188 6.312Q12.875 5 11 5Q9.275 5 8.012 6.162Q6.75 7.325 6.55 9.05L7.8 7.8L9.2 9.2L5.5 12.9L1.8 9.2L3.2 7.8L4.55 9.1Q4.7 6.525 6.55 4.762Q8.4 3 11 3Q13.725 3 15.613 4.887Q17.5 6.775 17.5 9.5Q17.5 10.55 17.175 11.55Q16.85 12.55 16.2 13.3L21.95 19.05Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedForSharpFilled.displayName = 'AmauiIconMaterialYoutubeSearchedForSharpFilled';

export default IconMaterialYoutubeSearchedForSharpFilled;
