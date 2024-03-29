import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubbleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleFilled'

      short_name='Bubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-840q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120q-32 0-61.5-5T360-141q-13-5-14-19.5t10-25.5q13-13 30-18.5t35-1.5q14 3 29 4.5t30 1.5q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 15 1.5 29.5T206-422q4 18-1.5 35.5T186-356q-11 11-25.5 9.5T141-361q-11-29-16-58.5t-5-60.5q0-74 28.5-139.5T226-734q49-49 114.5-77.5T480-840Zm40 376L204-148q-11 11-28 11t-28-11q-11-11-11-28t11-28l316-316H360q-17 0-28.5-11.5T320-560q0-17 11.5-28.5T360-600h200q17 0 28.5 11.5T600-560v200q0 17-11.5 28.5T560-320q-17 0-28.5-11.5T520-360v-104Z"/>
    </Icon>
  );
});

IconMaterialBubbleFilled.displayName = 'AmauiIconMaterialBubbleFilled';

export default IconMaterialBubbleFilled;
