import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIceSkating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkating'

      short_name='IceSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22v-2h4v-2H3V3h9v4.5q0 .675.413 1.225.412.55 1.062.725L19 10.975V18h-3v2h2q1.25 0 2.125-.875T21 17h2q0 2.075-1.462 3.538Q20.075 22 18 22ZM8 6.5q0-.2.15-.35Q8.3 6 8.5 6H10V5H5v11h12v-3.475l-4.1-1.175q-.9-.275-1.575-.888Q10.65 9.85 10.3 9H8.5q-.2 0-.35-.15Q8 8.7 8 8.5q0-.2.15-.35Q8.3 8 8.5 8h1.6q-.05-.3-.062-.5-.013-.2-.038-.5H8.5q-.2 0-.35-.15Q8 6.7 8 6.5ZM8 20h6v-2H8Zm-3-4Z"/>
    </Icon>
  );
});

IconMaterialIceSkating.displayName = 'AmauiIconMaterialIceSkating';

export default IconMaterialIceSkating;
