import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubwayW100Filled'

      short_name='Subway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20.7q-.275 0-.487-.213Q3.3 20.275 3.3 20V8.85q0-1.65.913-2.925Q5.125 4.65 6.7 4q1.175-.45 2.6-.575Q10.725 3.3 12 3.3q1.275 0 2.7.125 1.425.125 2.6.575 1.575.65 2.488 1.925Q20.7 7.2 20.7 8.85V20q0 .275-.212.487-.213.213-.488.213Zm3.5-7.4h9V9h-9Zm7.45 3q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm-5.9 0q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.538.212-.212.213-.212.538 0 .325.212.537.213.213.538.213ZM8.475 20q.025 0 .3-.15l1.375-1.55h3.7l1.4 1.575q.025.025.3.125.1 0 .25-.075.15-.1.163-.288.012-.187-.113-.312l-.95-1.075q1.125-.15 1.713-.887.587-.738.587-1.863V9q0-1.275-1.35-1.763Q14.5 6.75 12 6.75q-2.275 0-3.737.487Q6.8 7.725 6.8 9v6.5q0 1.125.588 1.875.587.75 1.712.875l-.95 1.075q-.125.125-.1.312.025.188.175.288.05.025.25.075Z"/>
    </Icon>
  );
});

IconMaterialSubwayW100Filled.displayName = 'AmauiIconMaterialSubwayW100Filled';

export default IconMaterialSubwayW100Filled;
