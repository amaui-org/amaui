import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpokeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpokeSharpFilled'
      short_name='Spoke'

      {...props}
    >
      <path d="M12 11Q10.35 11 9.175 9.825Q8 8.65 8 7Q8 5.35 9.175 4.175Q10.35 3 12 3Q13.65 3 14.825 4.175Q16 5.35 16 7Q16 8.65 14.825 9.825Q13.65 11 12 11ZM7 21Q5.35 21 4.175 19.825Q3 18.65 3 17Q3 15.35 4.175 14.175Q5.35 13 7 13Q8.65 13 9.825 14.175Q11 15.35 11 17Q11 18.65 9.825 19.825Q8.65 21 7 21ZM17 21Q15.35 21 14.175 19.825Q13 18.65 13 17Q13 15.35 14.175 14.175Q15.35 13 17 13Q18.65 13 19.825 14.175Q21 15.35 21 17Q21 18.65 19.825 19.825Q18.65 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialSpokeSharpFilled.displayName = 'AmauiIconMaterialSpokeSharpFilled';

export default IconMaterialSpokeSharpFilled;
