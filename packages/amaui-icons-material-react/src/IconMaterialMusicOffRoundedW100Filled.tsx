import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOffRoundedW100Filled'
      short_name='MusicOff'

      {...props}
    >
      <path d="M18.95 21.2 13.35 15.6V16.75Q13.35 17.875 12.562 18.663Q11.775 19.45 10.65 19.45Q9.525 19.45 8.738 18.663Q7.95 17.875 7.95 16.75Q7.95 15.1 9.525 14.275Q11.1 13.45 12.65 14.9L3.55 5.8Q3.45 5.7 3.438 5.562Q3.425 5.425 3.55 5.3Q3.675 5.175 3.8 5.175Q3.925 5.175 4.05 5.3L19.45 20.7Q19.55 20.8 19.562 20.938Q19.575 21.075 19.45 21.2Q19.325 21.325 19.2 21.325Q19.075 21.325 18.95 21.2ZM13.35 11.775 12.65 11.075V6.05Q12.65 5.425 13.088 4.987Q13.525 4.55 14.15 4.55H16.15Q16.575 4.55 16.887 4.862Q17.2 5.175 17.2 5.6Q17.2 6.025 16.887 6.337Q16.575 6.65 16.15 6.65H13.35Z"/>
    </Icon>
  );
});

IconMaterialMusicOffRoundedW100Filled.displayName = 'AmauiIconMaterialMusicOffRoundedW100Filled';

export default IconMaterialMusicOffRoundedW100Filled;
