import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLockW100Filled'

      short_name='MouseLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M609-132q-14 0-25-11t-11-25v-106q0-14 11-24t25-10h4v-40q0-29 19.5-48.5T681-416q29 0 48.5 19.5T749-348v40h4q14.41 0 24.71 10Q788-288 788-274v106q0 14-10.29 25-10.3 11-24.71 11H609Zm32-176h80v-40q0-17-11.5-28.5T681-388q-17 0-28.5 11.5T641-348v40ZM252-596q0-91 61.5-157T466-824v228H252Zm242 0v-228q91 5 152.5 71T708-596H494Zm-14 464q-95.27 0-161.64-66.36Q252-264.73 252-360v-208h456v62q-6.75-1-13.16-1.5-6.42-.5-13.84-.5-83 0-141.5 58.5T481-308v176h-1Z"/>
    </Icon>
  );
});

IconMaterialMouseLockW100Filled.displayName = 'AmauiIconMaterialMouseLockW100Filled';

export default IconMaterialMouseLockW100Filled;
