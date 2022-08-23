import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressRoundedW100'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M19.625 12.325q-.275 0-.487-.213-.213-.212-.213-.487v-4.95q0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488v4.95q0 .275-.212.487-.213.213-.488.213ZM7.375 19.8q-.15 0-.287-.062-.138-.063-.263-.188L3.1 15.875q-.175-.175-.212-.425-.038-.25.087-.45.1-.2.313-.288.212-.087.437-.037l3.4.675V5.6q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .188.025.087.025.162.075l3.05 1.5q.725.35 1.038 1.137.312.788.162 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Zm0-.7h6.4l.7-4q.1-.525-.062-1.1-.163-.575-.738-.85l-3.1-1.55h-1.75v-6q0-.225-.137-.363Q8.55 5.1 8.325 5.1q-.225 0-.362.137-.138.138-.138.363v10.6l-4.25-.85Zm0 0H13.675Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressRoundedW100.displayName = 'AmauiIconMaterialNestWakeOnPressRoundedW100';

export default IconMaterialNestWakeOnPressRoundedW100;
