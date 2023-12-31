import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPlayW100Filled'

      short_name='PersonPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m213-507-64-64q-9-9-8.5-21t9.5-21l63-63q9-9 21-9t21 9l63 63q9 9 9 21t-9 21l-63 63q-9 9-21 9.5t-21-8.5Zm219 375q-12.75 0-21.375-8.625T402-162v-149q-53.807-4.138-106.538-11.379Q242.731-329.621 190-341q-7-2-12-6.5t-3-11q2-6.5 8-9.5t13-1q70 16 141.174 23T480-339q71.652 0 142.826-7Q694-353 764-369q7-2 13.028.909 6.028 2.909 7.972 9.091 2 7-3 11.5t-12 6.5q-52.731 11.379-105.462 18.621Q611.807-315.138 558-311v149q0 12.75-8.625 21.375T528-132h-96Zm48-528q-35 0-59.5-24.5T396-744q0-35 24.5-59.5T480-828q35 0 59.5 24.5T564-744q0 35-24.5 59.5T480-660Zm0 249q-26.4 0-45.2-18.8Q416-448.6 416-475q0-26.4 18.8-45.2Q453.6-539 480-539q26.4 0 45.2 18.8Q544-501.4 544-475q0 26.4-18.8 45.2Q506.4-411 480-411Zm190-92-31-54q-4-6.677-4-14.839Q635-580 639-587l31-54q4-7 10.828-11 6.827-4 15.172-4h59q8.345 0 15.172 4Q777-648 781-641l31 54q4 6.677 4 14.839Q816-564 812-557l-31 54q-4 7-10.828 11-6.827 4-15.172 4h-59q-8.345 0-15.172-4Q674-496 670-503Z"/>
    </Icon>
  );
});

IconMaterialPersonPlayW100Filled.displayName = 'AmauiIconMaterialPersonPlayW100Filled';

export default IconMaterialPersonPlayW100Filled;
