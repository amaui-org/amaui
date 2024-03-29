import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolFilled'

      short_name='PanTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.7 24q-.875 0-1.575-.312-.7-.313-1.275-.888l-6.775-6.9q-.45-.475-.437-1.088.012-.612.462-1.037.35-.325.85-.4.5-.075.925.175L8 15.9V4.5q0-.6.45-1.05Q8.9 3 9.5 3q.6 0 1.05.45.45.45.45 1.05v6q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35v-9q0-.6.45-1.05Q12.9 0 13.5 0q.6 0 1.05.45Q15 .9 15 1.5v9q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35v-8q0-.6.45-1.05Q16.9 1 17.5 1q.6 0 1.05.45.45.45.45 1.05v8q0 .2.15.35.15.15.35.15.2 0 .35-.15.15-.15.15-.35v-5q0-.6.45-1.05Q20.9 4 21.5 4q.6 0 1.05.45.45.45.45 1.05V20q0 1.65-1.175 2.825Q20.65 24 19 24Z"/>
    </Icon>
  );
});

IconMaterialPanToolFilled.displayName = 'AmauiIconMaterialPanToolFilled';

export default IconMaterialPanToolFilled;
