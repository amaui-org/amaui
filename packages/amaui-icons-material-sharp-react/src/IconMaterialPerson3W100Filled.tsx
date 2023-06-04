import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerson3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3W100Filled'

      short_name='Person3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 13.2q-.725 0-1.212-.512Q8.3 12.175 8.3 11.5q0-.725.35-1T9 9.65q0-.3-.1-.575-.1-.275-.1-.575 0-.55.3-.988.3-.437 1.025-.737.35-.325.725-.65T12 5.8q.825 0 1.175.35.35.35.7.625.725.3 1.025.737.3.438.3.988 0 .3-.1.575-.1.275-.1.575 0 .575.35.85t.35 1q0 .675-.487 1.188-.488.512-1.213.512Zm-4.7 7v-1.3q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 15.8 12 15.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v1.3Z"/>
    </Icon>
  );
});

IconMaterialPerson3W100Filled.displayName = 'AmauiIconMaterialPerson3W100Filled';

export default IconMaterialPerson3W100Filled;
