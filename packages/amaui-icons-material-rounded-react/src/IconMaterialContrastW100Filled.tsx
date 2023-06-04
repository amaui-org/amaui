import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContrastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContrastW100Filled'

      short_name='Contrast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm.35-.7q3.125-.15 5.388-2.413Q20 15.325 20 12q0-3.325-2.238-5.563Q15.525 4.2 12.35 4Z"/>
    </Icon>
  );
});

IconMaterialContrastW100Filled.displayName = 'AmauiIconMaterialContrastW100Filled';

export default IconMaterialContrastW100Filled;
