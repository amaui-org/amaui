import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClarifySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClarifySharpW100Filled'
      short_name='Clarify'

      {...props}
    >
      <path d="M4.8 19.7Q4.175 19.7 3.737 19.262Q3.3 18.825 3.3 18.2V5.8Q3.3 5.175 3.737 4.737Q4.175 4.3 4.8 4.3H19.2Q19.825 4.3 20.263 4.737Q20.7 5.175 20.7 5.8V18.2Q20.7 18.825 20.263 19.262Q19.825 19.7 19.2 19.7ZM4.8 19H19.2Q19.55 19 19.775 18.775Q20 18.55 20 18.2V5.8Q20 5.45 19.775 5.225Q19.55 5 19.2 5H4.8Q4.45 5 4.225 5.225Q4 5.45 4 5.8V18.2Q4 18.55 4.225 18.775Q4.45 19 4.8 19ZM6.65 8.35V7.65H12.35V8.35ZM6.65 12.35V11.65H12.35V12.35ZM6.65 16.35V15.65H12.35V16.35ZM16.65 16.35V7.65H17.35V16.35Z"/>
    </Icon>
  );
});

IconMaterialClarifySharpW100Filled.displayName = 'AmauiIconMaterialClarifySharpW100Filled';

export default IconMaterialClarifySharpW100Filled;
