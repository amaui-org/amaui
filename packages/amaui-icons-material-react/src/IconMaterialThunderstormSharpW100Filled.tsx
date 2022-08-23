import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThunderstormSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormSharpW100Filled'
      short_name='Thunderstorm'

      {...props}
    >
      <path d="M12.975 23.35 14.95 21.125 12.95 20.125 15.1 17.65H16.025L14.05 19.875L16.05 20.875L13.9 23.35ZM6.975 23.35 8.95 21.125 6.95 20.125 9.1 17.65H10.025L8.05 19.875L10.05 20.875L7.9 23.35ZM7.5 15.35Q5.475 15.35 4.062 13.938Q2.65 12.525 2.65 10.5Q2.65 8.6 3.938 7.225Q5.225 5.85 7.175 5.65Q7.9 4.25 9.163 3.45Q10.425 2.65 12 2.65Q14.125 2.65 15.638 4.075Q17.15 5.5 17.375 7.625Q19.25 7.725 20.3 8.862Q21.35 10 21.35 11.5Q21.35 13.1 20.225 14.225Q19.1 15.35 17.5 15.35Z"/>
    </Icon>
  );
});

IconMaterialThunderstormSharpW100Filled.displayName = 'AmauiIconMaterialThunderstormSharpW100Filled';

export default IconMaterialThunderstormSharpW100Filled;
