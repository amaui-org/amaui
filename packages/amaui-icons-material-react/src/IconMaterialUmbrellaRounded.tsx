import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUmbrellaRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UmbrellaRounded'
      short_name='Umbrella'

      {...props}
    >
      <path d="M12 22Q11.7 22 11.438 21.837Q11.175 21.675 11.05 21.325L6.275 6.925Q6.175 6.65 6.388 6.437Q6.6 6.225 6.875 6.3L9.5 6.925L11 5.775V3.4Q11 2.4 11.725 1.7Q12.45 1 13.5 1Q14.4 1 15.012 1.475Q15.625 1.95 15.825 2.675Q15.975 3.225 15.7 3.612Q15.425 4 14.85 4Q14.5 4 14.275 3.837Q14.05 3.675 13.975 3.35Q13.925 3.15 13.8 3.037Q13.675 2.925 13.5 2.925Q13.3 2.925 13.15 3.062Q13 3.2 13 3.4V5.775L14.5 6.925L17.125 6.3Q17.4 6.225 17.613 6.437Q17.825 6.65 17.725 6.925L12.95 21.3Q12.825 21.65 12.562 21.825Q12.3 22 12 22ZM13 14.8 14.95 8.85 14.05 9.075 13 8.3ZM11 14.8V8.3L9.95 9.1L9.025 8.85Z"/>
    </Icon>
  );
});

IconMaterialUmbrellaRounded.displayName = 'AmauiIconMaterialUmbrellaRounded';

export default IconMaterialUmbrellaRounded;
