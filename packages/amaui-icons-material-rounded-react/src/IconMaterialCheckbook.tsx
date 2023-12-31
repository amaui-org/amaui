import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckbook = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Checkbook'

      short_name='Checkbook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360h240l80-80H280q-17 0-28.5 11.5T240-400q0 17 11.5 28.5T280-360Zm0-160h160q17 0 28.5-11.5T480-560q0-17-11.5-28.5T440-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm80 320H160q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v40h-80v-40H160v400h280l-80 80Zm556-268q5 5 5 11t-5 11l-36 36-70-70 36-36q5-5 11-5t11 5l48 48Zm-60 82L602-132q-6 6-13.5 9t-15.5 3h-33q-8 0-14-6t-6-14v-33q0-8 3-15.5t9-13.5l254-254 70 70ZM160-680v400-400Z"/>
    </Icon>
  );
});

IconMaterialCheckbook.displayName = 'AmauiIconMaterialCheckbook';

export default IconMaterialCheckbook;
