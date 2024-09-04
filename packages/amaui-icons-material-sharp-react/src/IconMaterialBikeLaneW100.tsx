import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeLaneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeLaneW100'

      short_name='BikeLane'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M702-160q40 0 68.5-28.5T799-258q0-41-28.5-69.5T702-356q-41 0-70 28.5T603-258q0 41 29 69.5t70 28.5Zm0 28q-53 0-89.5-36.5T576-258q0-52 36.5-89t89.5-37q52 0 89 37t37 89q0 53-37 89.5T702-132ZM591-636q-17 0-29.5-12.5T549-678q0-17 12.5-29.5T591-720q17 0 29.5 12.5T633-678q0 17-12.5 29.5T591-636ZM465-220v-148l-95-79q-17-14-17.5-36.5T369-522l72-72q15-14 36-15t36 15l32 32q45 45 84 55.5t74 10.5v28q-51 0-98.5-20T523-544l-17-17-98 98 85 84v159h-28Zm-207 60q41 0 69.5-28.5T356-258q0-41-28.5-69.5T258-356q-41 0-69.5 28.5T160-258q0 41 28.5 69.5T258-160Zm-67-495 113-113-20-20-92 92-40-39-20 20 59 60Zm67 523q-52 0-89-36.5T132-258q0-52 37-89t89-37q53 0 89.5 37t36.5 89q0 53-36.5 89.5T258-132Zm-40-418q-57-14-91.5-62T92-723v-96l126-49 126 49v96q0 63-34.5 111T218-550Z"/>
    </Icon>
  );
});

IconMaterialBikeLaneW100.displayName = 'AmauiIconMaterialBikeLaneW100';

export default IconMaterialBikeLaneW100;
