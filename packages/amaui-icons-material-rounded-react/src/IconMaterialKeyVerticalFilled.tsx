import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVerticalFilled'

      short_name='KeyVertical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-560q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm1 505q-8 0-15-2.5T453-65l-103-90q-6-5-9.5-11.5T336-181q-1-8 1.5-15.5T345-210l55-70-52-52q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l52-52v-14q-72-25-116-87t-44-139q0-100 70-170t170-70q100 0 170 70t70 170q0 81-46 141.5T560-454v318q0 8-3 15.5t-9 13.5l-41 41q-5 5-11.5 8T481-55Z"/>
    </Icon>
  );
});

IconMaterialKeyVerticalFilled.displayName = 'AmauiIconMaterialKeyVerticalFilled';

export default IconMaterialKeyVerticalFilled;
