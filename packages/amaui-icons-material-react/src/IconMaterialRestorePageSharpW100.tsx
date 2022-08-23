import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestorePageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageSharpW100'
      short_name='RestorePage'

      {...props}
    >
      <path d="M5.3 20.7V3.3H13.45L18.7 8.55V20.7ZM6 20H18V8.85L13.15 4H6ZM12 16.95Q13.65 16.95 14.8 15.8Q15.95 14.65 15.95 13Q15.95 11.35 14.8 10.2Q13.65 9.05 12 9.05Q10.9 9.05 10.125 9.55Q9.35 10.05 8.85 10.65V8.9H8.15V11.85H11.1V11.15H9.35Q9.725 10.575 10.425 10.162Q11.125 9.75 12 9.75Q13.35 9.75 14.3 10.7Q15.25 11.65 15.25 13Q15.25 14.35 14.3 15.3Q13.35 16.25 12 16.25Q10.9 16.25 10.075 15.613Q9.25 14.975 8.9 14H8.15Q8.575 15.4 9.625 16.175Q10.675 16.95 12 16.95ZM6 20V4V8.85V20Z"/>
    </Icon>
  );
});

IconMaterialRestorePageSharpW100.displayName = 'AmauiIconMaterialRestorePageSharpW100';

export default IconMaterialRestorePageSharpW100;
