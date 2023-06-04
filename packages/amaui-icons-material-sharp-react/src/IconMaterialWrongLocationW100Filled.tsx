import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrongLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrongLocationW100Filled'

      short_name='WrongLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.75 7.75-.5-.5 2.1-2.1-2.1-2.1.5-.5 2.1 2.1 2.1-2.1.5.5-2.1 2.1 2.1 2.1-.5.5-2.1-2.1ZM12 11.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 8.65 12 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm0 10.15q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.575 0 1.15.087.575.088 1.1.263v5.75h4.975q.05.35.087.725.038.375.038.725 0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialWrongLocationW100Filled.displayName = 'AmauiIconMaterialWrongLocationW100Filled';

export default IconMaterialWrongLocationW100Filled;
