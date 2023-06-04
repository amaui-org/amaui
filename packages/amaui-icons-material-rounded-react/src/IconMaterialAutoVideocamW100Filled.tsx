import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoVideocamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoVideocamW100Filled'

      short_name='AutoVideocam'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M217 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84-84q7-7 16.5-3.5T803 482v188q0 10-9.5 13.5T777 680l-84-84v188q0 26-17 43t-43 17H217Zm174-234 20 45q4 9 14 9t14-9l20-45 45-20q9-4 9-14t-9-14l-45-20-20-45q-4-9-14-9t-14 9l-20 45-45 20q-9 4-9 14t9 14l45 20Z"/>
    </Icon>
  );
});

IconMaterialAutoVideocamW100Filled.displayName = 'AmauiIconMaterialAutoVideocamW100Filled';

export default IconMaterialAutoVideocamW100Filled;
