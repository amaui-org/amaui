import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquareFootW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootW100'

      short_name='SquareFoot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.8 19h-9q-.75 0-1.275-.525Q5 17.95 5 17.2V8.25q0-.5.425-.675.425-.175.725.125L7.4 8.95l-.6.6.4.4.6-.6 2 2-.6.6.4.4.6-.6 2.1 2.1-.6.6.4.4.6-.6 2 2-.6.6.4.4.6-.6 1.25 1.25q.3.3.113.7-.188.4-.663.4ZM6 9.7v7.5q0 .35.225.575Q6.45 18 6.8 18h7.5Z"/>
    </Icon>
  );
});

IconMaterialSquareFootW100.displayName = 'AmauiIconMaterialSquareFootW100';

export default IconMaterialSquareFootW100;
