import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutboundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboundW100Filled'

      short_name='Outbound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 9.825v2.85q0 .125.1.225t.25.1q.15 0 .25-.1t.1-.25V9.4q0-.325-.212-.538-.213-.212-.538-.212h-3.275q-.125 0-.225.1T11 9q0 .15.1.25t.25.1h2.8l-5.5 5.5q-.125.125-.112.25.012.125.112.225.125.125.25.125t.25-.125ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialOutboundW100Filled.displayName = 'AmauiIconMaterialOutboundW100Filled';

export default IconMaterialOutboundW100Filled;
