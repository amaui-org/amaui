import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataBadgeW100Filled'

      short_name='4gMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M152 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h656q26 0 43 17t17 43v496q0 26-17 43t-43 17H152Zm592-322h-54q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h26v100q0 14-9 23t-23 9H576q-14 0-23-9t-9-23V462q0-14 9-23t23-9h168q-8-14-22-21t-30-7H576q-24.75 0-42.375 17.625T516 462v228q0 24.75 17.625 42.375T576 750h108q24.75 0 42.375-17.625T744 690V562Zm-398 68v106q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V630h66q5.95 0 9.975-4.035 4.025-4.035 4.025-10T449.975 606q-4.025-4-9.975-4h-66V416q0-5.95-4.035-9.975-4.035-4.025-10-4.025T350 406.025q-4 4.025-4 9.975v186H214V416q0-5.95-4.035-9.975-4.035-4.025-10-4.025T190 406.025q-4 4.025-4 9.975v184q0 12.75 8.625 21.375T216 630h130Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterial4gMobiledataBadgeW100Filled';

export default IconMaterial4gMobiledataBadgeW100Filled;
