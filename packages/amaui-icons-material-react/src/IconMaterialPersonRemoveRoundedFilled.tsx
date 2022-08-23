import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonRemoveRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveRoundedFilled'
      short_name='PersonRemove'

      {...props}
    >
      <path d="M17 11Q16.575 11 16.288 10.712Q16 10.425 16 10Q16 9.575 16.288 9.287Q16.575 9 17 9H21Q21.425 9 21.712 9.287Q22 9.575 22 10Q22 10.425 21.712 10.712Q21.425 11 21 11ZM9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 6.35 6.175 5.175Q7.35 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 9.65 11.825 10.825Q10.65 12 9 12ZM2 20Q1.575 20 1.288 19.712Q1 19.425 1 19V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q10.65 13 12.25 13.387Q13.85 13.775 15.4 14.55Q16.125 14.925 16.562 15.637Q17 16.35 17 17.2V19Q17 19.425 16.712 19.712Q16.425 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveRoundedFilled.displayName = 'AmauiIconMaterialPersonRemoveRoundedFilled';

export default IconMaterialPersonRemoveRoundedFilled;
