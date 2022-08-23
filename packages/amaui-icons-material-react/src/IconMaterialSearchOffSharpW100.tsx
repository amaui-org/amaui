import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSearchOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchOffSharpW100'
      short_name='SearchOff'

      {...props}
    >
      <path d="M7 20.2Q5.45 20.2 4.375 19.125Q3.3 18.05 3.3 16.5Q3.3 14.95 4.375 13.875Q5.45 12.8 7 12.8Q8.55 12.8 9.625 13.875Q10.7 14.95 10.7 16.5Q10.7 18.05 9.625 19.125Q8.55 20.2 7 20.2ZM5.25 18.75 7 17 8.75 18.75 9.25 18.25 7.5 16.5 9.25 14.75 8.75 14.25 7 16 5.25 14.25 4.75 14.75 6.5 16.5 4.75 18.25ZM20.4 19.9 14.15 13.65Q13.8 13.95 13.312 14.225Q12.825 14.5 12.4 14.65Q12.35 14.475 12.288 14.312Q12.225 14.15 12.15 14.025Q13.5 13.525 14.4 12.337Q15.3 11.15 15.3 9.5Q15.3 7.5 13.9 6.1Q12.5 4.7 10.5 4.7Q8.5 4.7 7.1 6.1Q5.7 7.5 5.7 9.5Q5.7 9.85 5.763 10.212Q5.825 10.575 5.9 10.9Q5.75 10.9 5.562 10.962Q5.375 11.025 5.225 11.075Q5.125 10.75 5.062 10.337Q5 9.925 5 9.5Q5 7.2 6.6 5.6Q8.2 4 10.5 4Q12.8 4 14.4 5.6Q16 7.2 16 9.5Q16 10.575 15.613 11.525Q15.225 12.475 14.65 13.15L20.9 19.4Z"/>
    </Icon>
  );
});

IconMaterialSearchOffSharpW100.displayName = 'AmauiIconMaterialSearchOffSharpW100';

export default IconMaterialSearchOffSharpW100;
