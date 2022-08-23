import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomePinSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomePinSharpW100'
      short_name='HomePin'

      {...props}
    >
      <path d="M9.6 12.3V8.45L12 6.85L14.4 8.45V12.3H12.8V10.05H11.2V12.3ZM12 20.525Q15.15 17.825 16.9 14.962Q18.65 12.1 18.65 10.2Q18.65 7.175 16.725 5.262Q14.8 3.35 12 3.35Q9.2 3.35 7.275 5.262Q5.35 7.175 5.35 10.2Q5.35 12.1 7.1 14.962Q8.85 17.825 12 20.525ZM12 21.5Q8.275 18.15 6.463 15.287Q4.65 12.425 4.65 10.2Q4.65 6.75 6.875 4.7Q9.1 2.65 12 2.65Q14.9 2.65 17.125 4.7Q19.35 6.75 19.35 10.2Q19.35 12.425 17.538 15.287Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialHomePinSharpW100.displayName = 'AmauiIconMaterialHomePinSharpW100';

export default IconMaterialHomePinSharpW100;
