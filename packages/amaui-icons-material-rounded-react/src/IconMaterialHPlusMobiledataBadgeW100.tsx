import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataBadgeW100'

      short_name='HPlusMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M152 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h656q26 0 43 17t17 43v496q0 26-17 43t-43 17H152Zm0-28h656q12 0 22-10t10-22V328q0-12-10-22t-22-10H152q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32 0V296v560Zm130-266h192v146q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V416q0-5.95-4.035-9.975-4.035-4.025-10-4.025T446 406.025q-4 4.025-4 9.975v146H250V416q0-5.95-4.035-9.975-4.035-4.025-10-4.025T226 406.025q-4 4.025-4 9.975v320q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V590Zm380 0v66q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975v-66h66q5.95 0 9.975-4.035 4.025-4.035 4.025-10T733.975 566q-4.025-4-9.975-4h-66v-66q0-5.95-4.035-9.975-4.035-4.025-10-4.025T634 486.025q-4 4.025-4 9.975v66h-66q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h66Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataBadgeW100.displayName = 'AmauiIconMaterialHPlusMobiledataBadgeW100';

export default IconMaterialHPlusMobiledataBadgeW100;
