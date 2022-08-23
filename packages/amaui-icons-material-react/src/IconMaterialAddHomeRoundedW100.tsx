import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddHomeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeRoundedW100'
      short_name='AddHome'

      {...props}
    >
      <path d="M17.65 16.35v2.15q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.15h2.15q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.15V13.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15H15.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM18 19.7q-1.55 0-2.625-1.075T14.3 16q0-1.55 1.075-2.625T18 12.3q1.55 0 2.625 1.075T21.7 16q0 1.55-1.075 2.625T18 19.7Zm-11.2-2q-.625 0-1.062-.438Q5.3 16.825 5.3 16.2V8.4q0-.35.163-.675.162-.325.437-.525l5.2-3.95q.4-.3.9-.3t.9.3l5.2 3.95q.275.2.438.525.162.325.162.675v.925q-.175-.025-.35-.025H18V8l-5.525-4.175q-.2-.175-.475-.175-.275 0-.475.175L6 8v8.2q0 .35.225.575Q6.45 17 6.8 17h4.575q.025.175.063.35.037.175.087.35Zm5.2-7.4Z"/>
    </Icon>
  );
});

IconMaterialAddHomeRoundedW100.displayName = 'AmauiIconMaterialAddHomeRoundedW100';

export default IconMaterialAddHomeRoundedW100;
