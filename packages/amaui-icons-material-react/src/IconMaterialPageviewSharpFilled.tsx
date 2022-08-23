import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPageviewSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewSharpFilled'
      short_name='Pageview'

      {...props}
    >
      <path d="M16.325 17.725 17.725 16.325 15.3 13.9Q15.65 13.375 15.825 12.775Q16 12.175 16 11.5Q16 9.625 14.688 8.312Q13.375 7 11.5 7Q9.625 7 8.312 8.312Q7 9.625 7 11.5Q7 13.375 8.312 14.688Q9.625 16 11.5 16Q12.15 16 12.762 15.825Q13.375 15.65 13.9 15.3ZM11.5 14Q10.45 14 9.725 13.275Q9 12.55 9 11.5Q9 10.45 9.725 9.725Q10.45 9 11.5 9Q12.55 9 13.275 9.725Q14 10.45 14 11.5Q14 12.55 13.275 13.275Q12.55 14 11.5 14ZM2 20V4H22V20Z"/>
    </Icon>
  );
});

IconMaterialPageviewSharpFilled.displayName = 'AmauiIconMaterialPageviewSharpFilled';

export default IconMaterialPageviewSharpFilled;
