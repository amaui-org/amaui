import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFemaleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemaleFilled'

      short_name='Female'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14.9q-1.975-.35-3.237-1.888Q6.5 11.475 6.5 9.45q0-2.275 1.613-3.862Q9.725 4 12 4t3.887 1.588Q17.5 7.175 17.5 9.45q0 2.025-1.262 3.562Q14.975 14.55 13 14.9V17h1q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 19 14 19h-1v1q0 .425-.287.712Q12.425 21 12 21t-.712-.288Q11 20.425 11 20v-1h-1q-.425 0-.712-.288Q9 18.425 9 18t.288-.712Q9.575 17 10 17h1Zm1-1.9q1.45 0 2.475-1.025Q15.5 10.95 15.5 9.5q0-1.45-1.025-2.475Q13.45 6 12 6q-1.45 0-2.475 1.025Q8.5 8.05 8.5 9.5q0 1.45 1.025 2.475Q10.55 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialFemaleFilled.displayName = 'AmauiIconMaterialFemaleFilled';

export default IconMaterialFemaleFilled;
