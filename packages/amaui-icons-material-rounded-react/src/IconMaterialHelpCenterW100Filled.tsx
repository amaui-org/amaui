import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelpCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpCenterW100Filled'

      short_name='HelpCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm6.25-2.825q.275 0 .463-.187.187-.188.187-.463t-.187-.463q-.188-.187-.463-.187t-.462.187q-.188.188-.188.463t.188.463q.187.187.462.187Zm.3-3.5q.05-.475.3-.838.25-.362.75-.862.675-.675.988-1.187.312-.513.312-1.163 0-1.125-.737-1.763-.738-.637-1.863-.637-.875 0-1.55.4t-1.025 1q-.075.125-.012.287.062.163.212.213.125.05.263 0 .137-.05.212-.175.25-.45.7-.738.45-.287 1.15-.287 1.025 0 1.488.512Q14 8.65 14 9.325q0 .525-.275.975-.275.45-.725.875-.675.65-.987 1.162-.313.513-.363 1.038 0 .15.1.25t.25.1q.125 0 .225-.1t.125-.25Z"/>
    </Icon>
  );
});

IconMaterialHelpCenterW100Filled.displayName = 'AmauiIconMaterialHelpCenterW100Filled';

export default IconMaterialHelpCenterW100Filled;
