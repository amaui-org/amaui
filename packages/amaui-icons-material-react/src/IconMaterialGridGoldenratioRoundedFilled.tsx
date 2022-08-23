import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridGoldenratioRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridGoldenratioRoundedFilled'
      short_name='GridGoldenratio'

      {...props}
    >
      <path d="M10 22Q9.575 22 9.288 21.712Q9 21.425 9 21V15H3Q2.575 15 2.288 14.712Q2 14.425 2 14Q2 13.575 2.288 13.287Q2.575 13 3 13H9V11H3Q2.575 11 2.288 10.712Q2 10.425 2 10Q2 9.575 2.288 9.287Q2.575 9 3 9H9V3Q9 2.575 9.288 2.287Q9.575 2 10 2Q10.425 2 10.713 2.287Q11 2.575 11 3V9H13V3Q13 2.575 13.288 2.287Q13.575 2 14 2Q14.425 2 14.713 2.287Q15 2.575 15 3V9H21Q21.425 9 21.712 9.287Q22 9.575 22 10Q22 10.425 21.712 10.712Q21.425 11 21 11H15V13H21Q21.425 13 21.712 13.287Q22 13.575 22 14Q22 14.425 21.712 14.712Q21.425 15 21 15H15V21Q15 21.425 14.713 21.712Q14.425 22 14 22Q13.575 22 13.288 21.712Q13 21.425 13 21V15H11V21Q11 21.425 10.713 21.712Q10.425 22 10 22ZM11 13H13V11H11Z"/>
    </Icon>
  );
});

IconMaterialGridGoldenratioRoundedFilled.displayName = 'AmauiIconMaterialGridGoldenratioRoundedFilled';

export default IconMaterialGridGoldenratioRoundedFilled;
