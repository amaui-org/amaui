import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisplayExternalInputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplayExternalInputW100'

      short_name='DisplayExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 856H571q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h190l-80-80q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l92 92q9 9 9 21t-9 21l-92 92q-4 4-9.5 4.5T681 955q-5-5-5-10t5-10l79-79Zm-528 28q-24.75 0-42.375-17.625T172 824V710q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v114q0 14 9 23t23 9h114q5.95 0 9.975 4.035 4.025 4.035 4.025 10T355.975 880q-4.025 4-9.975 4H232Zm-46.035-428Q180 456 176 451.975T172 442V328q0-24.75 17.625-42.375T232 268h114q5.95 0 9.975 4.035 4.025 4.035 4.025 10T355.975 292q-4.025 4-9.975 4H232q-14 0-23 9t-9 23v114q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm588 0Q768 456 764 451.975T760 442V328q0-14-9-23t-23-9H614q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h114q24.75 0 42.375 17.625T788 328v114q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialDisplayExternalInputW100.displayName = 'AmauiIconMaterialDisplayExternalInputW100';

export default IconMaterialDisplayExternalInputW100;
