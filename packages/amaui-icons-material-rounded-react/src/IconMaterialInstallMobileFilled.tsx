import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallMobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileFilled'

      short_name='InstallMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h7v5H7v12h10v-2h2v5q0 .825-.587 1.413Q17.825 23 17 23Zm11-9.425q-.2 0-.375-.063-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.288.425-.012.7.288l1.9 1.9V4q0-.425.288-.713Q17.575 3 18 3t.712.287Q19 3.575 19 4v6.2l1.9-1.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-3.6 3.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileFilled.displayName = 'AmauiIconMaterialInstallMobileFilled';

export default IconMaterialInstallMobileFilled;
