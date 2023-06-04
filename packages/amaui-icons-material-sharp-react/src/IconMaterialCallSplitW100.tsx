import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallSplitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitW100'

      short_name='CallSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19.35V12.1l-6.3-6.25v3.5h-.7v-4.7h4.7v.7h-3.5l6.5 6.45v7.55Zm2.3-8.8-.5-.5 4.7-4.7h-3.5v-.7h4.7v4.7h-.7v-3.5Z"/>
    </Icon>
  );
});

IconMaterialCallSplitW100.displayName = 'AmauiIconMaterialCallSplitW100';

export default IconMaterialCallSplitW100;
