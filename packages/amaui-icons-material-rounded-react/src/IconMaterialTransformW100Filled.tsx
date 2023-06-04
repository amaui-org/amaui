import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransformW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformW100Filled'

      short_name='Transform'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 21.8q-.15 0-.275-.05-.125-.05-.25-.175l-2.35-2.35q-.1-.1-.1-.225t.125-.25q.125-.125.25-.113.125.013.25.113l2 1.95v-4.35h-6.5q-.65 0-1.075-.425-.425-.425-.425-1.075v-6.5H2.975q-.125 0-.225-.1T2.65 8q0-.15.1-.25t.25-.1h4.65V3.3L5.625 5.275q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175Q7.85 2.2 8 2.2q.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.112-.125-.012-.25-.112l-2-1.95v11.55q0 .3.25.55.25.25.55.25h11.875q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1h-4.65v4.35l2.025-1.975q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05Zm-.35-8.15v-4.5q0-.3-.25-.55-.25-.25-.55-.25h-4.5v-.7h4.5q.65 0 1.075.425.425.425.425 1.075v4.5Z"/>
    </Icon>
  );
});

IconMaterialTransformW100Filled.displayName = 'AmauiIconMaterialTransformW100Filled';

export default IconMaterialTransformW100Filled;
