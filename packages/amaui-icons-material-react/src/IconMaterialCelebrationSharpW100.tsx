import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCelebrationSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CelebrationSharpW100'
      short_name='Celebration'

      {...props}
    >
      <path d="M4.075 19.85 7.475 10.35 13.575 16.45ZM5.225 18.7 12.275 16.2 7.725 11.65ZM13.075 12.95 12.575 12.45 19.525 5.5 21.475 7.45 21.025 7.95 19.55 6.475ZM9.975 9.85 9.475 9.35 11.525 7.3 9.475 5.25 9.975 4.75 12.525 7.3ZM11.525 11.4 11.025 10.9 15.5 6.425 13.025 3.95 13.525 3.45 16.5 6.425ZM14.625 14.5 14.125 14 16.675 11.45 19.225 14 18.725 14.5 16.675 12.45ZM5.225 18.7Z"/>
    </Icon>
  );
});

IconMaterialCelebrationSharpW100.displayName = 'AmauiIconMaterialCelebrationSharpW100';

export default IconMaterialCelebrationSharpW100;
