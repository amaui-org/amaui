import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalInjuryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalInjuryFilled'

      short_name='PersonalInjury'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10q-1.65 0-2.825-1.175Q8 7.65 8 6q0-1.65 1.175-2.825Q10.35 2 12 2q1.65 0 2.825 1.175Q16 4.35 16 6q0 1.65-1.175 2.825Q13.65 10 12 10ZM9.75 20q-.3 0-.525-.225Q9 19.55 9 19.25q0-.3.225-.525.225-.225.525-.225h1.9l-.7 1.5ZM4 22v-6.775q0-.85.425-1.563.425-.712 1.175-1.112 1.275-.65 2.888-1.1Q10.1 11 12 11q.8 0 1.6.1t1.4.225L12.575 16.5H9.75q-1.15 0-1.95.8T7 19.25q0 1.15.8 1.95t1.95.8Zm12.95 0V11.925q.375.125.762.3.388.175.688.325.75.4 1.175 1.112.425.713.425 1.563V20q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialPersonalInjuryFilled.displayName = 'AmauiIconMaterialPersonalInjuryFilled';

export default IconMaterialPersonalInjuryFilled;
