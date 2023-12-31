import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrophyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrophyW100'

      short_name='Trophy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-200v-158q-57-2-98.5-39.5T318-492q-60-7-103-48t-43-100v-8q0-24.75 17.625-42.375T232-708h82v-20q0-24.75 17.625-42.375T374-788h212q24.75 0 42.375 17.625T646-728v20h82q24.75 0 42.375 17.625T788-648v8q0 59-43 100t-103 48q-8 57-49.5 94.5T494-358v158h100q5.95 0 9.975 4.035 4.025 4.035 4.025 10T603.975-176q-4.025 4-9.975 4H366q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h100ZM314-522v-158h-82q-14 0-23 9t-9 23v8q0 47 33 81t81 37Zm166.235 136Q537-386 576.5-425.667 616-465.333 616-522v-206q0-14-9-23t-23-9H376q-14 0-23 9t-9 23v206q0 56.667 39.735 96.333Q423.471-386 480.235-386ZM646-522q48-3 81-37t33-81v-8q0-14-9-23t-23-9h-82v158Zm-166-51Z"/>
    </Icon>
  );
});

IconMaterialTrophyW100.displayName = 'AmauiIconMaterialTrophyW100';

export default IconMaterialTrophyW100;
