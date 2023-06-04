import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthAndSafetyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafetyW100'

      short_name='HealthAndSafety'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.85q.35 0 .6-.25t.25-.6v-1.65h1.65q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25h-1.65V9q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6v1.65H9.5q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25h1.65V14q0 .35.25.6t.6.25Zm0 5.725h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Zm0-.675q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.775q0-.2-.1-.35-.1-.15-.275-.2L12.375 4.3q-.2-.075-.375-.075t-.375.075l-5.25 1.925q-.175.05-.275.2-.1.15-.1.35V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.85Z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafetyW100.displayName = 'AmauiIconMaterialHealthAndSafetyW100';

export default IconMaterialHealthAndSafetyW100;
