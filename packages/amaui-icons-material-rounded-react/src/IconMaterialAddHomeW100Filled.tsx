import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeW100Filled'

      short_name='AddHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 19.7q-1.55 0-2.625-1.075T14.3 16q0-1.55 1.075-2.625T18 12.3q1.55 0 2.625 1.075T21.7 16q0 1.55-1.075 2.625T18 19.7Zm-.35-3.35v2.15q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.15h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.15V13.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15H15.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-6.125 1.35H6.8q-.625 0-1.062-.438Q5.3 16.825 5.3 16.2V8.4q0-.35.163-.675.162-.325.437-.525l5.2-3.95q.4-.3.9-.3t.9.3l5.2 3.95q.275.2.438.525.162.325.162.675v.925q-.175-.025-.35-.025H18q-2.8 0-4.75 1.95Q11.3 13.2 11.3 16q0 .425.05.85t.175.85Z"/>
    </Icon>
  );
});

IconMaterialAddHomeW100Filled.displayName = 'AmauiIconMaterialAddHomeW100Filled';

export default IconMaterialAddHomeW100Filled;
