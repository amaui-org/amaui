import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestMiniRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestMiniRoundedW100Filled'
      short_name='NestMini'

      {...props}
    >
      <path d="M8.5 13.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q8.775 12.3 8.5 12.3t-.488.212Q7.8 12.725 7.8 13t.212.487q.213.213.488.213Zm3 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-4.5 8q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q4.3 14.8 4.3 13q0-3.575 2.475-6.088Q9.25 4.4 12.65 4.275V1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.275q3.4.125 5.875 2.637Q21.7 9.425 21.7 13q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.75 1.862-1.575.688-3.4.688Z"/>
    </Icon>
  );
});

IconMaterialNestMiniRoundedW100Filled.displayName = 'AmauiIconMaterialNestMiniRoundedW100Filled';

export default IconMaterialNestMiniRoundedW100Filled;
