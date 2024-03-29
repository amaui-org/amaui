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
      <path d="M17.875 21.425 11.1 14.6q-.5.2-1.012.3Q9.575 15 9 15q-2.5 0-4.25-1.75T3 9q0-.9.25-1.713.25-.812.7-1.537L7.6 9.4l1.8-1.8-3.65-3.65q.725-.45 1.537-.7Q8.1 3 9 3q2.5 0 4.25 1.75T15 9q0 .575-.1 1.087-.1.513-.3 1.013l6.825 6.775Zm0-2.85.675-.675-6.4-6.4q.45-.5.65-1.163Q13 9.675 13 9q0-1.5-.962-2.613-.963-1.112-2.388-1.337L11.5 6.9q.3.3.3.7 0 .4-.3.7l-3.2 3.2q-.3.3-.7.3-.4 0-.7-.3L5.05 9.65q.225 1.425 1.338 2.387Q7.5 13 9 13q.65 0 1.3-.2t1.175-.625ZM11.8 11.8Z"/>
    </Icon>
  );
});

IconMaterialBuild.displayName = 'AmauiIconMaterialBuild';

export default IconMaterialBuild;
