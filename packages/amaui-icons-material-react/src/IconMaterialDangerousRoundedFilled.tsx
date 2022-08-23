import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDangerousRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousRoundedFilled'
      short_name='Dangerous'

      {...props}
    >
      <path d="M9.075 21Q8.675 21 8.312 20.85Q7.95 20.7 7.675 20.425L3.575 16.325Q3.3 16.05 3.15 15.688Q3 15.325 3 14.925V9.075Q3 8.675 3.15 8.312Q3.3 7.95 3.575 7.675L7.675 3.575Q7.95 3.3 8.312 3.15Q8.675 3 9.075 3H14.925Q15.325 3 15.688 3.15Q16.05 3.3 16.325 3.575L20.425 7.675Q20.7 7.95 20.85 8.312Q21 8.675 21 9.075V14.925Q21 15.325 20.85 15.688Q20.7 16.05 20.425 16.325L16.325 20.425Q16.05 20.7 15.688 20.85Q15.325 21 14.925 21ZM12 13.4 14.175 15.575Q14.45 15.85 14.85 15.85Q15.25 15.85 15.55 15.55Q15.825 15.275 15.825 14.85Q15.825 14.425 15.55 14.15L13.4 12L15.575 9.825Q15.85 9.55 15.85 9.15Q15.85 8.75 15.55 8.45Q15.275 8.175 14.85 8.175Q14.425 8.175 14.15 8.45L12 10.6L9.825 8.425Q9.55 8.15 9.15 8.15Q8.75 8.15 8.45 8.45Q8.175 8.725 8.175 9.15Q8.175 9.575 8.45 9.85L10.6 12L8.425 14.175Q8.15 14.45 8.15 14.85Q8.15 15.25 8.45 15.55Q8.725 15.825 9.15 15.825Q9.575 15.825 9.85 15.55Z"/>
    </Icon>
  );
});

IconMaterialDangerousRoundedFilled.displayName = 'AmauiIconMaterialDangerousRoundedFilled';

export default IconMaterialDangerousRoundedFilled;
