import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsHockeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHockeyW100'

      short_name='SportsHockey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18.85v-1q0-.3.2-.5t.5-.2h.8v1.7Zm2.5 0v-1.7h4.25l1.05-2.35.4.85L10 18.3q-.15.3-.337.425-.188.125-.563.125Zm14 0v-1.7h.8q.3 0 .5.2t.2.5v1Zm-1 0h-3.6q-.35 0-.55-.125-.2-.125-.35-.425L8.15 5.15h.75L12 12.1l3.1-6.95h.75l-3.45 7.8 1.85 4.2h4.25Z"/>
    </Icon>
  );
});

IconMaterialSportsHockeyW100.displayName = 'AmauiIconMaterialSportsHockeyW100';

export default IconMaterialSportsHockeyW100;
