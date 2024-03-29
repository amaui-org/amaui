import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexDirection = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexDirection'

      short_name='FlexDirection'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 856V656q0-17 11.5-28.5T120 616h280q17 0 28.5 11.5T440 656v200q0 17-11.5 28.5T400 896H120q-17 0-28.5-11.5T80 856Zm0-360V296q0-17 11.5-28.5T120 256h280q17 0 28.5 11.5T440 296v200q0 17-11.5 28.5T400 536H120q-17 0-28.5-11.5T80 496Zm80-40h200V336H160v120Zm560 423q-8 0-15-2.5t-13-8.5L548 724q-11-11-11.5-27.5T548 668q11-11 28-11t28 11l76 75V296q0-17 11.5-28.5T720 256q17 0 28.5 11.5T760 296v447l76-75q11-11 27.5-11.5T892 668q11 11 11 28t-11 28L748 868q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialFlexDirection.displayName = 'AmauiIconMaterialFlexDirection';

export default IconMaterialFlexDirection;
