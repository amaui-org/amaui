import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckbookFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckbookFilled'

      short_name='Checkbook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M856-386 602-132q-6 6-13.5 9t-15.5 3h-33q-8 0-14-6t-6-14v-33q0-8 3-15.5t9-13.5l254-254 70 70ZM80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v40h-80L600-440H280q-17 0-28.5 11.5T240-400q0 17 11.5 28.5T280-360h240L360-200H160q-33 0-56.5-23.5T80-280Zm200-240h160q17 0 28.5-11.5T480-560q0-17-11.5-28.5T440-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm600 110-70-70 36-36q5-5 11-5t11 5l48 48q5 5 5 11t-5 11l-36 36Z"/>
    </Icon>
  );
});

IconMaterialCheckbookFilled.displayName = 'AmauiIconMaterialCheckbookFilled';

export default IconMaterialCheckbookFilled;
