import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNextPlanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlanW100Filled'

      short_name='NextPlan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 9.85q1.05 0 2.313.725 1.262.725 2.087 2.075H13.9q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.6q.325 0 .538-.213.212-.212.212-.537V10q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.15q-.95-1.55-2.337-2.275-1.388-.725-2.563-.725-1.8 0-3.112 1.062Q7.225 11.275 6.8 12.85q-.05.2.038.35.087.15.237.15.125 0 .225-.088.1-.087.15-.212.325-1.35 1.488-2.275Q10.1 9.85 11.65 9.85ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialNextPlanW100Filled.displayName = 'AmauiIconMaterialNextPlanW100Filled';

export default IconMaterialNextPlanW100Filled;
