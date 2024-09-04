import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseLockOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLockOffW100'

      short_name='MouseLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-595Zm27 27Zm-93 61Zm-21-61Zm87 0Zm28-28Zm-14-228q95 0 161.5 66.5T708-596v90q-7-1-14-1.5t-14-.5v-60H493l-27-27v-201q-40 2-74.5 19.5T331-730l-20-20q32-35 75-54.5t94-19.5ZM268-679l111 111h-99v208q0 83 58.5 141.5T480-160h1v28h-1q-95 0-161.5-66.5T252-360v-236q0-22.27 4-42.64Q260-659 268-679Zm226 83h186q0-81-54.5-138T494-796v200ZM813-94 97-810l20-20 716 716-20 20Zm-240-38v-176h66l148 148v28H573Zm176-180-28-27.69V-348q0-17-11.5-28.5T681-388q-2 0-3.5.5t-3.5.5l-22-22q7-3 14.1-5 7.09-2 14.9-2 29 0 48.5 19.5T749-348v36Z"/>
    </Icon>
  );
});

IconMaterialMouseLockOffW100.displayName = 'AmauiIconMaterialMouseLockOffW100';

export default IconMaterialMouseLockOffW100;
