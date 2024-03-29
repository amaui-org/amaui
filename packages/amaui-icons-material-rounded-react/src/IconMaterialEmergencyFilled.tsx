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
      <path d="M11 21q-.425 0-.712-.288Q10 20.425 10 20v-4.55l-3.925 2.3q-.35.2-.763.1-.412-.1-.612-.475l-1-1.725q-.2-.35-.1-.763.1-.412.475-.612L8 12 4.075 9.725q-.375-.2-.475-.613-.1-.412.1-.762l1-1.725q.2-.35.6-.45.4-.1.775.1L10 8.55V4q0-.425.288-.713Q10.575 3 11 3h2q.425 0 .713.287Q14 3.575 14 4v4.55l3.925-2.275q.35-.2.763-.1.412.1.612.475l1 1.7q.2.35.088.762-.113.413-.463.613L16 12l3.925 2.25q.375.2.475.613.1.412-.1.762l-1 1.75q-.2.35-.612.45-.413.1-.763-.1L14 15.45V20q0 .425-.287.712Q13.425 21 13 21Z"/>
    </Icon>
  );
});

IconMaterialEmergencyFilled.displayName = 'AmauiIconMaterialEmergencyFilled';

export default IconMaterialEmergencyFilled;
