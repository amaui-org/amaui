import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCircleDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleDownW100Filled'

      short_name='ArrowCircleDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.9q.15 0 .288-.05.137-.05.262-.175l2.3-2.3q.1-.1.1-.238 0-.137-.1-.237-.1-.1-.237-.1-.138 0-.238.1l-2 2.025V9.15q0-.15-.113-.263-.112-.112-.262-.112-.15 0-.262.112-.113.113-.113.263v4.775l-2-2.025q-.1-.1-.238-.1-.137 0-.237.1-.1.1-.1.237 0 .138.1.238l2.325 2.3q.125.125.25.175.125.05.275.05Zm0 5.8q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleDownW100Filled.displayName = 'AmauiIconMaterialArrowCircleDownW100Filled';

export default IconMaterialArrowCircleDownW100Filled;
