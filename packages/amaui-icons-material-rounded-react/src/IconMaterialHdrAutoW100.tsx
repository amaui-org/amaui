import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoW100'

      short_name='HdrAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.375 16.55q.1 0 .175-.05.075-.05.125-.15l.975-2.65h4.7l.975 2.65q.05.1.125.15.075.05.175.05.2 0 .313-.15.112-.15.037-.35l-3.45-9.275q-.05-.125-.187-.225-.138-.1-.288-.1-.15 0-.288.1-.137.1-.187.225l-3.55 9.3q-.075.2.037.338.113.137.313.137Zm1.525-3.5 2.1-5.5h.1l2 5.5ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-8.7Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoW100.displayName = 'AmauiIconMaterialHdrAutoW100';

export default IconMaterialHdrAutoW100;
