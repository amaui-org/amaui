import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFramePersonSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonSharpW100'
      short_name='FramePerson'

      {...props}
    >
      <path d="M6.3 16.45V14.4q0-.175.075-.325.075-.15.225-.25 1.125-.8 2.575-1.288 1.45-.487 2.825-.487 1.375 0 2.825.487 1.45.488 2.575 1.288.125.1.213.25.087.15.087.325v2.05Zm.7-.7h10V14.4q-1.05-.775-2.375-1.212Q13.3 12.75 12 12.75t-2.625.425Q8.05 13.6 7 14.375Zm5-4.8q-1.125 0-1.912-.788Q9.3 9.375 9.3 8.25t.788-1.912Q10.875 5.55 12 5.55t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm0-.7q.825 0 1.413-.588Q14 9.075 14 8.25t-.587-1.412Q12.825 6.25 12 6.25q-.825 0-1.412.588Q10 7.425 10 8.25t.588 1.412q.587.588 1.412.588Zm0 5.5Zm0-7.5ZM2.3 6V2.3H6V3H3v3ZM6 21.7H2.3V18H3v3h3Zm12 0V21h3v-3h.7v3.7ZM21 6V3h-3v-.7h3.7V6Z"/>
    </Icon>
  );
});

IconMaterialFramePersonSharpW100.displayName = 'AmauiIconMaterialFramePersonSharpW100';

export default IconMaterialFramePersonSharpW100;
