import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial360SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='360SharpW100Filled'
      short_name='360'

      {...props}
    >
      <path d="M8.4 18.35 7.9 17.85 10.15 15.6Q7.325 15.225 5.312 14.238Q3.3 13.25 3.3 12Q3.3 10.525 5.838 9.412Q8.375 8.3 12 8.3Q15.625 8.3 18.163 9.412Q20.7 10.525 20.7 12Q20.7 12.95 19.425 13.85Q18.15 14.75 16 15.25V14.55Q17.925 14.05 18.962 13.312Q20 12.575 20 12Q20 11.125 17.863 10.062Q15.725 9 12 9Q8.275 9 6.138 10.062Q4 11.125 4 12Q4 12.75 5.775 13.65Q7.55 14.55 10.15 14.9L7.9 12.65L8.4 12.15L11.5 15.25Z"/>
    </Icon>
  );
});

IconMaterial360SharpW100Filled.displayName = 'AmauiIconMaterial360SharpW100Filled';

export default IconMaterial360SharpW100Filled;
