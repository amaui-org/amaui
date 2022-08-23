import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddModeratorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorSharpW100Filled'
      short_name='AddModerator'

      {...props}
    >
      <path d="M17 20.7Q15.45 20.7 14.375 19.625Q13.3 18.55 13.3 17Q13.3 15.45 14.375 14.375Q15.45 13.3 17 13.3Q18.55 13.3 19.625 14.375Q20.7 15.45 20.7 17Q20.7 18.55 19.625 19.625Q18.55 20.7 17 20.7ZM16.65 19.85H17.35V17.35H19.85V16.65H17.35V14.15H16.65V16.65H14.15V17.35H16.65ZM12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.55Q18.35 11.425 17.888 11.362Q17.425 11.3 17 11.3Q14.625 11.3 12.963 12.962Q11.3 14.625 11.3 17Q11.3 17.875 11.575 18.775Q11.85 19.675 12.475 20.475Q12.35 20.525 12.238 20.562Q12.125 20.6 12 20.65Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorSharpW100Filled.displayName = 'AmauiIconMaterialAddModeratorSharpW100Filled';

export default IconMaterialAddModeratorSharpW100Filled;
