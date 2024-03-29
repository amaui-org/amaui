import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadsetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOff'

      short_name='HeadsetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.1 18.15-2-2V14h-2v.15l-2-2V12h4v-1q0-2.95-2.05-4.975Q15 4 12.1 4q-1.1 0-2.088.312-.987.313-1.812.888L6.75 3.8q1.125-.875 2.488-1.338Q10.6 2 12.1 2q1.85 0 3.488.7 1.637.7 2.862 1.925t1.938 2.862Q21.1 9.125 21.1 11Zm-.6 5.25-.4-.4h-8v-2h6l-1-1h-2v-2L5.575 8.475q-.225.6-.35 1.225-.125.625-.125 1.3v1h4v8h-6v-9q0-1.125.238-2.113.237-.987.737-1.937L.7 3.575l1.425-1.4 19.775 19.8ZM5.1 18h2v-4h-2Zm0 0h2Zm14-1.85Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOff.displayName = 'AmauiIconMaterialHeadsetOff';

export default IconMaterialHeadsetOff;
