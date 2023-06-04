import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProblemW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProblemW100'

      short_name='Problem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.2q.3 0 .5-.2t.2-.5q0-.3-.2-.5t-.5-.2q-.3 0-.5.2t-.2.5q0 .3.2.5t.5.2Zm-.35-2.9h.7V7.8h-.7Zm4 1.05h6.7v-.7h-6.7Zm0-4h6.7v-.7h-6.7ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6Z"/>
    </Icon>
  );
});

IconMaterialProblemW100.displayName = 'AmauiIconMaterialProblemW100';

export default IconMaterialProblemW100;
