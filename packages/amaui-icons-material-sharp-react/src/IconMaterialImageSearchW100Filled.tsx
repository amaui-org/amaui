import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSearchW100Filled'

      short_name='ImageSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3H10V5H5v14h14v-6.2l.7.7v6.2Zm16.9-7.5-3.15-3.15q-.5.375-.937.512-.438.138-1.013.138-1.35 0-2.275-.925Q12.9 7.85 12.9 6.5q0-1.35.925-2.275Q14.75 3.3 16.1 3.3q1.35 0 2.275.925.925.925.925 2.275 0 .575-.175 1.087Q18.95 8.1 18.6 8.6l3.1 3.1ZM16.1 9q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q17.15 4 16.1 4q-1.05 0-1.775.725Q13.6 5.45 13.6 6.5q0 1.05.725 1.775Q15.05 9 16.1 9Zm-8.15 7.35L9.6 14.2l1.6 1.85 2.5-3.1 2.55 3.4Z"/>
    </Icon>
  );
});

IconMaterialImageSearchW100Filled.displayName = 'AmauiIconMaterialImageSearchW100Filled';

export default IconMaterialImageSearchW100Filled;
