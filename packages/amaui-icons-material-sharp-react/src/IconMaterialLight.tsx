import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Light'

      short_name='Light'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-1.65 0-2.825-1.175Q8 18.65 8 17H3.225q-.1-.4-.163-.913Q3 15.575 3 15q.05-3.5 2.325-6.037Q7.6 6.425 11 6.05V3h2v3.05q3.4.375 5.675 2.913Q20.95 11.5 21 15q0 .575-.062 1.087-.063.513-.163.913H16q0 1.65-1.175 2.825Q13.65 21 12 21Zm-7-6h14q0-2.9-2.05-4.95Q14.9 8 12 8q-2.9 0-4.95 2.05Q5 12.1 5 15Zm7 4q.825 0 1.413-.587Q14 17.825 14 17h-4q0 .825.588 1.413Q11.175 19 12 19Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialLight.displayName = 'AmauiIconMaterialLight';

export default IconMaterialLight;
