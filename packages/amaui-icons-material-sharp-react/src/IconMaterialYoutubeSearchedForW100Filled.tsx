import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYoutubeSearchedForW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeSearchedForW100Filled'

      short_name='YoutubeSearchedFor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.35 19.35-5.7-5.7q-.75.65-1.725 1Q11.95 15 11 15q-.875 0-1.637-.238-.763-.237-1.413-.662l.5-.5q.575.35 1.2.525.625.175 1.35.175 2.025 0 3.413-1.388Q15.8 11.525 15.8 9.5t-1.387-3.413Q13.025 4.7 11 4.7T7.588 6.087Q6.2 7.475 6.2 9.5l1.6-1.65.5.5-2.45 2.45L3.4 8.35l.5-.5L5.5 9.5q0-2.3 1.6-3.9T11 4q2.3 0 3.9 1.6t1.6 3.9q0 1.025-.375 2-.375.975-.975 1.65l5.7 5.7Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedForW100Filled.displayName = 'AmauiIconMaterialYoutubeSearchedForW100Filled';

export default IconMaterialYoutubeSearchedForW100Filled;
