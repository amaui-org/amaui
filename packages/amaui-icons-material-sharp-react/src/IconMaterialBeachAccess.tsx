import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeachAccess = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccess'

      short_name='BeachAccess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 21-6.35-6.35 1.4-1.4L21 19.6Zm-13.65-.7q-1.5-1.5-2.225-3.375Q3 15.05 3 13.1q0-1.95.725-3.8.725-1.85 2.225-3.35t3.362-2.238q1.863-.737 3.813-.737 1.95 0 3.813.737Q18.8 4.45 20.3 5.95Zm.2-3.05L7.5 15.9q-.4-.525-.762-1.075-.363-.55-.663-1.1-.3-.55-.525-1.1-.225-.55-.4-1.075-.275 1.475-.037 2.95.237 1.475 1.037 2.75Zm2.8-2.75 5.55-5.6q-1.075-.825-2.162-1.338-1.088-.512-2.038-.699-.95-.188-1.712-.063-.763.125-1.188.55-.425.45-.55 1.212-.125.763.063 1.725.187.963.7 2.038Q8.125 13.4 8.95 14.5Zm6.95-7 1.4-1.35q-1.325-.8-2.8-1.05-1.475-.25-2.95.05.55.175 1.1.4.55.225 1.1.512.55.288 1.088.65.537.363 1.062.788Z"/>
    </Icon>
  );
});

IconMaterialBeachAccess.displayName = 'AmauiIconMaterialBeachAccess';

export default IconMaterialBeachAccess;
