import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPostAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddW100Filled'

      short_name='PostAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 10.35v-.7h6.7v.7Zm0 3v-.7h6.7v.7Zm0 3v-.7h6.7v.7Zm9.65-8.65v-2h-2V5h2V3h.7v2h2v.7h-2v2Zm-14 12V4.3h10.9V5H4.35v14h14V8.8h.7v10.9Z"/>
    </Icon>
  );
});

IconMaterialPostAddW100Filled.displayName = 'AmauiIconMaterialPostAddW100Filled';

export default IconMaterialPostAddW100Filled;
