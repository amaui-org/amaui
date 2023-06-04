import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthAmericaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthAmericaW100Filled'

      short_name='SouthAmerica'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7-.7-.7q-.15-.15-.225-.325Q11 18.8 11 18.6V13q-.825 0-1.412-.588Q9 11.825 9 11v-1L5.875 6.875Q5 7.925 4.5 9.225T4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm1-.05q2.975-.375 4.988-2.625Q20 15.075 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.1 0-2.113.287-1.012.288-1.887.788V7h3.55q.45 0 .863.2.412.2.687.55l1.4 1.75H16q.425 0 .712.287.288.288.288.713v1.05q0 .225-.062.425-.063.2-.188.4L13 18Z"/>
    </Icon>
  );
});

IconMaterialSouthAmericaW100Filled.displayName = 'AmauiIconMaterialSouthAmericaW100Filled';

export default IconMaterialSouthAmericaW100Filled;
