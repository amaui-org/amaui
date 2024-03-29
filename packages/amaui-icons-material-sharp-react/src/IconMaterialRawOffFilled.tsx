import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRawOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOffFilled'

      short_name='RawOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 1.4 4.2l1.4-1.4 18.4 18.4ZM18.5 15l-.75-3.05-.6 2.35-2.45-2.4L14 9h1.5l.75 3L17 9h1.5l.75 3L20 9h1.5L20 15Zm-9.75 0 1.05-4.2L11 12l1.5 1.5h-1.85l-.4 1.5ZM3 15V9h3.5q.6 0 1.05.45Q8 9.9 8 10.5v1q0 .45-.237.812-.238.363-.663.588L8 15H6.5l-.9-2H4.5v2Zm1.5-3.5h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialRawOffFilled.displayName = 'AmauiIconMaterialRawOffFilled';

export default IconMaterialRawOffFilled;
