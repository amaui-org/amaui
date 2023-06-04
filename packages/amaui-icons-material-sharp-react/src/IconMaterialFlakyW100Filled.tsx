import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlakyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlakyW100Filled'

      short_name='Flaky'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7ZM7.35 10.65l1.4-1.425 1.4 1.425.5-.5-1.425-1.4 1.425-1.4-.5-.5-1.4 1.425-1.4-1.425-.5.5 1.425 1.4-1.425 1.4ZM12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-1.65-.625-3.1-.625-1.45-1.725-2.55l-11.3 11.3q1.1 1.1 2.55 1.725Q10.35 20 12 20Zm2.05-2.975L12.2 15.2l.5-.5 1.325 1.325 2.5-2.475.5.5Z"/>
    </Icon>
  );
});

IconMaterialFlakyW100Filled.displayName = 'AmauiIconMaterialFlakyW100Filled';

export default IconMaterialFlakyW100Filled;
