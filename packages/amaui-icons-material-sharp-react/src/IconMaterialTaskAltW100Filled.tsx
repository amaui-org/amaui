import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaskAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskAltW100Filled'

      short_name='TaskAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3q1.5 0 2.85.475T17.3 5.1l-.5.525q-1-.775-2.225-1.2Q13.35 4 12 4 8.675 4 6.338 6.337 4 8.675 4 12t2.338 5.663Q8.675 20 12 20q3.325 0 5.663-2.337Q20 15.325 20 12q0-.65-.1-1.275-.1-.625-.3-1.2l.55-.575q.275.725.412 1.488.138.762.138 1.562 0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-1.45-5L7.2 12.35l.5-.5 2.85 2.85 9.65-9.65.5.5Z"/>
    </Icon>
  );
});

IconMaterialTaskAltW100Filled.displayName = 'AmauiIconMaterialTaskAltW100Filled';

export default IconMaterialTaskAltW100Filled;
