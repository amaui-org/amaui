import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocationAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltFilled'

      short_name='EditLocationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11V8.9l6.2-6.2 2.1 2.1-6.2 6.2Zm9-6.9L17.9 2l.7-.7q.3-.3.7-.3.4 0 .7.3l.7.7q.3.3.3.7 0 .4-.3.7Zm-8 17.525q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2q.675 0 1.338.112.662.113 1.287.313L9.3 7.775q-.15.15-.225.338Q9 8.3 9 8.5V12q0 .425.288.712Q9.575 13 10 13h3.525q.2 0 .388-.075.187-.075.337-.225l5.3-5.3q.225.65.338 1.35.112.7.112 1.45 0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltFilled.displayName = 'AmauiIconMaterialEditLocationAltFilled';

export default IconMaterialEditLocationAltFilled;
