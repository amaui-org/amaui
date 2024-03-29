import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBuild = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Build'

      short_name='Build'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.875 20.375q-.5 0-.95-.187-.45-.188-.825-.563l-5-5.025q-.5.2-1.012.3Q9.575 15 9 15q-2.5 0-4.25-1.75T3 9q0-.9.25-1.713.25-.812.7-1.537L7.6 9.4l1.8-1.8-3.65-3.65q.725-.45 1.537-.7Q8.1 3 9 3q2.5 0 4.25 1.75T15 9q0 .575-.1 1.087-.1.513-.3 1.013l5.05 5q.375.375.563.825.187.45.187.95 0 .5-.2.962-.2.463-.55.813-.375.375-.825.55-.45.175-.95.175Zm-.325-2.125q.125.125.338.113.212-.013.337-.138.125-.125.125-.337 0-.213-.125-.338L12.15 11.5q.45-.5.65-1.163Q13 9.675 13 9q0-1.5-.962-2.613-.963-1.112-2.388-1.337L11.5 6.9q.3.3.3.7 0 .4-.3.7l-3.2 3.2q-.3.3-.7.3-.4 0-.7-.3L5.05 9.65q.225 1.425 1.338 2.387Q7.5 13 9 13q.65 0 1.3-.2t1.175-.625Zm-5.825-6.525Z"/>
    </Icon>
  );
});

IconMaterialBuild.displayName = 'AmauiIconMaterialBuild';

export default IconMaterialBuild;
