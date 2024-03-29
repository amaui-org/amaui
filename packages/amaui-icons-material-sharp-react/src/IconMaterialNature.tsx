import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNature = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nature'

      short_name='Nature'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22v-2h6v-4H9q-2.075 0-3.537-1.463Q4 13.075 4 11q0-1.5.825-2.763Q5.65 6.975 7.05 6.4q.225-1.875 1.638-3.138Q10.1 2 12 2t3.312 1.262Q16.725 4.525 16.95 6.4q1.4.575 2.225 1.837Q20 9.5 20 11q0 2.075-1.462 3.537Q17.075 16 15 16h-2v4h6v2Zm4-8h6q1.25 0 2.125-.875T18 11q0-.9-.512-1.65-.513-.75-1.338-1.1L15.1 7.8l-.15-1.15q-.15-1.125-.987-1.888Q13.125 4 12 4t-1.962.762Q9.2 5.525 9.05 6.65L8.9 7.8l-1.05.45q-.825.35-1.337 1.1Q6 10.1 6 11q0 1.25.875 2.125T9 14Zm3-5Z"/>
    </Icon>
  );
});

IconMaterialNature.displayName = 'AmauiIconMaterialNature';

export default IconMaterialNature;
