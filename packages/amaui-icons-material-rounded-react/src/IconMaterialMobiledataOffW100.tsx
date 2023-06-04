import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobiledataOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobiledataOffW100'

      short_name='MobiledataOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.35 12.5-.7-.7V6.55l-2.025 2.025q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2-2Zm4.05 7.9L9.35 10.35v8.1l2.025-2.025q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175l-2.35-2.35q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2 2v-8.8L3.525 4.525q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l15.875 15.875q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialMobiledataOffW100.displayName = 'AmauiIconMaterialMobiledataOffW100';

export default IconMaterialMobiledataOffW100;
