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
      <path d="M352-172v-28h114v-158q-52-2-96.5-42T318-492q-60-7-103-48t-43-100v-68h142v-80h332v80h142v68q0 59-43 100t-103 48q-7 52-51.5 92T494-358v158h114v28H352Zm-38-350v-158H200v40q0 48 33 81.5t81 36.5Zm166.235 136Q537-386 576.5-425.667 616-465.333 616-522v-238H344v238q0 56.667 39.735 96.333Q423.471-386 480.235-386ZM646-522q48-3 81-36.5t33-81.5v-40H646v158Zm-166-51Z"/>
    </Icon>
  );
});

IconMaterialTrophyW100.displayName = 'AmauiIconMaterialTrophyW100';

export default IconMaterialTrophyW100;
