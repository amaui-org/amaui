import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysFanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysFanFilled'

      short_name='ToysFan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q0-2.275 1.613-3.887Q15.225 6.5 17.5 6.5t3.888 1.613Q23 9.725 23 12Zm-5.5 5.5q-2.275 0-3.887-1.613Q1 14.275 1 12h11q0 2.275-1.613 3.887Q8.775 17.5 6.5 17.5ZM12 12q-2.275 0-3.887-1.613Q6.5 8.775 6.5 6.5t1.613-3.888Q9.725 1 12 1Zm0 11V12q2.275 0 3.887 1.613Q17.5 15.225 17.5 17.5t-1.613 3.887Q14.275 23 12 23Z"/>
    </Icon>
  );
});

IconMaterialToysFanFilled.displayName = 'AmauiIconMaterialToysFanFilled';

export default IconMaterialToysFanFilled;
