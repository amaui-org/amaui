import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoStoriesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesFilled'

      short_name='AutoStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-1.2-.95-2.6-1.475Q8 18 6.5 18q-1.35 0-2.725.425T1 19.675V5.55q1.125-.8 2.663-1.175Q5.2 4 6.5 4q1.45 0 2.838.375Q10.725 4.75 12 5.5v12.1q1.275-.8 2.675-1.2 1.4-.4 2.825-.4.9 0 1.763.15.862.15 1.737.45v-12q.375.125 1 .4t1 .55v14.125q-1.4-.825-2.775-1.25Q18.85 18 17.5 18q-1.5 0-2.9.525T12 20Zm2-5V5.5l5-5v10Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesFilled.displayName = 'AmauiIconMaterialAutoStoriesFilled';

export default IconMaterialAutoStoriesFilled;
