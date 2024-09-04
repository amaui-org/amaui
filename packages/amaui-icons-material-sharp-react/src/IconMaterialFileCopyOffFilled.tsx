import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyOffFilled'

      short_name='FileCopyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-234 240-834v-86h360l240 240v446ZM820-28 648-200H240v-408L28-820l56-56L876-84l-56 56ZM560-640h220L560-860l220 220-220-220v220ZM80-40v-600h80v520h480v80H80Z"/>
    </Icon>
  );
});

IconMaterialFileCopyOffFilled.displayName = 'AmauiIconMaterialFileCopyOffFilled';

export default IconMaterialFileCopyOffFilled;
