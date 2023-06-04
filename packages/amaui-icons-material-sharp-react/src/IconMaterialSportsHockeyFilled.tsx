import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsHockeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockeyFilled'

      short_name='SportsHockey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-3q0-.425.288-.712Q2.575 16 3 16h1v4Zm3 0v-4h4l.85-1.95 1.6 3.5-.85 1.9q-.125.275-.375.413Q9.975 20 9.7 20Zm15 0v-4h1q.425 0 .712.288.288.287.288.712v3Zm-1 0h-4.7q-.275 0-.525-.137-.25-.138-.375-.413L6.35 4H9.7L12 9.2 14.3 4h3.35l-4.05 8.85L15 16h4Z"/>
    </Icon>
  );
});

IconMaterialSportsHockeyFilled.displayName = 'AmauiIconMaterialSportsHockeyFilled';

export default IconMaterialSportsHockeyFilled;
