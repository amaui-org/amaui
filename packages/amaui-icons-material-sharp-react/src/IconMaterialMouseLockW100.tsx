import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLockW100'

      short_name='MouseLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M573-132v-176h40v-40q0-29 19.5-48.5T681-416q29 0 48.5 19.5T749-348v40h39v176H573Zm68-176h80v-40q0-17-11.5-28.5T681-388q-17 0-28.5 11.5T641-348v40ZM480-568Zm0 436q-95 0-161.5-66.5T252-360v-236q0-95 66.5-161.5T480-824q95 0 161.5 66.5T708-596v90q-7-1-14-1.5t-14-.5v-60H280v208q0 83 58.5 141.5T480-160h1v28h-1ZM280-596h186v-200q-77 5-131.5 62T280-596Zm214 0h186q0-81-54.5-138T494-796v200Zm-14 28Zm14-28Zm-28 0Z"/>
    </Icon>
  );
});

IconMaterialMouseLockW100.displayName = 'AmauiIconMaterialMouseLockW100';

export default IconMaterialMouseLockW100;
