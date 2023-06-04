import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndCircleFilled'

      short_name='LineEndCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 18q-2.25 0-3.912-1.425Q10.425 15.15 10.075 13H2v-2h8.075q.35-2.15 2.013-3.575Q13.75 6 16 6q2.5 0 4.25 1.75T22 12q0 2.5-1.75 4.25T16 18Z"/>
    </Icon>
  );
});

IconMaterialLineEndCircleFilled.displayName = 'AmauiIconMaterialLineEndCircleFilled';

export default IconMaterialLineEndCircleFilled;
