import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadgeW100Filled'

      short_name='1xMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M152 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h656q26 0 43 17t17 43v496q0 26-17 43t-43 17H152Zm154-454v306q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V432q0-12.75-8.625-21.375T304 402h-64q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h66Zm304 163 90 150q1.961 3.111 5.098 5.056 3.137 1.944 7.059 1.944Q720 750 725 743t0-15l-98-164 85-141q4-7-.118-14-4.117-7-11.96-7-3.922 0-6.97 1.944-3.047 1.945-4.952 5.056l-77 129-77-129q-1.961-3.111-5.098-5.056-3.137-1.944-7.059-1.944Q514 402 509 409t0 15l85 142-98 163q-4 7 .118 14 4.117 7 11.96 7 3.922 0 6.97-1.944 3.047-1.945 4.952-5.056l90-150Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterial1xMobiledataBadgeW100Filled';

export default IconMaterial1xMobiledataBadgeW100Filled;
