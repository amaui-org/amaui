import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRunningWithErrorsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunningWithErrorsRounded'
      short_name='RunningWithErrors'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.225 2 16.175 2.912Q18.125 3.825 19.55 5.45L12 13V4Q8.65 4 6.325 6.325Q4 8.65 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20Q13.725 20 15.3 19.288Q16.875 18.575 18 17.25V20Q16.675 20.95 15.15 21.475Q13.625 22 12 22ZM21 18Q20.575 18 20.288 17.712Q20 17.425 20 17V11Q20 10.575 20.288 10.287Q20.575 10 21 10Q21.425 10 21.712 10.287Q22 10.575 22 11V17Q22 17.425 21.712 17.712Q21.425 18 21 18ZM21 22Q20.575 22 20.288 21.712Q20 21.425 20 21Q20 20.575 20.288 20.288Q20.575 20 21 20Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialRunningWithErrorsRounded.displayName = 'AmauiIconMaterialRunningWithErrorsRounded';

export default IconMaterialRunningWithErrorsRounded;
