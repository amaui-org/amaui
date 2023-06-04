import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltW100'

      short_name='EditLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.15 9.85h.5l5-5-.5-.5-5 5Zm6.2-5.7.8-.8-.5-.5-.8.8ZM12 21.5q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q.875 0 1.7.2t1.575.55l-.525.525q-.625-.275-1.325-.425-.7-.15-1.425-.15-2.8 0-4.725 1.912Q5.35 7.175 5.35 10.2q0 1.9 1.75 4.762 1.75 2.863 4.9 5.563 3.15-2.7 4.9-5.563 1.75-2.862 1.75-4.762 0-.8-.15-1.538-.15-.737-.45-1.387l.525-.525q.375.75.575 1.613.2.862.2 1.837 0 2.225-1.812 5.087Q15.725 18.15 12 21.5Zm0-9.575Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltW100.displayName = 'AmauiIconMaterialEditLocationAltW100';

export default IconMaterialEditLocationAltW100;
