import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndCircle'

      short_name='LineEndCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 16q1.65 0 2.825-1.175Q20 13.65 20 12q0-1.65-1.175-2.825Q17.65 8 16 8q-1.65 0-2.825 1.175Q12 10.35 12 12q0 1.65 1.175 2.825Q14.35 16 16 16Zm0 2q-2.25 0-3.912-1.425Q10.425 15.15 10.075 13H2v-2h8.075q.35-2.15 2.013-3.575Q13.75 6 16 6q2.5 0 4.25 1.75T22 12q0 2.5-1.75 4.25T16 18Zm0-6Z"/>
    </Icon>
  );
});

IconMaterialLineEndCircle.displayName = 'AmauiIconMaterialLineEndCircle';

export default IconMaterialLineEndCircle;
