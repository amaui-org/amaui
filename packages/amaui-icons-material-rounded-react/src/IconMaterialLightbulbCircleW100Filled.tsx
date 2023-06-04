import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightbulbCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbCircleW100Filled'

      short_name='LightbulbCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 13.9h5.7q.8-.625 1.275-1.563.475-.937.475-2.037 0-1.9-1.35-3.25T12 5.7q-1.9 0-3.25 1.35T7.4 10.3q0 1.1.475 2.037.475.938 1.275 1.563Zm.275-.7q-.625-.6-.975-1.35-.35-.75-.35-1.55 0-1.625 1.138-2.763Q10.375 6.4 12 6.4t2.762 1.137Q15.9 8.675 15.9 10.3q0 .8-.35 1.55t-.975 1.35Zm.325 2.9h4.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM12 18.3q.35 0 .625-.187.275-.188.4-.513h-2.05q.125.325.4.513.275.187.625.187Zm0 2.4q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialLightbulbCircleW100Filled.displayName = 'AmauiIconMaterialLightbulbCircleW100Filled';

export default IconMaterialLightbulbCircleW100Filled;
