import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseLockOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLockOffW100Filled'

      short_name='MouseLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M609-132q-14 0-25-11t-11-25v-110q0-13 8.5-21.5T603-308h36l148 148q-3 11-13 19.5t-21 8.5H609Zm194 28L107-800q-4-4-4.5-9.5T107-820q5-5 10-5t10 5l696 696q4 4 4.5 9.5T823-104q-5 5-10 5t-10-5Zm-54-208-28-28v-8q0-17-11.5-28.5T681-388q-2 0-3.5.5t-3.5.5l-22-22q7-3 14-5t15-2q29 0 48.5 19.5T749-348v36ZM494-596v-228q91 5 152.5 71T708-596H494Zm86 115-87-87h215v62q-7-1-13.5-1.5T681-508q-28 0-53 7t-48 20ZM480-132q-95 0-161.5-66.5T252-360v-208h127l141 141q-19 25-29 55t-10 64v176h-1Zm-14-463L311-750q29-32 69-51.5t86-22.5v229Zm-214-1q0-22 4-42.5t12-40.5l83 83h-99Z"/>
    </Icon>
  );
});

IconMaterialMouseLockOffW100Filled.displayName = 'AmauiIconMaterialMouseLockOffW100Filled';

export default IconMaterialMouseLockOffW100Filled;
