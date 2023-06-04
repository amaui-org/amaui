import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCircleUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleUpW100Filled'

      short_name='ArrowCircleUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.2q.15 0 .262-.1.113-.1.113-.25v-4.775l2 2.025q.1.1.238.1.137 0 .237-.1.1-.1.1-.237 0-.138-.1-.238l-2.3-2.3q-.125-.125-.262-.175Q12.15 9.1 12 9.1q-.15 0-.275.05-.125.05-.25.175l-2.325 2.3q-.1.1-.1.238 0 .137.1.237.1.1.237.1.138 0 .238-.1l2.025-2.025v4.775q0 .15.1.25t.25.1Zm0 5.5q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleUpW100Filled.displayName = 'AmauiIconMaterialArrowCircleUpW100Filled';

export default IconMaterialArrowCircleUpW100Filled;
