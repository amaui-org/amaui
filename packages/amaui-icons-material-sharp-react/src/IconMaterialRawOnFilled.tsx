import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRawOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RawOnFilled'

      short_name='RawOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.75 15 1.5-6h2.5l1.5 6h-1.5l-.35-1.5h-1.75l-.4 1.5ZM11 12h1l-.25-1h-.5Zm4.5 3L14 9h1.5l.75 3L17 9h1.5l.75 3L20 9h1.5L20 15h-1.5l-.75-3.05L17 15ZM3 15V9h3.5q.6 0 1.05.45Q8 9.9 8 10.5v1q0 .45-.237.812-.238.363-.663.588L8 15H6.5l-.9-2H4.5v2Zm1.5-3.5h2v-1h-2Z"/>
    </Icon>
  );
});

IconMaterialRawOnFilled.displayName = 'AmauiIconMaterialRawOnFilled';

export default IconMaterialRawOnFilled;
