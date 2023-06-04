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
      <path d="M3.75 18.85q-.325 0-.537-.212Q3 18.425 3 18.1v-.25q0-.3.2-.5t.5-.2h.8v1.7Zm1.75 0v-1.7h4.25l1.05-2.35.4.85L10 18.3q-.15.3-.337.425-.188.125-.563.125Zm14 0v-1.7h.8q.3 0 .5.2t.2.5v.25q0 .325-.212.538-.213.212-.538.212Zm-4.6 0q-.35 0-.55-.125-.2-.125-.35-.425L8.375 5.65q-.1-.2 0-.35.1-.15.325-.15.075 0 .15.05t.125.125L12 12.1l3.025-6.775q.05-.075.113-.125.062-.05.162-.05.225 0 .325.15t0 .35l-3.225 7.3 1.85 4.2h4.25v1.7Z"/>
    </Icon>
  );
});

IconMaterialSportsHockeyW100.displayName = 'AmauiIconMaterialSportsHockeyW100';

export default IconMaterialSportsHockeyW100;
