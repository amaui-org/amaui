import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltOffW100Filled'

      short_name='FilterAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 20.6-6.9-6.9V18q0 .275-.2.487-.2.213-.5.213-.275 0-.487-.213-.213-.212-.213-.487v-5.7L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-5.725-9.55L8.125 5.3H17.1q.425 0 .6.362.175.363-.1.688Z"/>
    </Icon>
  );
});

IconMaterialFilterAltOffW100Filled.displayName = 'AmauiIconMaterialFilterAltOffW100Filled';

export default IconMaterialFilterAltOffW100Filled;
