import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBeachAccessSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessSharp'
      short_name='BeachAccess'

      {...props}
    >
      <path d="M19.6 21 13.25 14.65 14.65 13.25 21 19.6ZM5.95 20.3Q4.45 18.8 3.725 16.925Q3 15.05 3 13.1Q3 11.15 3.725 9.3Q4.45 7.45 5.95 5.95Q7.45 4.45 9.312 3.712Q11.175 2.975 13.125 2.975Q15.075 2.975 16.938 3.712Q18.8 4.45 20.3 5.95ZM6.15 17.25 7.5 15.9Q7.1 15.375 6.738 14.825Q6.375 14.275 6.075 13.725Q5.775 13.175 5.55 12.625Q5.325 12.075 5.15 11.55Q4.875 13.025 5.113 14.5Q5.35 15.975 6.15 17.25ZM8.95 14.5 14.5 8.9Q13.425 8.075 12.338 7.562Q11.25 7.05 10.3 6.863Q9.35 6.675 8.588 6.8Q7.825 6.925 7.4 7.35Q6.975 7.8 6.85 8.562Q6.725 9.325 6.913 10.287Q7.1 11.25 7.613 12.325Q8.125 13.4 8.95 14.5ZM15.9 7.5 17.3 6.15Q15.975 5.35 14.5 5.1Q13.025 4.85 11.55 5.15Q12.1 5.325 12.65 5.55Q13.2 5.775 13.75 6.062Q14.3 6.35 14.838 6.712Q15.375 7.075 15.9 7.5Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessSharp.displayName = 'AmauiIconMaterialBeachAccessSharp';

export default IconMaterialBeachAccessSharp;
