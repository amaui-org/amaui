import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRightW100Filled'

      short_name='SubdirectoryArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.75 19.85q-.125-.125-.125-.25t.125-.25l4-4H6.4q-.325 0-.537-.213-.213-.212-.213-.537V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.65h11.4l-4.025-4.025q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l4.325 4.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-4.35 4.35q-.075.1-.213.1-.137 0-.262-.125Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRightW100Filled.displayName = 'AmauiIconMaterialSubdirectoryArrowRightW100Filled';

export default IconMaterialSubdirectoryArrowRightW100Filled;
