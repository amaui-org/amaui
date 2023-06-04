import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownloadForOfflineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadForOfflineW100Filled'

      short_name='DownloadForOffline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 11.75 9.625 9.725q-.1-.1-.238-.088-.137.013-.237.113-.125.125-.125.25t.125.25l2.325 2.325q.225.225.525.225.3 0 .525-.225l2.35-2.35q.1-.1.088-.237-.013-.138-.113-.238-.125-.125-.25-.125t-.25.125l-2 2V6.975q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25ZM8 16.35h8.025q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1H7.975q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1Zm4 4.35q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialDownloadForOfflineW100Filled.displayName = 'AmauiIconMaterialDownloadForOfflineW100Filled';

export default IconMaterialDownloadForOfflineW100Filled;
