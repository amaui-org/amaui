import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiveHelpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveHelpW100'

      short_name='LiveHelp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 15.875q.275 0 .463-.187.187-.188.187-.463t-.187-.463q-.188-.187-.463-.187t-.462.187q-.188.188-.188.463t.188.463q.187.187.462.187Zm.3-3.15q.05-.6.263-.987.212-.388.787-.963.675-.675.988-1.188.312-.512.312-1.162 0-1.125-.775-1.812-.775-.688-1.825-.688-.975 0-1.687.538Q9.7 7 9.35 7.675l.7.3q.275-.575.725-.963.45-.387 1.275-.387 1.025 0 1.488.563Q14 7.75 14 8.425q0 .525-.275.925t-.725.825q-.8.75-1.075 1.325-.275.575-.275 1.225ZM12 21.15 9.55 18.7H4.3V3.3h15.4v15.4h-5.25ZM5 18h4.85L12 20.15 14.15 18H19V4H5ZM5 4v14Z"/>
    </Icon>
  );
});

IconMaterialLiveHelpW100.displayName = 'AmauiIconMaterialLiveHelpW100';

export default IconMaterialLiveHelpW100;
