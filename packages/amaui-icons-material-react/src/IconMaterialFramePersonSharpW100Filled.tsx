import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFramePersonSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonSharpW100Filled'
      short_name='FramePerson'

      {...props}
    >
      <path d="M6.3 16.45V14.4q0-.175.075-.325.075-.15.225-.25 1.125-.8 2.575-1.288 1.45-.487 2.825-.487 1.375 0 2.825.487 1.45.488 2.575 1.288.125.1.213.25.087.15.087.325v2.05Zm5.7-5.5q-1.125 0-1.912-.788Q9.3 9.375 9.3 8.25t.788-1.912Q10.875 5.55 12 5.55t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788ZM2.3 6V2.3H6V3H3v3ZM6 21.7H2.3V18H3v3h3Zm12 0V21h3v-3h.7v3.7ZM21 6V3h-3v-.7h3.7V6Z"/>
    </Icon>
  );
});

IconMaterialFramePersonSharpW100Filled.displayName = 'AmauiIconMaterialFramePersonSharpW100Filled';

export default IconMaterialFramePersonSharpW100Filled;
