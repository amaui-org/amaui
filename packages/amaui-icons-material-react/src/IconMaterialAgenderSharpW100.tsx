import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAgenderSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AgenderSharpW100'
      short_name='Agender'

      {...props}
    >
      <path d="M12 19.7q-1.95 0-3.325-1.375Q7.3 16.95 7.3 15q0-1.875 1.262-3.213 1.263-1.337 3.088-1.462V5.6h.7v4.725q1.85.125 3.1 1.462Q16.7 13.125 16.7 15q0 1.95-1.375 3.325Q13.95 19.7 12 19.7Zm0-.7q1.575 0 2.713-1.05 1.137-1.05 1.262-2.6h-7.95q.125 1.55 1.263 2.6Q10.425 19 12 19Zm-3.975-4.35h7.95q-.125-1.55-1.262-2.6Q13.575 11 12 11q-1.575 0-2.712 1.05-1.138 1.05-1.263 2.6Z"/>
    </Icon>
  );
});

IconMaterialAgenderSharpW100.displayName = 'AmauiIconMaterialAgenderSharpW100';

export default IconMaterialAgenderSharpW100;
