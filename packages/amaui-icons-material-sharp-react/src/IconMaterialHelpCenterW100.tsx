import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelpCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpCenterW100'

      short_name='HelpCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm7.05-2.125q.275 0 .463-.187.187-.188.187-.463t-.187-.463q-.188-.187-.463-.187t-.462.187q-.188.188-.188.463t.188.463q.187.187.462.187Zm-.4-3.15h.7q.05-.6.263-.987.212-.388.787-.963.675-.675.988-1.188.312-.512.312-1.162 0-1.125-.775-1.813-.775-.687-1.825-.687-.975 0-1.687.538Q9.7 8 9.35 8.675l.7.3q.275-.575.725-.963.45-.387 1.275-.387 1.025 0 1.488.563Q14 8.75 14 9.425q0 .525-.275.925t-.725.825q-.8.75-1.075 1.325-.275.575-.275 1.225ZM5 19V5Z"/>
    </Icon>
  );
});

IconMaterialHelpCenterW100.displayName = 'AmauiIconMaterialHelpCenterW100';

export default IconMaterialHelpCenterW100;
