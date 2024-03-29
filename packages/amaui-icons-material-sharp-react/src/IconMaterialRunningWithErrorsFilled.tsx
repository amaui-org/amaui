import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRunningWithErrorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunningWithErrorsFilled'

      short_name='RunningWithErrors'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2q2.225 0 4.175.912 1.95.913 3.375 2.538L12 13V4Q8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20q1.725 0 3.3-.712 1.575-.713 2.7-2.038V20q-1.325.95-2.85 1.475Q13.625 22 12 22Zm8-4v-8h2v8Zm1 4q-.425 0-.712-.288Q20 21.425 20 21t.288-.712Q20.575 20 21 20t.712.288Q22 20.575 22 21t-.288.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialRunningWithErrorsFilled.displayName = 'AmauiIconMaterialRunningWithErrorsFilled';

export default IconMaterialRunningWithErrorsFilled;
