import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bubble'

      short_name='Bubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-840q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120q-25 0-49-3.5T384-134q-15-5-20.5-19t2.5-28q8-15 24.5-22t33.5-3q14 3 28 4.5t28 1.5q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 14 1.5 27.5T206-425q3 17-4 32t-23 21q-16 6-30.5-1.5T130-397q-5-20-7.5-41t-2.5-42q0-74 28.5-139.5T226-734q49-49 114.5-77.5T480-840Zm40 376L204-148q-11 11-28 11t-28-11q-11-11-11-28t11-28l316-316H360q-17 0-28.5-11.5T320-560q0-17 11.5-28.5T360-600h200q17 0 28.5 11.5T600-560v200q0 17-11.5 28.5T560-320q-17 0-28.5-11.5T520-360v-104Z"/>
    </Icon>
  );
});

IconMaterialBubble.displayName = 'AmauiIconMaterialBubble';

export default IconMaterialBubble;
