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
      <path d="M573-132v-176h40v-40q0-29 19.5-48.5T681-416q29 0 48.5 19.5T749-348v40h39v176H573Zm68-176h80v-40q0-17-11.5-28.5T681-388q-17 0-28.5 11.5T641-348v40ZM252-596q0-91 61.5-157T466-824v228H252Zm242 0v-228q91 5 152.5 71T708-596H494Zm-14 464q-95.27 0-161.64-66.36Q252-264.73 252-360v-208h456v62q-6.75-1-13.16-1.5-6.42-.5-13.84-.5-83 0-141.5 58.5T481-308v176h-1Z"/>
    </Icon>
  );
});

IconMaterialMouseLockW100Filled.displayName = 'AmauiIconMaterialMouseLockW100Filled';

export default IconMaterialMouseLockW100Filled;
