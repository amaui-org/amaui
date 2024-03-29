import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRocketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketFilled'

      short_name='Rocket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.725 20.525-2.35.925q-.5.2-.937-.1Q4 21.05 4 20.525v-4.45q0-.5.238-.95.237-.45.662-.725l1.1-.725q.175 2.025.538 3.5.362 1.475 1.187 3.35Zm3.5-17.3q.15-.15.363-.213.212-.062.412-.062.2 0 .413.062.212.063.362.213Q14.5 4.8 15.5 7.337q1 2.538 1 5.338 0 1.925-.325 3.375t-1 3.175q-.125.325-.375.55-.25.225-.6.225H9.8q-.35 0-.6-.225t-.375-.55q-.675-1.725-1-3.187-.325-1.463-.325-3.363 0-2.8 1-5.338 1-2.537 2.725-4.112ZM12 13q.825 0 1.413-.588Q14 11.825 14 11t-.587-1.413Q12.825 9 12 9q-.825 0-1.412.587Q10 10.175 10 11q0 .825.588 1.412Q11.175 13 12 13Zm4.275 7.525q.825-1.875 1.187-3.35.363-1.475.538-3.5l1.1.725q.425.275.663.725.237.45.237.95v4.45q0 .525-.438.825-.437.3-.937.1Z"/>
    </Icon>
  );
});

IconMaterialRocketFilled.displayName = 'AmauiIconMaterialRocketFilled';

export default IconMaterialRocketFilled;
