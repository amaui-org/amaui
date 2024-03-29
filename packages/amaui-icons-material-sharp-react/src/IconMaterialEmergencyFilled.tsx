import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyFilled'

      short_name='Emergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 22q-.425 0-.712-.288Q9 21.425 9 21v-3.8l-3.3 1.9q-.35.2-.75.088-.4-.113-.6-.463l-2-3.45q-.2-.35-.1-.763.1-.412.45-.612L6 12l-3.3-1.9q-.35-.2-.45-.613-.1-.412.1-.762l2-3.45q.2-.35.6-.463.4-.112.75.088L9 6.8V3q0-.425.288-.713Q9.575 2 10 2h4q.425 0 .713.287Q15 2.575 15 3v3.8l3.3-1.9q.35-.2.75-.088.4.113.6.463l2 3.45q.2.35.1.762-.1.413-.45.613L18 12l3.3 1.9q.35.2.45.612.1.413-.1.763l-2 3.45q-.2.35-.6.463-.4.112-.75-.088L15 17.2V21q0 .425-.287.712Q14.425 22 14 22Z"/>
    </Icon>
  );
});

IconMaterialEmergencyFilled.displayName = 'AmauiIconMaterialEmergencyFilled';

export default IconMaterialEmergencyFilled;
