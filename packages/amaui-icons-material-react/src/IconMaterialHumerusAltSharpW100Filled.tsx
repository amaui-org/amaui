import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumerusAltSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusAltSharpW100Filled'
      short_name='HumerusAlt'

      {...props}
    >
      <path d="M2.875 11.85 7.75 5.625q1.925 1.075 3.4 2.813 1.475 1.737 1.975 3.537 1.075-1.35 2.137-2.013Q16.325 9.3 18.575 8.7q.85-.225 1.512-.438.663-.212 1.238-.462v6.675L14.15 19q-.4.25-.85.387-.45.138-.95.138-.625 0-1.212-.237-.588-.238-1.063-.688Zm6.875 3.5q.275 0 .488-.213.212-.212.212-.487v-.088q0-.037-.025-.087.075.05.15.062.075.013.15.013.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212-.2 0-.35.1-.15.1-.25.25l-2.6-2.925q.2-.075.338-.25.137-.175.137-.4 0-.275-.213-.487-.212-.213-.487-.213t-.488.213q-.212.212-.212.487 0 .05.013.075.012.025.012.075-.075-.05-.15-.063Q6.4 10 6.325 10q-.275 0-.487.212-.213.213-.213.488t.213.488q.212.212.487.212.2 0 .363-.1.162-.1.262-.275l2.625 2.95q-.225.05-.375.237-.15.188-.15.438 0 .275.212.487.213.213.488.213Z"/>
    </Icon>
  );
});

IconMaterialHumerusAltSharpW100Filled.displayName = 'AmauiIconMaterialHumerusAltSharpW100Filled';

export default IconMaterialHumerusAltSharpW100Filled;
