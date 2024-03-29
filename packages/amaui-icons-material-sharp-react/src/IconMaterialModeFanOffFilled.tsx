import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeFanOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanOffFilled'

      short_name='ModeFanOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 13.4q0 1.275-.8 1.937-.8.663-1.775.663-.15 0-.3-.012-.15-.013-.3-.063L8.1 5.2q.325-1.35 1.663-2.275Q11.1 2 13.4 2q1.275 0 1.938.762.662.763.662 1.713 0 .65-.287 1.275-.288.625-.888 1.025-.55.35-.887.9-.338.55-.463 1.175l.3.15q.15.075.275.175l2.3-.85q.425-.15.813-.238Q17.55 8 17.975 8 20 8 21 9.675t1 3.725Zm-1.525 9.9-4.55-4.575q-.325 1.35-1.662 2.313Q12.925 22 10.6 22q-1.275 0-1.937-.762Q8 20.475 8 19.5q0-.65.288-1.262.287-.613.887-1.013.55-.35.887-.9.338-.55.463-1.175l-.3-.15q-.15-.075-.275-.175l-2.3.825q-.425.15-.825.25-.4.1-.825.1-1.575 0-2.788-1.375Q2 13.25 2 10.6q0-1.275.763-1.938Q3.525 8 4.475 8q.2 0 .413.025.212.025.412.075L.675 3.5 2.1 2.075l19.8 19.8Z"/>
    </Icon>
  );
});

IconMaterialModeFanOffFilled.displayName = 'AmauiIconMaterialModeFanOffFilled';

export default IconMaterialModeFanOffFilled;
