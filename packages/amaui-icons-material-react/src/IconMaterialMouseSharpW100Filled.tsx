import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMouseSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseSharpW100Filled'
      short_name='Mouse'

      {...props}
    >
      <path d="M12 20.7Q9.625 20.7 7.963 19.038Q6.3 17.375 6.3 15V9.8H17.7V15Q17.7 17.375 16.038 19.038Q14.375 20.7 12 20.7ZM6.3 9.1Q6.3 6.825 7.85 5.175Q9.4 3.525 11.65 3.4V9.1ZM12.35 9.1V3.4Q14.6 3.525 16.15 5.175Q17.7 6.825 17.7 9.1Z"/>
    </Icon>
  );
});

IconMaterialMouseSharpW100Filled.displayName = 'AmauiIconMaterialMouseSharpW100Filled';

export default IconMaterialMouseSharpW100Filled;
