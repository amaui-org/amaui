import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCelebrationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CelebrationSharp'
      short_name='Celebration'

      {...props}
    >
      <path d="M2 22 7 8 16 17ZM5.3 18.7 12.35 16.2 7.8 11.65ZM14.55 12.55 13.5 11.5 21.025 3.975 23.55 6.5 22.5 7.55 21.025 6.075ZM10.55 8.55 9.5 7.5 10.95 6.05 9.45 4.55 10.5 3.5 13.05 6.05ZM12.55 10.55 11.5 9.5 15.975 5.025 13.5 2.55 14.55 1.5 18.075 5.025ZM16.55 14.55 15.5 13.5 19.025 9.975 22.55 13.5 21.5 14.55 19.025 12.075ZM5.3 18.7Z"/>
    </Icon>
  );
});

IconMaterialCelebrationSharp.displayName = 'AmauiIconMaterialCelebrationSharp';

export default IconMaterialCelebrationSharp;
