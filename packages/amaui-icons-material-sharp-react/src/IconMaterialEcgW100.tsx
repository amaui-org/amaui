import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgW100'

      short_name='Ecg'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576ZM132 462V308h696v268h-28V336H160v126h-28Zm0 382V690h28v126h279v28H132Zm588 108-39-33q-82-71-104.5-97.5T554 769.11q0-32.363 22.109-55.737Q598.218 690 630 690q15.671 0 29.836 7Q674 704 690 718l30 27 28-26q16-14 31-21.5t31-7.5q31.091 0 53.545 23.373Q886 736.747 886 769.11q0 25.89-23 52.39T758 919l-38 33Zm0-38 32-27q67-57 86.5-78.5T858 769q0-20.4-14.4-35.7Q829.2 718 810 718q-11.81 0-21.405 4.5T768 738l-48 46-49-46q-11-11-20.75-15.5T630 718q-20 0-34 15.3T582 769q0 17.434 22 41.717Q626 835 690 889l30 25ZM132 590v-28h76l72 143 159-320 89 177h126v28H511l-72-142-160 320-88-178h-59Zm588 226Z"/>
    </Icon>
  );
});

IconMaterialEcgW100.displayName = 'AmauiIconMaterialEcgW100';

export default IconMaterialEcgW100;
