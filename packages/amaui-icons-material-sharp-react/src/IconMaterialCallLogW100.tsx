import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallLogW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallLogW100'

      short_name='CallLog'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-800v-28h348v28H480Zm0 128v-28h348v28H480Zm0 128v-28h348v28H480Zm222 412q-97 0-198.5-52t-184-134.5Q237-401 184.5-502T132-700v-42h161l33 151-106 97q56 94 125 162t163 120l102-107 134 28v159h-42ZM206-520l89-80-25-114H160v14q0 41 12.5 87t33.5 93Zm328 320q41 21 88.5 30.5T702-160h14v-109l-96-19-86 88ZM206-520Zm328 320Z"/>
    </Icon>
  );
});

IconMaterialCallLogW100.displayName = 'AmauiIconMaterialCallLogW100';

export default IconMaterialCallLogW100;
