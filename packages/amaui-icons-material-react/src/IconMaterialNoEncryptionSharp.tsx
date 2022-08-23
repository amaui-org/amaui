import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoEncryptionSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionSharp'
      short_name='NoEncryption'

      {...props}
    >
      <path d="M20 17.15 18 15.15V10H12.85L10.85 8H15V6Q15 4.725 14.125 3.862Q13.25 3 12 3Q10.75 3 9.875 3.862Q9 4.725 9 6V6.15L7.25 4.4Q7.775 2.925 9.062 1.962Q10.35 1 12 1Q14.075 1 15.538 2.438Q17 3.875 17 6V8H20ZM20.5 23.3 19.2 22H4V8H5.2L0.7 3.5L2.1 2.1L21.9 21.9ZM17.15 20 13.475 16.325Q13.175 16.625 12.8 16.825Q12.425 17.025 11.975 17.025Q11.15 17.025 10.562 16.438Q9.975 15.85 9.975 15.025Q9.975 14.575 10.15 14.188Q10.325 13.8 10.675 13.525L7.15 10H6V20ZM15.425 12.575ZM12.15 15Z"/>
    </Icon>
  );
});

IconMaterialNoEncryptionSharp.displayName = 'AmauiIconMaterialNoEncryptionSharp';

export default IconMaterialNoEncryptionSharp;
