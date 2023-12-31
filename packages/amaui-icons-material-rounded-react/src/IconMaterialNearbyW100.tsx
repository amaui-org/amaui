import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyW100'

      short_name='Nearby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m459-371-88.182-88.182Q362-468 362-480q0-12 9-21l88.182-88.182Q468-598 480-598q12 0 21 9l88.182 88.182Q598-492 598-480q0 12-9 21l-88.182 88.182Q492-362 480-362q-12 0-21-9Zm63.833 187.167Q514-175 503-170.5q-11 4.5-23 4.5t-23-4.5q-11-4.5-19.833-13.333L181-440q-8.13-8.056-12.565-19.042Q164-470.028 164-481.014t4.435-21.962Q172.87-513.951 181-522l256-256q9.041-9 19.966-13.5 10.924-4.5 22.979-4.5t23.018 4.5Q513.927-787 523-778l256 256q8.13 8.056 12.565 19.042Q796-491.972 796-480.986t-4.435 21.962Q787.13-448.049 779-440L522.833-183.833ZM497-210l254-254q7-7 7-17t-7-17L497-752q-7-7-17-6.5t-17 7.5L208-496q-7 7-6.5 16t7.5 16l254 254q7 7 17 7t17-7Z"/>
    </Icon>
  );
});

IconMaterialNearbyW100.displayName = 'AmauiIconMaterialNearbyW100';

export default IconMaterialNearbyW100;
