import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChurchSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchSharpW100'
      short_name='Church'

      {...props}
    >
      <path d="M2.65 21.35V14.3L6.65 12.525V9.2L11.65 6.675V4.15H9.65V3.45H11.65V1.45H12.35V3.45H14.35V4.15H12.35V6.675L17.35 9.2V12.525L21.35 14.3V21.35H13.65V16.25H10.35V21.35ZM3.35 20.65H9.65V15.55H14.35V20.65H20.65V14.775L16.65 12.975V9.65L12 7.275L7.35 9.65V12.975L3.35 14.775ZM12 13Q12.425 13 12.713 12.712Q13 12.425 13 12Q13 11.575 12.713 11.287Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12Q11 12.425 11.288 12.712Q11.575 13 12 13ZM12 13.95Z"/>
    </Icon>
  );
});

IconMaterialChurchSharpW100.displayName = 'AmauiIconMaterialChurchSharpW100';

export default IconMaterialChurchSharpW100;
