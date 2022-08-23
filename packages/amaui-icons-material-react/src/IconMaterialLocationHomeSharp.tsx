import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationHomeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationHomeSharp'
      short_name='LocationHome'

      {...props}
    >
      <path d="M4 21V9L12 3L20 9V21ZM6 10V18Q7.275 17.05 8.788 16.525Q10.3 16 12 16Q13.7 16 15.213 16.525Q16.725 17.05 18 18V10L12 5.5ZM12 15Q10.75 15 9.875 14.125Q9 13.25 9 12Q9 10.75 9.875 9.875Q10.75 9 12 9Q13.25 9 14.125 9.875Q15 10.75 15 12Q15 13.25 14.125 14.125Q13.25 15 12 15ZM12 13Q12.425 13 12.713 12.712Q13 12.425 13 12Q13 11.575 12.713 11.287Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12Q11 12.425 11.288 12.712Q11.575 13 12 13ZM8.15 19H15.85Q14.975 18.5 14.013 18.25Q13.05 18 12 18Q10.95 18 9.988 18.25Q9.025 18.5 8.15 19Z"/>
    </Icon>
  );
});

IconMaterialLocationHomeSharp.displayName = 'AmauiIconMaterialLocationHomeSharp';

export default IconMaterialLocationHomeSharp;
