import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPerson3RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Person3RoundedW100Filled'
      short_name='Person3'

      {...props}
    >
      <path d="M10 13.2q-.725 0-1.212-.512Q8.3 12.175 8.3 11.5q0-.725.35-1T9 9.65q0-.3-.1-.575-.1-.275-.1-.575 0-.55.3-.988.3-.437 1.025-.737.35-.325.725-.65T12 5.8q.825 0 1.175.35.35.35.7.625.725.3 1.025.737.3.438.3.988 0 .3-.1.575-.1.275-.1.575 0 .575.35.85t.35 1q0 .675-.487 1.188-.488.512-1.213.512Zm-3.95 7q-.325 0-.537-.213-.213-.212-.213-.537v-.55q0-.55.338-1.037.337-.488.912-.763 1.375-.65 2.738-.975Q10.65 15.8 12 15.8t2.713.325q1.362.325 2.737.975.575.275.913.763.337.487.337 1.037v.55q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialPerson3RoundedW100Filled.displayName = 'AmauiIconMaterialPerson3RoundedW100Filled';

export default IconMaterialPerson3RoundedW100Filled;
