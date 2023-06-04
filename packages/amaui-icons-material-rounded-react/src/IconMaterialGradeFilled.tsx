import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeFilled'

      short_name='Grade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 21.05q-.275.225-.587.025-.313-.2-.188-.55L8.15 14.4l-4.875-3.5q-.3-.2-.187-.55Q3.2 10 3.55 10H9.6l1.925-6.4q.05-.2.188-.275.137-.075.287-.075.15 0 .288.075.137.075.187.275L14.4 10h6.05q.35 0 .463.35.112.35-.188.55l-4.875 3.5 1.875 6.125q.125.35-.187.55-.313.2-.588-.025L12 17.3Z"/>
    </Icon>
  );
});

IconMaterialGradeFilled.displayName = 'AmauiIconMaterialGradeFilled';

export default IconMaterialGradeFilled;
