import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGuardianW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GuardianW100'

      short_name='Guardian'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-92q-165 0-276.5-58.21Q92-208.41 92-293q0-57 54-102t156-72v29q-84 23-133 61.5T120-293q0 70 107 121.5T480-120q146 0 253-51.5T840-293q0-45-49-83.5T658-438v-29q101 26 155.5 71.5T868-293q0 84.59-111.5 142.79Q645-92 480-92Zm-78-164v-431H212v-28h536v28H558v431h-28v-197H430v197h-28Zm78.03-509Q459-765 444-779.98T429-816q0-21.86 14.97-37.43 14.98-15.57 36-15.57Q501-869 516-853.43T531-816q0 21.04-14.97 36.02-14.98 14.98-36 14.98Z"/>
    </Icon>
  );
});

IconMaterialGuardianW100.displayName = 'AmauiIconMaterialGuardianW100';

export default IconMaterialGuardianW100;
