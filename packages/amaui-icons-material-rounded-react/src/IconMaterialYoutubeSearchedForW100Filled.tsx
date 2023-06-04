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
      <path d="M8.65 13.725q.55.25 1.125.412.575.163 1.225.163 2.025 0 3.413-1.388Q15.8 11.525 15.8 9.5t-1.387-3.413Q13.025 4.7 11 4.7T7.588 6.087Q6.2 7.475 6.2 9.5l1.375-1.425q.1-.1.237-.088.138.013.238.113.125.125.125.25t-.125.25l-1.675 1.675q-.225.225-.525.225-.3 0-.525-.225l-1.7-1.7q-.1-.1-.087-.238.012-.137.112-.237.125-.125.25-.113.125.013.25.113L5.5 9.5q0-2.3 1.6-3.9T11 4q2.3 0 3.9 1.6t1.6 3.9q0 1.025-.375 2-.375.975-.975 1.65l6.025 6.025q.1.1.088.238-.013.137-.113.237-.125.125-.25.125t-.25-.125l-6-6q-.75.65-1.725 1Q11.95 15 11 15q-.725 0-1.4-.163-.675-.162-1.25-.487-.125-.075-.162-.225-.038-.15.037-.275.05-.125.175-.15.125-.025.25.025Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedForW100Filled.displayName = 'AmauiIconMaterialYoutubeSearchedForW100Filled';

export default IconMaterialYoutubeSearchedForW100Filled;
