import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUmbrellaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaSharp'
      short_name='Umbrella'

      {...props}
    >
      <path d="M12 22Q11.7 22 11.438 21.837Q11.175 21.675 11.05 21.325L6 6.075L9.5 6.925L11 5.775V3.4Q11 2.4 11.725 1.7Q12.45 1 13.5 1Q14.55 1 15.275 1.7Q16 2.4 16 3.4V4H14V3.4Q14 3.2 13.85 3.062Q13.7 2.925 13.5 2.925Q13.3 2.925 13.15 3.062Q13 3.2 13 3.4V5.775L14.5 6.925L18 6.075L12.95 21.3Q12.825 21.65 12.562 21.825Q12.3 22 12 22ZM13 14.8 14.95 8.85 14.05 9.075 13 8.3ZM11 14.8V8.3L9.95 9.1L9.025 8.85Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaSharp.displayName = 'AmauiIconMaterialUmbrellaSharp';

export default IconMaterialUmbrellaSharp;
