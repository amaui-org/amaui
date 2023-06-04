import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransformW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformW100'

      short_name='Transform'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 22.1 12.9 19l.5-.5 2.25 2.2v-4.35h-6.5q-.65 0-1.075-.425-.425-.425-.425-1.075v-6.5h-5v-.7h5V3.3L5.4 5.5 4.9 5 8 1.9 11.1 5l-.5.5-2.25-2.2v11.55q0 .3.25.55.25.25.55.25h12.2v.7h-5v4.35l2.25-2.2.5.5Zm-.35-8.45v-4.5q0-.3-.25-.55-.25-.25-.55-.25h-4.5v-.7h4.5q.65 0 1.075.425.425.425.425 1.075v4.5Z"/>
    </Icon>
  );
});

IconMaterialTransformW100.displayName = 'AmauiIconMaterialTransformW100';

export default IconMaterialTransformW100;
