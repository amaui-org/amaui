import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStylerRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylerRoundedW100'
      short_name='Styler'

      {...props}
    >
      <path d="M7.65 21.35v-6H5.4q-.725 0-1.238-.513-.512-.512-.512-1.237 0-.525.3-.988.3-.462.75-.662l6.95-3.1V7.3q-.875-.125-1.437-.763Q9.65 5.9 9.65 5q0-.975.688-1.663.687-.687 1.662-.687.975 0 1.663.687.687.688.687 1.663h-.75q0-.675-.462-1.163Q12.675 3.35 12 3.35q-.675 0-1.162.487-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488.15 0 .25.1t.1.25v1.85l6.95 3.1q.45.2.75.662.3.463.3.988 0 .725-.512 1.237-.513.513-1.238.513h-2.25v6Zm.7-7h7.3Zm-2.95.3h2.25v-1h8.7v1h2.25q.525 0 .788-.313.262-.312.262-.737 0-.3-.15-.575-.15-.275-.45-.425L12 9.5l-7 3.1q-.35.15-.5.4-.15.25-.15.6 0 .375.263.712.262.338.787.338Zm2.95 6h7.3v-6.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialStylerRoundedW100.displayName = 'AmauiIconMaterialStylerRoundedW100';

export default IconMaterialStylerRoundedW100;
